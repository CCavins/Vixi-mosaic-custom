<script setup lang="ts">
import { computed, ref } from 'vue'
import { VS2CollapsableCard, VS2Select } from '@thefamousgroup/vixi2-components'
import { RESOLUTIONS, useSettingsStore, type ResolutionKey } from '@/stores/settings'

const settings = useSettingsStore()
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
      <VS2Select
        label="Resolution"
        :items="items"
        :model-value="current"
        @update:model-value="onChange"
      />
    </div>
  </VS2CollapsableCard>
</template>
