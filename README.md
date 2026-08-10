# Mosaic Grid Builder

A browser-only tool that turns a collection of images into a full-screen animated mosaic, with a transparent PNG overlay on top, and records the result as an MP4.

**Live app:** https://ccavins.github.io/Vixi-mosaic-custom/

Everything runs locally in your browser. Images, the overlay, the background, and all settings are stored in your browser (IndexedDB + localStorage), so a refresh picks up right where you left off. Nothing is uploaded to any server.

## Features

- **Image library** - drag-drop or upload any number of images, or link a folder on disk (Chrome/Edge). Linked folders can be rescanned as their contents change.
- **Canvas** - exact 720p (1280x720), 1080p (1920x1080), or 4K (3840x2160) output resolution; the preview scales to your window but rendering always happens at full resolution.
- **Grid** - tile size, tile shape (square / 16:9 / 3:4), uniform or brick-offset pattern, and spacing between tiles (defaults to 0, butted together).
- **Motion**
  - *Static* - a fixed mosaic.
  - *Dissolve* - tiles crossfade to new random images on a staggered schedule (interval + fade duration controls).
  - *Slide* - the whole field drifts in any direction (presets or a free 0-355 degree angle, plus speed). Tiles wrap around and repopulate with fresh images so there are never blank spots.
  - Image picking uses a shuffle-bag: every image appears once before any repeats, and adjacent duplicates are avoided.
- **Background** - solid color or an uploaded image behind the tiles (visible through gaps and transparency).
- **Overlay** - a transparent PNG stretched over the whole canvas, with a show/hide toggle.
- **Recording** - 15 seconds to 10 minutes at 30 or 60 fps, saved as H.264 MP4 (WebM fallback on browsers without MP4 recording support).

## Requirements

Chrome or Edge is recommended: folder linking uses the File System Access API and MP4 recording uses MediaRecorder's MP4 support, both Chromium-only. Other browsers can still upload images and record WebM.

## Development

```sh
npm install
npm run dev      # http://localhost:5173/Vixi-mosaic-custom/
npm run build    # type-check + production build into dist/
```

The UI is built with the [vixi2 components library](https://github.com/thefamousgroup/vixi2-components) (Vue 3 + Vuetify). Because that package lives on a private registry, its built `dist/` is vendored into this repo at `vendor/vixi2-components/` and installed via a `file:` dependency - no registry auth needed.

Deploys happen automatically to GitHub Pages on every push to `main` (see `.github/workflows/deploy.yml`).

## Project layout

- `src/engine/MosaicEngine.ts` - canvas renderer: grid layout, shuffle-bag image assignment, static/dissolve/slide motion, background + overlay compositing.
- `src/engine/recorder.ts` - canvas captureStream + MediaRecorder MP4 recording and download.
- `src/stores/settings.ts` - all control-panel settings, persisted to localStorage.
- `src/stores/library.ts` - image/overlay/background assets and the linked folder handle, persisted to IndexedDB.
- `src/components/panel/` - the right-hand control panel sections.
