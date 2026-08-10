import { defineStore } from 'pinia'

/** Shared flag so other panels can lock controls that would break an active recording. */
export const useRecordingStore = defineStore('recording', {
  state: () => ({ active: false }),
})
