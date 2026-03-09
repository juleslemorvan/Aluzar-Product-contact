# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Architecture

Single-page React app (Vite + Chakra UI v2 + Framer Motion) for Aluzar Tequila. The app is a marketing landing page targeted at Portuguese-speaking restaurant/bar buyers.

**Page flow** (`App.jsx`): An `IntroScreen` (full-screen logo splash, auto-dismissed after 1s) is layered via `AnimatePresence` over three vertically stacked sections rendered simultaneously: `MainScreen` → `Contact` → `Testimonial`.

**Components** (`src/components/`):
- `IntroScreen` — Fixed overlay that slides up on exit (Framer Motion). Timing: 1s delay in `App.jsx` before exit triggers, then 0.5s exit delay + 0.8s slide animation.
- `MainScreen` — Hero section with animated tequila bottle (slide-in + infinite bounce) and staggered argument cards. Background: `fond.avif`. Arguments are hardcoded in Portuguese inside the component.
- `Contact` — Full-screen background image (`aluzar8.webp`) with dark overlay, WhatsApp CTA button.
- `Testimonial` — Placeholder section with `aluzar4.webp` background (not yet implemented).

**Styling**: Chakra UI handles layout/component styling. Custom fonts (`AbrilFatface`, `ITCSouvenir`) are loaded via `@font-face` in `src/index.css` from `src/assets/police/`. Use `fontFamily="AbrilFatface"` for headings and `fontFamily="ITCSouvenir"` for body text. Brand colors: `wheat` (text/accents), `green.800` (cards), `#cc8655` (intro background).

**Animation timing coordination**: The intro exit (≈2.3s total) is manually coordinated with `MainScreen` animation delays — `delayChildren: 2` in `containerVariants` syncs the argument cards to appear after the intro finishes.

**Assets**: All images are `.webp`/`.avif` in `src/assets/`. Background images in `MainScreen` and `Contact` use absolute `/src/assets/` paths (not imports).
