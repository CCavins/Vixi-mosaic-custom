<script setup lang="ts">
import { ref } from 'vue'
import { VS2Button, VS2CollapsableCard } from '@thefamousgroup/vixi2-components'
import { useLibraryStore } from '@/stores/library'

const library = useLibraryStore()
const open = ref(true)
const fileInput = ref<HTMLInputElement | null>(null)
const dragging = ref(false)

async function onFiles(e: Event) {
  const input = e.target as HTMLInputElement
  if (input.files?.length) await library.addFiles(input.files)
  input.value = ''
}

async function onDrop(e: DragEvent) {
  dragging.value = false
  if (e.dataTransfer?.files.length) await library.addFiles(e.dataTransfer.files)
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
        <span class="v2-sm-text">Drop images here or click to upload</span>
      </div>
      <input ref="fileInput" type="file" accept="image/*" multiple hidden @change="onFiles" />

      <template v-if="library.folderSupported">
        <VS2Button
          v-if="!library.folderName"
          variant="secondary"
          block
          @click="library.linkFolder()"
        >
          Link image folder
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
          <VS2Button v-else variant="secondary" @click="library.scanFolder()">Rescan</VS2Button>
          <VS2Button variant="destructive" @click="library.disconnectFolder()">Unlink</VS2Button>
        </div>
      </template>
      <span v-else class="v2-xs-text" style="color: rgb(var(--v-theme-light-gray-100))">
        Folder linking requires Chrome or Edge.
      </span>

      <div v-if="library.images.length" class="thumb-grid">
        <div v-for="img in library.images" :key="img.id" class="thumb">
          <img :src="img.thumbUrl" :alt="img.name" :title="img.name" />
          <button class="thumb-remove" @click="library.removeImage(img.id)">&times;</button>
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
