<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  VS2AssetUploader,
  VS2Button,
  VS2CollapsableCard,
  VS2Switch,
} from '@thefamousgroup/vixi2-components'
import { useLibraryStore } from '@/stores/library'
import { useSettingsStore } from '@/stores/settings'

const settings = useSettingsStore()
const library = useLibraryStore()
const open = ref(true)

const overlayRes = computed(() =>
  library.overlayBitmap ? `${library.overlayBitmap.width} × ${library.overlayBitmap.height} px` : '',
)

async function onAsset(
  resolve: () => void,
  reject: (reason?: unknown) => void,
  file: File | null,
) {
  try {
    await library.setOverlay(file)
    resolve()
  } catch (err) {
    reject(err)
  }
}
</script>

<template>
  <VS2CollapsableCard v-model="open" title="Overlay">
    <div class="section-body">
      <span class="v2-xs-text" style="color: rgb(var(--v-theme-light-gray-100))">
        Transparent PNG drawn on top of the mosaic, stretched to the canvas.
      </span>

      <div class="uploader-box">
        <VS2AssetUploader
          alt="Overlay PNG"
          :size-limit-m-b="50"
          :types="['image/png']"
          :accepted-extensions="['.png']"
          asset-type="image"
          height="96px"
          width="100%"
          @update:asset="onAsset"
        />
      </div>

      <div v-if="library.overlayUrl" class="asset-preview">
        <img :src="library.overlayUrl" alt="Overlay preview" />
        <div class="asset-preview-meta">
          <span class="v2-xs-text">{{ overlayRes }}</span>
          <VS2Button variant="destructive" @click="library.setOverlay(null)">Remove</VS2Button>
        </div>
      </div>

      <VS2Switch
        v-model="settings.overlayVisible"
        label="Show overlay"
        :disabled="!library.overlayUrl"
      />
    </div>
  </VS2CollapsableCard>
</template>
