import { defineStore } from 'pinia'
import { db, type StoredUpload } from '@/db'

export interface MosaicImage {
  id: string
  name: string
  /** File size in bytes; name+size identifies duplicates. */
  size: number
  bitmap: ImageBitmap
  thumbUrl: string
  source: 'upload' | 'folder'
}

export interface AddResult {
  added: number
  duplicates: number
}

const IMAGE_EXT = /\.(png|jpe?g|webp|gif|avif|bmp)$/i
/** iPhone photo formats that browsers cannot decode; counted so we can explain empty scans. */
const HEIC_EXT = /\.(heic|heif)$/i
/** Tiles never render larger than this, so cap decoded size to keep memory sane. */
const MAX_TILE_DECODE = 1280
const MAX_FOLDER_DEPTH = 4
const MAX_FOLDER_IMAGES = 2000

export interface ScanResult {
  added: number
  failed: number
  heic: number
}

async function decodeBitmap(blob: Blob, maxSize?: number): Promise<ImageBitmap> {
  const full = await createImageBitmap(blob)
  if (!maxSize || Math.max(full.width, full.height) <= maxSize) return full
  const scale = maxSize / Math.max(full.width, full.height)
  const resized = await createImageBitmap(full, {
    resizeWidth: Math.max(1, Math.round(full.width * scale)),
    resizeHeight: Math.max(1, Math.round(full.height * scale)),
    resizeQuality: 'high',
  })
  full.close()
  return resized
}

export const useLibraryStore = defineStore('library', {
  state: () => ({
    images: [] as MosaicImage[],
    overlayBitmap: null as ImageBitmap | null,
    overlayUrl: '',
    backgroundBitmap: null as ImageBitmap | null,
    backgroundUrl: '',
    dirHandle: null as FileSystemDirectoryHandle | null,
    folderName: '',
    folderNeedsReconnect: false,
    initialized: false,
    initStarted: false,
  }),
  getters: {
    imageMap(state): Map<string, MosaicImage> {
      return new Map(state.images.map((img) => [img.id, img as MosaicImage]))
    },
    uploadCount: (state) => state.images.filter((i) => i.source === 'upload').length,
    folderCount: (state) => state.images.filter((i) => i.source === 'folder').length,
    folderSupported: () => 'showDirectoryPicker' in window,
  },
  actions: {
    async init() {
      // Guard against re-entry (e.g. component remounts during dev HMR).
      if (this.initStarted) return
      this.initStarted = true

      const uploads = (await db.getUploads()) ?? []

      // Heal libraries that accumulated duplicates before dedup existed:
      // keep the first of every name+size pair.
      const seen = new Set<string>()
      const unique = uploads.filter((u) => {
        const key = `${u.name}|${u.blob.size}`
        if (seen.has(key)) return false
        seen.add(key)
        return true
      })
      if (unique.length !== uploads.length) {
        try {
          await db.setUploads(unique)
        } catch {
          // Cleanup is best-effort.
        }
      }

      const decoded: MosaicImage[] = []
      for (const stored of unique) {
        try {
          const bitmap = await decodeBitmap(stored.blob, MAX_TILE_DECODE)
          decoded.push({
            id: stored.id,
            name: stored.name,
            size: stored.blob.size,
            bitmap,
            thumbUrl: URL.createObjectURL(stored.blob),
            source: 'upload',
          })
        } catch {
          // Skip files that fail to decode.
        }
      }
      if (decoded.length) this.images.push(...decoded)

      const overlayBlob = await db.getOverlay()
      if (overlayBlob) {
        this.overlayBitmap = await decodeBitmap(overlayBlob)
        this.overlayUrl = URL.createObjectURL(overlayBlob)
      }
      const bgBlob = await db.getBackground()
      if (bgBlob) {
        this.backgroundBitmap = await decodeBitmap(bgBlob)
        this.backgroundUrl = URL.createObjectURL(bgBlob)
      }

      try {
        const handle = await db.getDirHandle()
        if (handle) {
          this.dirHandle = handle
          this.folderName = handle.name
          const perm = await handle.queryPermission({ mode: 'read' })
          if (perm === 'granted') {
            await this.scanFolder()
          } else {
            this.folderNeedsReconnect = true
          }
        }
      } catch {
        // Handle may be unreadable (e.g. folder deleted); ignore.
      }

      this.initialized = true
    },

    async addFiles(files: Iterable<File>): Promise<AddResult> {
      const stored = (await db.getUploads()) ?? []
      const added: StoredUpload[] = []
      const decoded: MosaicImage[] = []
      // Same name + same byte size counts as a duplicate (also within this batch).
      const seen = new Set(this.images.map((img) => `${img.name}|${img.size}`))
      let duplicates = 0
      for (const file of files) {
        if (!file.type.startsWith('image/') && !IMAGE_EXT.test(file.name)) continue
        const key = `${file.name}|${file.size}`
        if (seen.has(key)) {
          duplicates++
          continue
        }
        const entry: StoredUpload = { id: crypto.randomUUID(), name: file.name, blob: file }
        try {
          const bitmap = await decodeBitmap(file, MAX_TILE_DECODE)
          decoded.push({
            id: entry.id,
            name: entry.name,
            size: file.size,
            bitmap,
            thumbUrl: URL.createObjectURL(file),
            source: 'upload',
          })
          added.push(entry)
          seen.add(key)
        } catch {
          // Not a decodable image; skip.
        }
      }
      // Push in one batch so the mosaic reshuffles once, not per file.
      if (decoded.length) this.images.push(...decoded)
      if (added.length) await db.setUploads([...stored, ...added])
      return { added: decoded.length, duplicates }
    },

    async removeImage(id: string) {
      const idx = this.images.findIndex((i) => i.id === id)
      if (idx === -1) return
      const [img] = this.images.splice(idx, 1)
      URL.revokeObjectURL(img.thumbUrl)
      img.bitmap.close()
      if (img.source === 'upload') {
        const stored = (await db.getUploads()) ?? []
        await db.setUploads(stored.filter((s) => s.id !== id))
      }
    },

    async clearAll() {
      for (const img of this.images) {
        URL.revokeObjectURL(img.thumbUrl)
        img.bitmap.close()
      }
      this.images = []
      await db.setUploads([])
      await this.disconnectFolder()
    },

    /** Returns the scan result, or null if the user cancelled the picker. */
    async linkFolder(): Promise<ScanResult | null> {
      let handle: FileSystemDirectoryHandle
      try {
        handle = await window.showDirectoryPicker({ id: 'mosaic-images' })
      } catch (err) {
        if ((err as DOMException)?.name === 'AbortError') return null
        throw err
      }
      return this.adoptFolderHandle(handle)
    },

    /** Link a folder from an existing handle (picker or drag-and-drop). */
    async adoptFolderHandle(handle: FileSystemDirectoryHandle): Promise<ScanResult> {
      this.dirHandle = handle
      this.folderName = handle.name
      this.folderNeedsReconnect = false
      try {
        await db.setDirHandle(handle)
      } catch {
        // Persisting the handle is best-effort; the session still works.
      }
      return this.scanFolder()
    },

    async reconnectFolder() {
      if (!this.dirHandle) return
      const perm = await this.dirHandle.requestPermission({ mode: 'read' })
      if (perm === 'granted') {
        this.folderNeedsReconnect = false
        await this.scanFolder()
      }
    },

    async scanFolder(): Promise<ScanResult> {
      const handle = this.dirHandle
      const result: ScanResult = { added: 0, failed: 0, heic: 0 }
      if (!handle) return result
      this.removeFolderImages()
      const decoded: MosaicImage[] = []
      // Skip files that already exist as uploads (same name + size).
      const seen = new Set(this.images.map((img) => `${img.name}|${img.size}`))

      const walk = async (dir: FileSystemDirectoryHandle, prefix: string, depth: number) => {
        try {
          for await (const entry of dir.values()) {
            if (decoded.length >= MAX_FOLDER_IMAGES) return
            if (entry.kind === 'directory') {
              if (depth < MAX_FOLDER_DEPTH) {
                await walk(entry, `${prefix}${entry.name}/`, depth + 1)
              }
            } else if (HEIC_EXT.test(entry.name)) {
              result.heic++
            } else if (IMAGE_EXT.test(entry.name)) {
              try {
                const file = await entry.getFile()
                const key = `${file.name}|${file.size}`
                if (seen.has(key)) continue
                const bitmap = await decodeBitmap(file, MAX_TILE_DECODE)
                decoded.push({
                  id: `folder:${prefix}${entry.name}`,
                  name: entry.name,
                  size: file.size,
                  bitmap,
                  thumbUrl: URL.createObjectURL(file),
                  source: 'folder',
                })
                seen.add(key)
              } catch {
                result.failed++
              }
            }
          }
        } catch {
          if (depth === 0) this.folderNeedsReconnect = true
        }
      }

      await walk(handle, '', 0)
      if (decoded.length) this.images.push(...decoded)
      result.added = decoded.length
      return result
    },

    async disconnectFolder() {
      this.removeFolderImages()
      this.dirHandle = null
      this.folderName = ''
      this.folderNeedsReconnect = false
      await db.clearDirHandle()
    },

    removeFolderImages() {
      for (const img of this.images) {
        if (img.source === 'folder') {
          URL.revokeObjectURL(img.thumbUrl)
          img.bitmap.close()
        }
      }
      this.images = this.images.filter((i) => i.source !== 'folder')
    },

    async setOverlay(file: File | null) {
      if (this.overlayBitmap) {
        this.overlayBitmap.close()
        URL.revokeObjectURL(this.overlayUrl)
        this.overlayBitmap = null
        this.overlayUrl = ''
      }
      await db.setOverlay(file)
      if (file) {
        this.overlayBitmap = await decodeBitmap(file)
        this.overlayUrl = URL.createObjectURL(file)
      }
    },

    async setBackgroundImage(file: File | null) {
      if (this.backgroundBitmap) {
        this.backgroundBitmap.close()
        URL.revokeObjectURL(this.backgroundUrl)
        this.backgroundBitmap = null
        this.backgroundUrl = ''
      }
      await db.setBackground(file)
      if (file) {
        this.backgroundBitmap = await decodeBitmap(file)
        this.backgroundUrl = URL.createObjectURL(file)
      }
    },
  },
})
