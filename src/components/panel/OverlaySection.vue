<script setup lang="ts">
import { ref } from 'vue'
import {
  VS2AssetUploader,
  VS2CollapsableCard,
  VS2Switch,
} from '@thefamousgroup/vixi2-components'
import { useLibraryStore } from '@/stores/library'
import { useSettingsStore } from '@/stores/settings'

const settings = useSettingsStore()
const library = useLibraryStore()
const open = ref(true)

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

async function onClear(resolve: () => void, reject: (reason?: unknown) => void) {
  try {
    await library.setOverlay(null)
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
        <!-- key forces a remount: VS2AssetView captures src once at setup -->
        <VS2AssetUploader
          :key="library.overlayUrl"
          alt="Overlay PNG"
          :src="library.overlayUrl || undefined"
          :size-limit-m-b="50"
          :types="['image/png']"
          :accepted-extensions="['.png']"
          asset-type="image"
          height="120px"
          width="100%"
          @update:asset="onAsset"
          @update:clear="onClear"
        />
      </div>

      <VS2Switch
        v-model="settings.overlayVisible"
        label="Show overlay"
        :disabled="!library.overlayUrl"
      />
    </div>
  </VS2CollapsableCard>
</template>
