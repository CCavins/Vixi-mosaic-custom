<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, provide, ref, watch } from 'vue'
import { VS2Notification } from '@thefamousgroup/vixi2-components'
import ControlPanel from '@/components/ControlPanel.vue'
import { MosaicEngine } from '@/engine/MosaicEngine'
import { useLibraryStore } from '@/stores/library'
import { RESOLUTIONS, decodeTierFor, useSettingsStore } from '@/stores/settings'

const settings = useSettingsStore()
const library = useLibraryStore()

const canvasRef = ref<HTMLCanvasElement | null>(null)
const stageRef = ref<HTMLDivElement | null>(null)
const stageSize = ref({ w: 1, h: 1 })

provide('mosaicCanvas', canvasRef)

const res = computed(() => RESOLUTIONS[settings.resolution])

const displayStyle = computed(() => {
  const pad = 24
  const scale = Math.min(
    (stageSize.value.w - pad) / res.value.width,
    (stageSize.value.h - pad) / res.value.height,
  )
  return {
    width: `${Math.max(1, res.value.width * scale)}px`,
    height: `${Math.max(1, res.value.height * scale)}px`,
  }
})

let engine: MosaicEngine | null = null
let resizeObserver: ResizeObserver | null = null

settings.$subscribe(() => settings.persist())

// When the tile size settles after a change, re-decode bitmaps to match so
// slide motion stays smooth without needing a page refresh.
let retargetTimer = 0
watch(
  () => settings.tileSize,
  (size) => {
    window.clearTimeout(retargetTimer)
    retargetTimer = window.setTimeout(() => library.retargetBitmaps(decodeTierFor(size)), 400)
  },
)

onMounted(() => {
  library.init()
  engine = new MosaicEngine(
    canvasRef.value!,
    () => settings.$state,
    () => library.imageMap,
    () => library.overlayBitmap,
    () => library.backgroundBitmap,
  )
  engine.start()

  resizeObserver = new ResizeObserver((entries) => {
    const { width, height } = entries[0].contentRect
    stageSize.value = { w: width, h: height }
  })
  resizeObserver.observe(stageRef.value!)
})

onBeforeUnmount(() => {
  engine?.stop()
  resizeObserver?.disconnect()
})
</script>

<template>
  <v-app>
    <div class="app-layout">
      <div ref="stageRef" class="stage">
        <canvas
          ref="canvasRef"
          class="mosaic-canvas"
          :width="res.width"
          :height="res.height"
          :style="displayStyle"
        ></canvas>
        <div v-if="library.initialized && library.images.length === 0" class="stage-hint">
          <span class="v2-md-text-medium">No images yet</span>
          <span class="v2-sm-text">Upload images or link a folder in the panel on the right</span>
        </div>
      </div>
      <aside class="sidebar">
        <ControlPanel />
      </aside>
    </div>
    <VS2Notification />
  </v-app>
</template>
