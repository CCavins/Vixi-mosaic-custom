import { defineStore } from 'pinia'

export type ResolutionKey = '720p' | '1080p' | '4k'
export type MotionMode = 'static' | 'dissolve' | 'slide'
export type GridPattern = 'grid' | 'brick'
export type CellShape = 'square' | 'landscape' | 'portrait'
export type BackgroundType = 'color' | 'image'

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
  overlayVisible: boolean
  recordDuration: number
  recordFps: number
}

const STORAGE_KEY = 'mosaic.settings.v1'

const DEFAULTS: SettingsState = {
  resolution: '1080p',
  tileSize: 240,
  gridPattern: 'grid',
  cellShape: 'square',
  gap: 0,
  motionMode: 'slide',
  slideAngle: 45,
  slideSpeed: 40,
  dissolveInterval: 6,
  dissolveFade: 1.2,
  backgroundType: 'color',
  backgroundColor: '#1B1B1B',
  overlayVisible: true,
  recordDuration: 30,
  recordFps: 30,
}

function loadPersisted(): SettingsState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULTS }
    return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<SettingsState>) }
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
