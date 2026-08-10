<script setup lang="ts">
import { ref } from 'vue'
import { VS2Button, VS2CollapsableCard, useNotifications } from '@thefamousgroup/vixi2-components'
import { useLibraryStore, type ScanResult } from '@/stores/library'

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

async function addFiles(files: Iterable<File>): Promise<number> {
  try {
    return await library.addFiles(files)
  } catch (err) {
    // Most likely a storage quota failure: images show now but will not survive a refresh.
    console.error(err)
    notify.error('Could not save images to browser storage. They may disappear on refresh.')
    return 0
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
  if (input.files?.length) await addFiles(input.files)
  input.value = ''
}

async function onFolderFiles(e: Event) {
  const input = e.target as HTMLInputElement
  if (input.files?.length) {
    const count = await addFiles(input.files)
    if (count > 0) notify.success(`Imported ${count} image${count === 1 ? '' : 's'} from the folder.`)
    else notify.error('No supported images found in that folder.')
  }
  input.value = ''
}

async function onDrop(e: DragEvent) {
  dragging.value = false
  const dt = e.dataTransfer
  if (!dt) return

  // Prefer file-system handles (Chromium): lets a dropped FOLDER become a live link.
  if (dt.items?.length && 'getAsFileSystemHandle' in DataTransferItem.prototype) {
    // Must be requested synchronously, before the drop event data is gone.
    const handlePromises: Promise<FileSystemHandle | null>[] = []
    for (const item of dt.items) {
      if (item.kind === 'file') handlePromises.push(item.getAsFileSystemHandle())
    }
    const handles = (await Promise.all(handlePromises)).filter(
      (h): h is FileSystemHandle => h !== null,
    )

    const dir = handles.find((h) => h.kind === 'directory')
    if (dir) {
      const result = await library.adoptFolderHandle(dir as FileSystemDirectoryHandle)
      notifyScanResult(result)
      return
    }

    const files: File[] = []
    for (const h of handles) {
      if (h.kind !== 'file') continue
      try {
        files.push(await (h as FileSystemFileHandle).getFile())
      } catch {
        // Skip unreadable entries.
      }
    }
    if (files.length) await addFiles(files)
    return
  }

  if (dt.files.length) await addFiles(dt.files)
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
