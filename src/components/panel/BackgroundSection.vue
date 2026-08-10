<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  VS2AssetUploader,
  VS2Button,
  VS2CollapsableCard,
  VS2Select,
} from '@thefamousgroup/vixi2-components'
import { useLibraryStore } from '@/stores/library'
import { useSettingsStore, type BackgroundType } from '@/stores/settings'

const settings = useSettingsStore()
const library = useLibraryStore()
const open = ref(true)
const pickerOpen = ref(false)

// vixi theme palette for quick picks
const SWATCHES = [
  ['#000000', '#1B1B1B', '#262626'],
  ['#333333', '#5D5E60', '#C5C5C5'],
  ['#FFFFFF', '#D52265', '#FEC651'],
  ['#4DBD74', '#51D9FE', '#FF5E4E'],
]

const TYPES: { label: string; value: BackgroundType }[] = [
  { label: 'Solid color', value: 'color' },
  { label: 'Image', value: 'image' },
]

const typeLabel = computed(() => TYPES.find((t) => t.value === settings.backgroundType)!.label)

const backgroundRes = computed(() =>
  library.backgroundBitmap
    ? `${library.backgroundBitmap.width} × ${library.backgroundBitmap.height} px`
    : '',
)

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

      <template v-if="settings.backgroundType === 'color'">
        <div class="field-row color-row" @click="pickerOpen = !pickerOpen">
          <span class="v2-sm-text">Background color</span>
          <div class="color-row-right">
            <span class="v2-xs-text color-hex">{{ settings.backgroundColor }}</span>
            <div
              class="color-swatch"
              :style="{ backgroundColor: settings.backgroundColor }"
            ></div>
          </div>
        </div>
        <v-expand-transition>
          <div v-show="pickerOpen">
            <v-color-picker
              v-model="settings.backgroundColor"
              mode="hex"
              :modes="['hex', 'rgb']"
              show-swatches
              :swatches="SWATCHES"
              swatches-max-height="120"
              elevation="0"
              width="100%"
              class="bg-color-picker"
            />
          </div>
        </v-expand-transition>
      </template>

      <template v-else>
        <div class="uploader-box">
          <VS2AssetUploader
            alt="Background image"
            :size-limit-m-b="50"
            :types="['image/jpeg', 'image/png', 'image/webp', 'image/gif']"
            asset-type="image"
            height="96px"
            width="100%"
            @update:asset="onAsset"
          />
        </div>

        <div v-if="library.backgroundUrl" class="asset-preview">
          <img :src="library.backgroundUrl" alt="Background preview" />
          <div class="asset-preview-meta">
            <span class="v2-xs-text">{{ backgroundRes }}</span>
            <VS2Button variant="destructive" @click="library.setBackgroundImage(null)">
              Remove
            </VS2Button>
          </div>
        </div>
      </template>
    </div>
  </VS2CollapsableCard>
</template>
