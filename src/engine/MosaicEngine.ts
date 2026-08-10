import type { MosaicImage } from '@/stores/library'
import { cellAspect, type FitMode, type SettingsState } from '@/stores/settings'

/**
 * Random image dispenser that hands out every image once (in shuffled order)
 * before repeating, which minimizes simultaneous duplicates on screen.
 */
class ShuffleBag {
  private pool: string[] = []
  private queue: string[] = []
  private last: string | null = null

  /** Returns true when the pool actually changed. */
  setPool(ids: string[]): boolean {
    if (ids.length === this.pool.length && ids.every((id, i) => id === this.pool[i])) return false
    this.pool = [...ids]
    this.queue = []
    return true
  }

  get size() {
    return this.pool.length
  }

  next(avoid?: Set<string>): string | null {
    if (this.pool.length === 0) return null
    if (this.queue.length === 0) this.refill()
    let pick = 0
    if (avoid && avoid.size < this.pool.length) {
      for (let i = 0; i < this.queue.length; i++) {
        if (!avoid.has(this.queue[i])) {
          pick = i
          break
        }
      }
    }
    const [id] = this.queue.splice(pick, 1)
    this.last = id
    return id
  }

  private refill() {
    this.queue = [...this.pool]
    for (let i = this.queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]]
    }
    // Avoid handing out the same image twice in a row across refills.
    if (this.queue.length > 1 && this.queue[0] === this.last) {
      const j = 1 + Math.floor(Math.random() * (this.queue.length - 1))
      ;[this.queue[0], this.queue[j]] = [this.queue[j], this.queue[0]]
    }
  }
}

interface Cell {
  imgId: string | null
  prevImgId: string | null
  fadeStart: number
  nextSwapAt: number
}

interface Metrics {
  cellW: number
  cellH: number
  pitchX: number
  pitchY: number
}

export class MosaicEngine {
  private ctx: CanvasRenderingContext2D
  private cells = new Map<string, Cell>()
  private bag = new ShuffleBag()
  private rafId = 0
  private lastTime = 0
  private ox = 0
  private oy = 0
  private layoutKey = ''
  private lastMode = ''

  constructor(
    private canvas: HTMLCanvasElement,
    private getSettings: () => SettingsState,
    private getImages: () => Map<string, MosaicImage>,
    private getOverlay: () => ImageBitmap | null,
    private getBackground: () => ImageBitmap | null,
  ) {
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas 2D context unavailable')
    ctx.imageSmoothingQuality = 'high'
    this.ctx = ctx
  }

  start() {
    if (this.rafId) return
    this.lastTime = performance.now()
    this.rafId = requestAnimationFrame(this.frame)
  }

  stop() {
    cancelAnimationFrame(this.rafId)
    this.rafId = 0
  }

  private frame = (t: number) => {
    const dt = Math.min((t - this.lastTime) / 1000, 0.1)
    this.lastTime = t
    try {
      this.tick(t, dt)
    } finally {
      this.rafId = requestAnimationFrame(this.frame)
    }
  }

  private metrics(s: SettingsState): Metrics {
    const aspect = cellAspect(s.cellShape)
    const cellW = Math.max(20, s.tileSize)
    const cellH = cellW / aspect
    return { cellW, cellH, pitchX: cellW + s.gap, pitchY: cellH + s.gap }
  }

  private brickOffset(row: number, s: SettingsState, m: Metrics): number {
    if (s.gridPattern !== 'brick') return 0
    return ((row % 2) + 2) % 2 === 1 ? m.pitchX / 2 : 0
  }

  private tick(t: number, dt: number) {
    const s = this.getSettings()
    const images = this.getImages()
    const W = this.canvas.width
    const H = this.canvas.height

    // Reshuffle all assignments whenever the image library changes so newly
    // added images show up immediately instead of only on wrapped-in cells.
    if (this.bag.setPool([...images.keys()])) {
      this.cells.clear()
    }

    const key = `${W}x${H}|${s.tileSize}|${s.gridPattern}|${s.cellShape}|${s.gap}`
    if (key !== this.layoutKey) {
      this.layoutKey = key
      this.cells.clear()
      this.ox = 0
      this.oy = 0
    }

    // Entering dissolve mode: existing cells carry stale swap times, which
    // would make every tile change at once. Re-stagger them from now.
    if (s.motionMode !== this.lastMode) {
      if (s.motionMode === 'dissolve') {
        for (const cell of this.cells.values()) {
          cell.nextSwapAt = t + s.dissolveInterval * 1000 * (0.5 + Math.random())
        }
      }
      this.lastMode = s.motionMode
    }

    if (s.motionMode === 'slide' && images.size > 0) {
      const rad = (s.slideAngle * Math.PI) / 180
      this.ox += Math.cos(rad) * s.slideSpeed * dt
      this.oy += Math.sin(rad) * s.slideSpeed * dt
    }

    const m = this.metrics(s)
    // One extra cell of buffer on every side (two horizontally for brick offset).
    const cMin = Math.floor((-this.ox - 2 * m.pitchX) / m.pitchX)
    const cMax = Math.ceil((W - this.ox + m.pitchX) / m.pitchX)
    const rMin = Math.floor((-this.oy - 2 * m.pitchY) / m.pitchY)
    const rMax = Math.ceil((H - this.oy + m.pitchY) / m.pitchY)

    // Drop cells that scrolled far out of view.
    if (this.cells.size > (cMax - cMin + 5) * (rMax - rMin + 5)) {
      for (const cellKey of this.cells.keys()) {
        const [c, r] = cellKey.split(',').map(Number)
        if (c < cMin - 2 || c > cMax + 2 || r < rMin - 2 || r > rMax + 2) {
          this.cells.delete(cellKey)
        }
      }
    }

    // Background
    const ctx = this.ctx
    ctx.globalAlpha = 1
    ctx.fillStyle = s.backgroundColor
    ctx.fillRect(0, 0, W, H)
    if (s.backgroundType === 'image') {
      const bg = this.getBackground()
      if (bg) this.drawFit(bg, s.backgroundFit)
    }

    if (images.size > 0) {
      for (let r = rMin; r <= rMax; r++) {
        for (let c = cMin; c <= cMax; c++) {
          const cellKey = `${c},${r}`
          let cell = this.cells.get(cellKey)
          if (!cell) {
            cell = this.createCell(c, r, t, s, images)
            this.cells.set(cellKey, cell)
          }

          // Reassign if the image was removed from the library.
          if (!cell.imgId || !images.has(cell.imgId)) {
            cell.imgId = this.bag.next(this.neighborIds(c, r))
            cell.prevImgId = null
          }
          if (cell.prevImgId && !images.has(cell.prevImgId)) cell.prevImgId = null

          if (s.motionMode === 'dissolve' && t >= cell.nextSwapAt) {
            const avoid = this.neighborIds(c, r)
            if (cell.imgId) avoid.add(cell.imgId)
            const next = this.bag.next(avoid)
            if (next && next !== cell.imgId) {
              cell.prevImgId = cell.imgId
              cell.imgId = next
              cell.fadeStart = t
            }
            cell.nextSwapAt = t + s.dissolveInterval * 1000 * (0.5 + Math.random())
          }

          this.drawCell(cell, c, r, t, s, m, images)
        }
      }
    }

    ctx.globalAlpha = 1
    if (s.overlayVisible) {
      const overlay = this.getOverlay()
      if (overlay) this.drawFit(overlay, s.overlayFit)
    }
  }

  /** Draw a bitmap across the whole canvas using the chosen fit mode. */
  private drawFit(bmp: ImageBitmap, fit: FitMode) {
    const W = this.canvas.width
    const H = this.canvas.height
    if (fit === 'stretch') {
      this.ctx.drawImage(bmp, 0, 0, W, H)
    } else if (fit === 'cover') {
      this.drawCover(bmp, 0, 0, W, H, 1)
    } else {
      const scale = Math.min(W / bmp.width, H / bmp.height)
      const w = bmp.width * scale
      const h = bmp.height * scale
      this.ctx.drawImage(bmp, (W - w) / 2, (H - h) / 2, w, h)
    }
  }

  private createCell(
    c: number,
    r: number,
    t: number,
    s: SettingsState,
    _images: Map<string, MosaicImage>,
  ): Cell {
    return {
      imgId: this.bag.next(this.neighborIds(c, r)),
      prevImgId: null,
      fadeStart: -Infinity,
      nextSwapAt: t + s.dissolveInterval * 1000 * (0.5 + Math.random()),
    }
  }

  private neighborIds(c: number, r: number): Set<string> {
    const ids = new Set<string>()
    for (const [dc, dr] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      const n = this.cells.get(`${c + dc},${r + dr}`)
      if (n?.imgId) ids.add(n.imgId)
    }
    return ids
  }

  private drawCell(
    cell: Cell,
    c: number,
    r: number,
    t: number,
    s: SettingsState,
    m: Metrics,
    images: Map<string, MosaicImage>,
  ) {
    // Sub-pixel positions keep slow slides smooth (whole-pixel snapping made
    // the field visibly jump one pixel at a time). When tiles are butted
    // together, a slight bleed hides the antialiased seams between them.
    const bleed = s.gap === 0 ? 0.75 : 0
    const px = c * m.pitchX + this.ox + this.brickOffset(r, s, m)
    const py = r * m.pitchY + this.oy
    const pw = m.cellW + bleed
    const ph = m.cellH + bleed

    const img = cell.imgId ? images.get(cell.imgId) : undefined
    if (!img) return

    const fadeMs = Math.max(0.05, s.dissolveFade) * 1000
    const progress = (t - cell.fadeStart) / fadeMs
    const prev = cell.prevImgId ? images.get(cell.prevImgId) : undefined

    if (prev && progress < 1) {
      this.drawCover(prev.bitmap, px, py, pw, ph, 1)
      this.drawCover(img.bitmap, px, py, pw, ph, Math.max(0, Math.min(1, progress)))
    } else {
      if (cell.prevImgId) cell.prevImgId = null
      this.drawCover(img.bitmap, px, py, pw, ph, 1)
    }
  }

  private drawCover(
    bmp: ImageBitmap,
    x: number,
    y: number,
    w: number,
    h: number,
    alpha: number,
  ) {
    if (w <= 0 || h <= 0) return
    const scale = Math.max(w / bmp.width, h / bmp.height)
    const sw = w / scale
    const sh = h / scale
    const sx = (bmp.width - sw) / 2
    const sy = (bmp.height - sh) / 2
    const ctx = this.ctx
    ctx.globalAlpha = alpha
    ctx.drawImage(bmp, sx, sy, sw, sh, x, y, w, h)
    ctx.globalAlpha = 1
  }
}
