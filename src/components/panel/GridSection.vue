<script setup lang="ts">
import { computed, ref } from 'vue'
import { VS2CollapsableCard, VS2Select, VS2Slider } from '@thefamousgroup/vixi2-components'
import { useSettingsStore, type CellShape, type GridPattern } from '@/stores/settings'

const settings = useSettingsStore()
const open = ref(true)

const PATTERNS: { label: string; value: GridPattern }[] = [
  { label: 'Uniform grid', value: 'grid' },
  { label: 'Brick (offset rows)', value: 'brick' },
]
const SHAPES: { label: string; value: CellShape }[] = [
  { label: 'Square', value: 'square' },
  { label: 'Landscape (16:9)', value: 'landscape' },
  { label: 'Portrait (3:4)', value: 'portrait' },
]

const patternLabel = computed(() => PATTERNS.find((p) => p.value === settings.gridPattern)!.label)
const shapeLabel = computed(() => SHAPES.find((s) => s.value === settings.cellShape)!.label)

function onPattern(label: string) {
  const found = PATTERNS.find((p) => p.label === label)
  if (found) settings.gridPattern = found.value
}
function onShape(label: string) {
  const found = SHAPES.find((s) => s.label === label)
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
        <VS2Slider v-model="settings.tileSize" :min="60" :max="800" :step="10" />
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
        :items="SHAPES.map((s) => s.label)"
        :model-value="shapeLabel"
        @update:model-value="onShape"
      />
    </div>
  </VS2CollapsableCard>
</template>
