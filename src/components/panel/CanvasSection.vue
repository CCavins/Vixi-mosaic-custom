<script setup lang="ts">
import { computed, ref } from 'vue'
import { VS2CollapsableCard, VS2Select } from '@thefamousgroup/vixi2-components'
import { useRecordingStore } from '@/stores/recording'
import { RESOLUTIONS, useSettingsStore, type ResolutionKey } from '@/stores/settings'

const settings = useSettingsStore()
const recording = useRecordingStore()
const open = ref(true)

const items = Object.values(RESOLUTIONS).map((r) => r.label)
const current = computed(() => RESOLUTIONS[settings.resolution].label)

function onChange(label: string) {
  const key = (Object.keys(RESOLUTIONS) as ResolutionKey[]).find(
    (k) => RESOLUTIONS[k].label === label,
  )
  if (key) settings.resolution = key
}
</script>

<template>
  <VS2CollapsableCard v-model="open" title="Canvas">
    <div class="section-body">
      <!-- Locked while recording: the H.264 encoder cannot handle a canvas resize mid-stream -->
      <VS2Select
        label="Resolution"
        :items="items"
        :model-value="current"
        :disabled="recording.active"
        @update:model-value="onChange"
      />
    </div>
  </VS2CollapsableCard>
</template>
