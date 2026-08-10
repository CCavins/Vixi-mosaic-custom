<script setup lang="ts">
import { computed, ref } from 'vue'
import { VS2CollapsableCard, VS2Select, VS2Slider } from '@thefamousgroup/vixi2-components'
import { useSettingsStore, type MotionMode } from '@/stores/settings'

const settings = useSettingsStore()
const open = ref(true)

const MODES: { label: string; value: MotionMode }[] = [
  { label: 'Static', value: 'static' },
  { label: 'Dissolve (crossfade)', value: 'dissolve' },
  { label: 'Slide', value: 'slide' },
]

const DIRECTIONS: { label: string; angle: number | null }[] = [
  { label: 'Left to right', angle: 0 },
  { label: 'Top to bottom', angle: 90 },
  { label: 'Right to left', angle: 180 },
  { label: 'Bottom to top', angle: 270 },
  { label: 'Diagonal (down-right)', angle: 45 },
  { label: 'Diagonal (up-left)', angle: 225 },
  { label: 'Custom angle', angle: null },
]

const modeLabel = computed(() => MODES.find((m) => m.value === settings.motionMode)!.label)
const directionLabel = computed(
  () =>
    (DIRECTIONS.find((d) => d.angle === settings.slideAngle) ?? DIRECTIONS[DIRECTIONS.length - 1])
      .label,
)

function onMode(label: string) {
  const found = MODES.find((m) => m.label === label)
  if (found) settings.motionMode = found.value
}
function onDirection(label: string) {
  const found = DIRECTIONS.find((d) => d.label === label)
  if (found && found.angle !== null) settings.slideAngle = found.angle
}
</script>

<template>
  <VS2CollapsableCard v-model="open" title="Motion">
    <div class="section-body">
      <VS2Select
        label="Mode"
        :items="MODES.map((m) => m.label)"
        :model-value="modeLabel"
        @update:model-value="onMode"
      />

      <template v-if="settings.motionMode === 'slide'">
        <VS2Select
          label="Direction"
          :items="DIRECTIONS.map((d) => d.label)"
          :model-value="directionLabel"
          @update:model-value="onDirection"
        />

        <div class="field">
          <div class="field-label">
            <span class="v2-sm-text">Angle</span>
            <span class="v2-xs-text field-value">{{ settings.slideAngle }}&deg;</span>
          </div>
          <VS2Slider v-model="settings.slideAngle" :min="0" :max="355" :step="5" />
        </div>

        <div class="field">
          <div class="field-label">
            <span class="v2-sm-text">Speed</span>
            <span class="v2-xs-text field-value">{{ settings.slideSpeed }}px/s</span>
          </div>
          <VS2Slider v-model="settings.slideSpeed" :min="5" :max="400" :step="5" />
        </div>
      </template>

      <template v-if="settings.motionMode === 'dissolve'">
        <div class="field">
          <div class="field-label">
            <span class="v2-sm-text">Swap interval</span>
            <span class="v2-xs-text field-value">~{{ settings.dissolveInterval }}s</span>
          </div>
          <VS2Slider v-model="settings.dissolveInterval" :min="1" :max="30" :step="1" />
        </div>

        <div class="field">
          <div class="field-label">
            <span class="v2-sm-text">Fade duration</span>
            <span class="v2-xs-text field-value">{{ settings.dissolveFade }}s</span>
          </div>
          <VS2Slider v-model="settings.dissolveFade" :min="0.2" :max="5" :step="0.2" />
        </div>
      </template>
    </div>
  </VS2CollapsableCard>
</template>
