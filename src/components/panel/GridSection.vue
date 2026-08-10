<script setup lang="ts">
import { computed, ref } from 'vue'
import { VS2CollapsableCard, VS2Select, VS2Slider } from '@thefamousgroup/vixi2-components'
import { CELL_SHAPES, useSettingsStore, type GridPattern } from '@/stores/settings'

const settings = useSettingsStore()
const open = ref(true)

const PATTERNS: { label: string; value: GridPattern }[] = [
  { label: 'Uniform grid', value: 'grid' },
  { label: 'Brick (offset rows)', value: 'brick' },
]

const patternLabel = computed(() => PATTERNS.find((p) => p.value === settings.gridPattern)!.label)
const shapeLabel = computed(
  () => CELL_SHAPES.find((s) => s.value === settings.cellShape)?.label ?? settings.cellShape,
)

function onPattern(label: string) {
  const found = PATTERNS.find((p) => p.label === label)
  if (found) settings.gridPattern = found.value
}
function onShape(label: string) {
  const found = CELL_SHAPES.find((s) => s.label === label)
  if (found) settings.cellShape = found.value
}
</script>

<template>
  <VS2CollapsableCard v-model="open" title="Grid">
    <div class="section-body">
      <div class="field">
        <div class="field-label">
          <span class="v2-sm-text">Tile size</span>
          <span class="v2-xs-text field-value">{{ settings.tileSize }}px</span>
        </div>
        <VS2Slider v-model="settings.tileSize" :min="20" :max="800" :step="10" />
      </div>

      <div class="field">
        <div class="field-label">
          <span class="v2-sm-text">Spacing between tiles</span>
          <span class="v2-xs-text field-value">{{ settings.gap }}px</span>
        </div>
        <VS2Slider v-model="settings.gap" :min="0" :max="64" :step="1" />
      </div>

      <VS2Select
        label="Pattern"
        :items="PATTERNS.map((p) => p.label)"
        :model-value="patternLabel"
        @update:model-value="onPattern"
      />

      <VS2Select
        label="Tile shape"
        :items="CELL_SHAPES.map((s) => s.label)"
        :model-value="shapeLabel"
        @update:model-value="onShape"
      />
    </div>
  </VS2CollapsableCard>
</template>
