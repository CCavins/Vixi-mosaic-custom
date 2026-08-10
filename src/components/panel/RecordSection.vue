<script setup lang="ts">
import { computed, inject, onBeforeUnmount, ref, type Ref } from 'vue'
import {
  VS2Button,
  VS2CollapsableCard,
  VS2Select,
  VS2Slider,
  useNotifications,
} from '@thefamousgroup/vixi2-components'
import {
  downloadRecording,
  pickMimeType,
  startRecording,
  type RecordingHandle,
} from '@/engine/recorder'
import { useLibraryStore } from '@/stores/library'
import { useSettingsStore } from '@/stores/settings'

const settings = useSettingsStore()
const library = useLibraryStore()
const notify = useNotifications()

const canvasRef = inject<Ref<HTMLCanvasElement | null>>('mosaicCanvas')

const open = ref(true)
const recording = ref(false)
const elapsed = ref(0)
let handle: RecordingHandle | null = null

const format = pickMimeType()
const FPS_ITEMS = ['30 fps', '60 fps']
const fpsLabel = computed(() => `${settings.recordFps} fps`)

function onFps(label: string) {
  settings.recordFps = label.startsWith('60') ? 60 : 30
}

function mmss(totalSec: number): string {
  const s = Math.max(0, Math.round(totalSec))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

const durationLabel = computed(() => mmss(settings.recordDuration))
const progress = computed(() =>
  Math.min(100, (elapsed.value / settings.recordDuration) * 100),
)

function start() {
  const canvas = canvasRef?.value
  if (!canvas) return
  elapsed.value = 0
  handle = startRecording(canvas, settings.recordFps, settings.recordDuration, {
    onProgress: (sec) => (elapsed.value = sec),
    onDone: (result) => {
      recording.value = false
      handle = null
      downloadRecording(result, settings.resolution)
      notify.success(`Saved ${result.extension.toUpperCase()} recording.`)
    },
    onError: (message) => {
      recording.value = false
      handle = null
      notify.error(message)
    },
  })
  if (handle) recording.value = true
}

function stop() {
  handle?.stop()
}

onBeforeUnmount(() => handle?.cancel())
</script>

<template>
  <VS2CollapsableCard v-model="open" title="Record">
    <div class="section-body">
      <div class="field">
        <div class="field-label">
          <span class="v2-sm-text">Duration</span>
          <span class="v2-xs-text field-value">{{ durationLabel }}</span>
        </div>
        <VS2Slider
          v-model="settings.recordDuration"
          :min="15"
          :max="600"
          :step="15"
          :disabled="recording"
        />
      </div>

      <VS2Select
        label="Frame rate"
        :items="FPS_ITEMS"
        :model-value="fpsLabel"
        :disabled="recording"
        @update:model-value="onFps"
      />

      <template v-if="!recording">
        <VS2Button
          variant="primary"
          block
          :disabled="library.images.length === 0"
          @click="start"
        >
          Start recording ({{ durationLabel }})
        </VS2Button>
        <span class="v2-xs-text" style="color: rgb(var(--v-theme-light-gray-100))">
          Output: {{ format ? format.extension.toUpperCase() : 'not supported in this browser' }}
          at {{ settings.resolution === '4k' ? '3840x2160' : settings.resolution === '1080p' ? '1920x1080' : '1280x720' }}.
          Keep this tab visible while recording.
        </span>
      </template>

      <template v-else>
        <div class="record-status">
          <span class="v2-sm-text"><span class="record-dot"></span>Recording</span>
          <span class="v2-sm-text">{{ mmss(elapsed) }} / {{ durationLabel }}</span>
        </div>
        <v-progress-linear :model-value="progress" color="error" height="6" rounded />
        <VS2Button variant="destructive" block @click="stop">Stop &amp; save now</VS2Button>
      </template>
    </div>
  </VS2CollapsableCard>
</template>
