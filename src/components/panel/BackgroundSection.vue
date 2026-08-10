<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  VS2AssetUploader,
  VS2CollapsableCard,
  VS2ColorPicker,
  VS2Select,
} from '@thefamousgroup/vixi2-components'
import { useLibraryStore } from '@/stores/library'
import { useSettingsStore, type BackgroundType } from '@/stores/settings'

const settings = useSettingsStore()
const library = useLibraryStore()
const open = ref(true)

const TYPES: { label: string; value: BackgroundType }[] = [
  { label: 'Solid color', value: 'color' },
  { label: 'Image', value: 'image' },
]

const typeLabel = computed(() => TYPES.find((t) => t.value === settings.backgroundType)!.label)

function onType(label: string) {
  const found = TYPES.find((t) => t.label === label)
  if (found) settings.backgroundType = found.value
}

async function onAsset(
  resolve: () => void,
  reject: (reason?: unknown) => void,
  file: File | null,
) {
  try {
    await library.setBackgroundImage(file)
    resolve()
  } catch (err) {
    reject(err)
  }
}

async function onClear(resolve: () => void, reject: (reason?: unknown) => void) {
  try {
    await library.setBackgroundImage(null)
    resolve()
  } catch (err) {
    reject(err)
  }
}
</script>

<template>
  <VS2CollapsableCard v-model="open" title="Background">
    <div class="section-body">
      <VS2Select
        label="Type"
        :items="TYPES.map((t) => t.label)"
        :model-value="typeLabel"
        @update:model-value="onType"
      />

      <div v-if="settings.backgroundType === 'color'" class="field-row">
        <span class="v2-sm-text">Background color</span>
        <VS2ColorPicker v-model="settings.backgroundColor" />
      </div>

      <div v-else class="uploader-box">
        <!-- key forces a remount: VS2AssetView captures src once at setup -->
        <VS2AssetUploader
          :key="library.backgroundUrl"
          alt="Background image"
          :src="library.backgroundUrl || undefined"
          :size-limit-m-b="50"
          :types="['image/jpeg', 'image/png', 'image/webp', 'image/gif']"
          asset-type="image"
          height="120px"
          width="100%"
          @update:asset="onAsset"
          @update:clear="onClear"
        />
      </div>
    </div>
  </VS2CollapsableCard>
</template>
