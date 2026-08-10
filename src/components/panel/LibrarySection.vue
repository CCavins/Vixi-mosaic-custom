<script setup lang="ts">
import { ref } from 'vue'
import { VS2Button, VS2CollapsableCard, useNotifications } from '@thefamousgroup/vixi2-components'
import { useLibraryStore, type AddResult, type ScanResult } from '@/stores/library'

const library = useLibraryStore()
const notify = useNotifications()
const open = ref(true)
const fileInput = ref<HTMLInputElement | null>(null)
const folderInput = ref<HTMLInputElement | null>(null)
const dragging = ref(false)

// Embedded Chromium (e.g. the Cursor/VS Code browser) exposes showDirectoryPicker
// but linked-folder handles cannot be read back, so prefer the plain directory
// file dialog there. Real Chrome/Edge keep live folder linking.
const IS_EMBEDDED = navigator.userAgent.includes('Electron')
const pickerBroken = ref(IS_EMBEDDED || !library.folderSupported)

async function addFiles(files: Iterable<File>): Promise<AddResult> {
  try {
    return await library.addFiles(files)
  } catch (err) {
    // Most likely a storage quota failure: images show now but will not survive a refresh.
    console.error(err)
    notify.error('Could not save images to browser storage. They may disappear on refresh.')
    return { added: 0, duplicates: 0 }
  }
}

function notifyDuplicates(result: AddResult) {
  if (result.duplicates > 0) {
    notify.success(
      `Added ${result.added} image${result.added === 1 ? '' : 's'}, skipped ${result.duplicates} duplicate${result.duplicates === 1 ? '' : 's'}.`,
    )
  }
}

function notifyScanResult(result: ScanResult) {
  const skipped = result.failed + result.heic
  if (result.added > 0) {
    notify.success(
      `Loaded ${result.added} image${result.added === 1 ? '' : 's'} from "${library.folderName}"` +
        (skipped ? ` (${skipped} unsupported file${skipped === 1 ? '' : 's'} skipped)` : '') +
        '.',
    )
  } else if (result.heic > 0) {
    notify.error(
      `Found ${result.heic} HEIC photo${result.heic === 1 ? '' : 's'} - browsers cannot display HEIC. Convert them to JPG first.`,
    )
  } else if (result.failed > 0) {
    notify.error('Found image files, but none of them could be decoded.')
  } else {
    notify.error(`No images found in "${library.folderName}". Supported: png, jpg, webp, gif, avif, bmp.`)
  }
}

async function onLinkFolder() {
  try {
    const result = await library.linkFolder()
    if (result === null) return
    if (result.added === 0 && result.failed === 0 && result.heic === 0) {
      // Either the folder is truly empty, or this environment cannot read
      // linked folders back. Switch to the import path either way.
      pickerBroken.value = true
      await library.disconnectFolder()
      notify.error('Could not read images from that folder here. Click the button again to import the folder instead.')
      return
    }
    notifyScanResult(result)
  } catch (err) {
    console.error(err)
    pickerBroken.value = true
    notify.error('Folder linking is not supported in this browser. Click the button again to import the folder instead.')
  }
}

async function onRescan() {
  notifyScanResult(await library.scanFolder())
}

async function onFiles(e: Event) {
  const input = e.target as HTMLInputElement
  if (input.files?.length) notifyDuplicates(await addFiles(input.files))
  input.value = ''
}

function notifyImportResult(result: AddResult) {
  if (result.added > 0) {
    notify.success(
      `Imported ${result.added} image${result.added === 1 ? '' : 's'}` +
        (result.duplicates
          ? `, skipped ${result.duplicates} duplicate${result.duplicates === 1 ? '' : 's'}`
          : '') +
        '.',
    )
  } else if (result.duplicates > 0) {
    notify.error(`All ${result.duplicates} images were already in the library.`)
  } else {
    notify.error('No supported images found in that folder.')
  }
}

async function onFolderFiles(e: Event) {
  const input = e.target as HTMLInputElement
  if (input.files?.length) notifyImportResult(await addFiles([...input.files]))
  input.value = ''
}

/** Read every entry of a directory reader (batches of ~100 until exhausted). */
function readAllEntries(reader: FileSystemDirectoryReader): Promise<FileSystemEntry[]> {
  return new Promise((resolve) => {
    const out: FileSystemEntry[] = []
    const step = () =>
      reader.readEntries(
        (batch) => {
          if (!batch.length) return resolve(out)
          out.push(...batch)
          step()
        },
        () => resolve(out),
      )
    step()
  })
}

async function entryFiles(entry: FileSystemEntry, depth: number): Promise<File[]> {
  if (entry.isFile) {
    return new Promise((resolve) =>
      (entry as FileSystemFileEntry).file(
        (file) => resolve([file]),
        () => resolve([]),
      ),
    )
  }
  if (entry.isDirectory && depth <= 4) {
    const children = await readAllEntries((entry as FileSystemDirectoryEntry).createReader())
    const out: File[] = []
    for (const child of children) out.push(...(await entryFiles(child, depth + 1)))
    return out
  }
  return []
}

async function onDrop(e: DragEvent) {
  dragging.value = false
  const dt = e.dataTransfer
  if (!dt) return

  // Entries must be grabbed synchronously before the drop data is released.
  const entries: FileSystemEntry[] = []
  const plainFiles: File[] = []
  let droppedFolder = false
  if (dt.items?.length) {
    for (const item of dt.items) {
      if (item.kind !== 'file') continue
      const entry = item.webkitGetAsEntry?.()
      if (entry) {
        if (entry.isDirectory) droppedFolder = true
        entries.push(entry)
      } else {
        const file = item.getAsFile()
        if (file) plainFiles.push(file)
      }
    }
  } else {
    plainFiles.push(...dt.files)
  }

  const files: File[] = [...plainFiles]
  for (const entry of entries) files.push(...(await entryFiles(entry, 0)))
  if (!files.length && !droppedFolder) return

  // Dropped folders import their images as uploads - same as the folder
  // import button - rather than creating a live folder link.
  const result = await addFiles(files)
  if (droppedFolder) notifyImportResult(result)
  else notifyDuplicates(result)
}
</script>

<template>
  <VS2CollapsableCard v-model="open" title="Images">
    <div class="section-body">
      <div
        class="dropzone"
        :class="{ dragging }"
        @click="fileInput?.click()"
        @dragover.prevent="dragging = true"
        @dragleave="dragging = false"
        @drop.prevent="onDrop"
      >
        <span class="v2-sm-text">Drop images or a whole folder here, or click to upload</span>
      </div>
      <input ref="fileInput" type="file" accept="image/*" multiple hidden @change="onFiles" />
      <input ref="folderInput" type="file" webkitdirectory hidden @change="onFolderFiles" />

      <VS2Button
        v-if="!library.folderName"
        variant="secondary"
        block
        @click="pickerBroken ? folderInput?.click() : onLinkFolder()"
      >
        {{ pickerBroken ? 'Import image folder' : 'Link image folder' }}
      </VS2Button>
      <div v-else class="folder-row">
        <span class="v2-sm-text folder-name" :title="library.folderName">
          Folder: {{ library.folderName }}
        </span>
        <VS2Button
          v-if="library.folderNeedsReconnect"
          variant="primary"
          @click="library.reconnectFolder()"
        >
          Reconnect
        </VS2Button>
        <VS2Button v-else variant="secondary" @click="onRescan">Rescan</VS2Button>
        <VS2Button variant="destructive" @click="library.disconnectFolder()">Unlink</VS2Button>
      </div>

      <div v-if="library.images.length" class="thumb-grid">
        <div v-for="img in library.images" :key="img.id" class="thumb">
          <img :src="img.thumbUrl" :alt="img.name" loading="lazy" />
          <span class="thumb-name">{{ img.name }}</span>
          <button
            class="thumb-remove"
            :title="`Remove ${img.name}`"
            @click="library.removeImage(img.id)"
          >
            &times;
          </button>
        </div>
      </div>

      <div v-if="library.images.length" class="lib-footer">
        <span class="v2-xs-text">
          {{ library.images.length }} image{{ library.images.length === 1 ? '' : 's' }}
        </span>
        <VS2Button variant="destructive" @click="library.clearAll()">Clear all</VS2Button>
      </div>
    </div>
  </VS2CollapsableCard>
</template>
