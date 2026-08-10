export interface RecordingResult {
  blob: Blob
  extension: 'mp4' | 'webm'
}

export interface RecordingHandle {
  /** Stops early and still produces a file. */
  stop(): void
  cancel(): void
}

const MP4_TYPES = [
  'video/mp4;codecs=avc1.640034', // H.264 High 5.2 (4K60)
  'video/mp4;codecs=avc1.640033',
  'video/mp4;codecs=avc1',
  'video/mp4',
]
const WEBM_TYPES = ['video/webm;codecs=vp9', 'video/webm']

export function pickMimeType(): { mimeType: string; extension: 'mp4' | 'webm' } | null {
  if (typeof MediaRecorder === 'undefined') return null
  for (const mimeType of MP4_TYPES) {
    if (MediaRecorder.isTypeSupported(mimeType)) return { mimeType, extension: 'mp4' }
  }
  for (const mimeType of WEBM_TYPES) {
    if (MediaRecorder.isTypeSupported(mimeType)) return { mimeType, extension: 'webm' }
  }
  return null
}

function bitrateFor(width: number, fps: number): number {
  const base = width >= 3840 ? 45_000_000 : width >= 1920 ? 24_000_000 : 12_000_000
  return fps >= 60 ? Math.round(base * 1.4) : base
}

export function startRecording(
  canvas: HTMLCanvasElement,
  fps: number,
  durationSec: number,
  callbacks: {
    onProgress?: (elapsedSec: number) => void
    onDone: (result: RecordingResult) => void
    onError: (message: string) => void
  },
): RecordingHandle | null {
  const picked = pickMimeType()
  if (!picked) {
    callbacks.onError('This browser does not support canvas video recording.')
    return null
  }

  const stream = canvas.captureStream(fps)
  let recorder: MediaRecorder
  try {
    recorder = new MediaRecorder(stream, {
      mimeType: picked.mimeType,
      videoBitsPerSecond: bitrateFor(canvas.width, fps),
    })
  } catch (err) {
    stream.getTracks().forEach((tr) => tr.stop())
    callbacks.onError(`Could not start recorder: ${(err as Error).message}`)
    return null
  }

  const chunks: Blob[] = []
  let cancelled = false
  const startedAt = performance.now()

  const progressTimer = window.setInterval(() => {
    callbacks.onProgress?.((performance.now() - startedAt) / 1000)
  }, 250)

  const stopTimer = window.setTimeout(() => {
    if (recorder.state !== 'inactive') recorder.stop()
  }, durationSec * 1000)

  const cleanup = () => {
    window.clearInterval(progressTimer)
    window.clearTimeout(stopTimer)
    stream.getTracks().forEach((tr) => tr.stop())
  }

  recorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunks.push(e.data)
  }
  recorder.onerror = () => {
    cleanup()
    callbacks.onError('Recording failed.')
  }
  recorder.onstop = () => {
    cleanup()
    if (cancelled) return
    callbacks.onDone({
      blob: new Blob(chunks, { type: picked.mimeType.split(';')[0] }),
      extension: picked.extension,
    })
  }

  // Flush data every second so long recordings do not buffer in one huge chunk.
  recorder.start(1000)

  return {
    stop() {
      if (recorder.state !== 'inactive') recorder.stop()
    },
    cancel() {
      cancelled = true
      if (recorder.state !== 'inactive') recorder.stop()
    },
  }
}

export function downloadRecording(result: RecordingResult, resolutionLabel: string) {
  const url = URL.createObjectURL(result.blob)
  const a = document.createElement('a')
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  a.href = url
  a.download = `mosaic-${resolutionLabel}-${stamp}.${result.extension}`
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 10_000)
}
