import { defineStore } from 'pinia'

export type ResolutionKey = '720p' | '1080p' | '4k'
export type MotionMode = 'static' | 'dissolve' | 'slide'
export type GridPattern = 'grid' | 'brick'
/** Tile aspect ratio expressed as "w:h" (e.g. "2:3"). */
export type CellShape = string
export type BackgroundType = 'color' | 'image'
export type FitMode = 'stretch' | 'cover' | 'contain'

export const FIT_OPTIONS: { label: string; value: FitMode }[] = [
  { label: 'Stretch to fill', value: 'stretch' },
  { label: 'Fill (crop to fit)', value: 'cover' },
  { label: 'Fit inside (no crop)', value: 'contain' },
]

export const CELL_SHAPES: { label: string; value: CellShape }[] = [
  { label: 'Square (1:1)', value: '1:1' },
  { label: 'Portrait (2:3)', value: '2:3' },
  { label: 'Portrait (3:4)', value: '3:4' },
  { label: 'Portrait (9:16)', value: '9:16' },
  { label: 'Landscape (3:2)', value: '3:2' },
  { label: 'Landscape (4:3)', value: '4:3' },
  { label: 'Landscape (16:9)', value: '16:9' },
]

/** Parse a "w:h" shape into width/height aspect; defaults to square. */
export function cellAspect(shape: CellShape): number {
  const match = /^(\d+):(\d+)$/.exec(shape)
  if (!match) return 1
  const w = Number(match[1])
  const h = Number(match[2])
  return h > 0 ? w / h : 1
}

export const RESOLUTIONS: Record<ResolutionKey, { width: number; height: number; label: string }> = {
  '720p': { width: 1280, height: 720, label: 'HD 720p (1280 x 720)' },
  '1080p': { width: 1920, height: 1080, label: 'Full HD 1080p (1920 x 1080)' },
  '4k': { width: 3840, height: 2160, label: '4K UHD (3840 x 2160)' },
}

export interface SettingsState {
  resolution: ResolutionKey
  tileSize: number
  gridPattern: GridPattern
  cellShape: CellShape
  gap: number
  motionMode: MotionMode
  slideAngle: number
  slideSpeed: number
  dissolveInterval: number
  dissolveFade: number
  backgroundType: BackgroundType
  backgroundColor: string
  backgroundFit: FitMode
  overlayVisible: boolean
  overlayFit: FitMode
  recordDuration: number
  recordFps: number
}

const STORAGE_KEY = 'mosaic.settings.v1'

const DEFAULTS: SettingsState = {
  resolution: '1080p',
  tileSize: 240,
  gridPattern: 'grid',
  cellShape: '2:3',
  gap: 0,
  motionMode: 'slide',
  slideAngle: 45,
  slideSpeed: 40,
  dissolveInterval: 6,
  dissolveFade: 1.2,
  backgroundType: 'color',
  backgroundColor: '#1B1B1B',
  backgroundFit: 'cover',
  overlayVisible: true,
  overlayFit: 'stretch',
  recordDuration: 30,
  recordFps: 30,
}

/** Older builds stored named shapes instead of "w:h" ratios. */
const LEGACY_SHAPES: Record<string, CellShape> = {
  square: '1:1',
  landscape: '16:9',
  portrait: '3:4',
}

function loadPersisted(): SettingsState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULTS }
    const state = { ...DEFAULTS, ...(JSON.parse(raw) as Partial<SettingsState>) }
    state.cellShape = LEGACY_SHAPES[state.cellShape] ?? state.cellShape
    if (!/^\d+:\d+$/.test(state.cellShape)) state.cellShape = DEFAULTS.cellShape
    return state
  } catch {
    return { ...DEFAULTS }
  }
}

export const useSettingsStore = defineStore('settings', {
  state: (): SettingsState => loadPersisted(),
  actions: {
    persist() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.$state))
    },
    reset() {
      this.$patch({ ...DEFAULTS })
    },
  },
})
