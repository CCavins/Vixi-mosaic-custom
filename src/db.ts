import { del, get, set } from 'idb-keyval'

const KEYS = {
  uploads: 'mosaic.uploads',
  overlay: 'mosaic.overlay',
  background: 'mosaic.backgroundImage',
  dirHandle: 'mosaic.dirHandle',
} as const

export interface StoredUpload {
  id: string
  name: string
  blob: Blob
}

export const db = {
  getUploads: () => get<StoredUpload[]>(KEYS.uploads),
  setUploads: (uploads: StoredUpload[]) => set(KEYS.uploads, uploads),

  getOverlay: () => get<Blob>(KEYS.overlay),
  setOverlay: (blob: Blob | null) => (blob ? set(KEYS.overlay, blob) : del(KEYS.overlay)),

  getBackground: () => get<Blob>(KEYS.background),
  setBackground: (blob: Blob | null) => (blob ? set(KEYS.background, blob) : del(KEYS.background)),

  getDirHandle: () => get<FileSystemDirectoryHandle>(KEYS.dirHandle),
  setDirHandle: (handle: FileSystemDirectoryHandle) => set(KEYS.dirHandle, handle),
  clearDirHandle: () => del(KEYS.dirHandle),
}
