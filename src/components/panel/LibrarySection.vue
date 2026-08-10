<script setup lang="ts">
import { ref } from 'vue'
import { VS2Button, VS2CollapsableCard, useNotifications } from '@thefamousgroup/vixi2-components'
import { useLibraryStore } from '@/stores/library'

const library = useLibraryStore()
const notify = useNotifications()
const open = ref(true)
const fileInput = ref<HTMLInputElement | null>(null)
const folderInput = ref<HTMLInputElement | null>(null)
const dragging = ref(false)

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

function notifyScanResult(count: number) {
  if (count > 0) {
    notify.success(`Loaded ${count} image${count === 1 ? '' : 's'} from "${library.folderName}".`)
  } else {
    notify.error(`No images found in "${library.folderName}". Supported: png, jpg, webp, gif, avif, bmp.`)
  }
}

async function onLinkFolder() {
  try {
    const count = await library.linkFolder()
    if (count !== null) notifyScanResult(count)
  } catch (err) {
    // Some environments (e.g. embedded browsers) expose showDirectoryPicker but
    // cannot open the native dialog. Fall back to a directory file input.
    console.error(err)
    folderInput.value?.click()
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
      const count = await library.adoptFolderHandle(dir as FileSystemDirectoryHandle)
      notifyScanResult(count)
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
        v-if="library.folderSupported && !library.folderName"
        variant="secondary"
        block
        @click="onLinkFolder"
      >
        Link image folder
      </VS2Button>
      <VS2Button
        v-else-if="!library.folderSupported"
        variant="secondary"
        block
        @click="folderInput?.click()"
      >
        Import image folder
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
