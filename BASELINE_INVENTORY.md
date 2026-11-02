# BASELINE INVENTORY — Keyush OS

**Repository:** `https://github.com/keyushtech/keyush-os`  
**Branch:** `main`  
**Date:** 2026-11-02

---

## Build Details

| Field | Value |
|---|---|
| Framework | React 18 + Vite + TypeScript |
| Styling | Tailwind CSS v3 + custom CSS tokens |
| Icons | Lucide React (ISC license) |
| Fonts | JetBrains Mono (OFL), system stack (-apple-system, SF Pro, Inter) |
| Deployment | Vercel (static SPA) |
| Analytics | None |
| Cookies | None |
| Third-party scripts | None |

## Install & Run

```bash
cd keyush-os
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/
npm run preview    # preview built output
```

## Routes

Single-page application — all routes are handled client-side. No server-side routes.

| Path | Content |
|---|---|
| `/` | Full desktop OS — all apps accessible via windows |

## Applications Implemented

| App | Status |
|---|---|
| Projects | ✅ Complete |
| Case Files | ✅ Complete |
| Systems | ✅ Complete |
| Journey | ✅ Complete |
| Achievements | ✅ Complete |
| Socials | ✅ Complete |
| Contact | ✅ Complete |
| Founder.txt | ✅ Complete |
| Resume | ✅ Complete |
| Browser | ✅ Complete |
| Command Palette (⌘K) | ✅ Complete |

## Background System

| Element | Status |
|---|---|
| Video Wallpaper | `public/wallpaper.mp4` (1080p web-optimized H.264 loop of convenience store in the rain, 7.7 MB) |
| Poster Fallback | `public/wallpaper-poster.jpg` (instant initial frame for fast mobile paint, 293 KB) |
| Atmosphere Overlay | Radial gradient overlay (`rgba(10,10,12,0.40) → rgba(10,10,12,0.72)`) for high-contrast text and window vibrancy |
| Mode | Dark only |
| Protected | Yes — approved by owner |

## Local Storage Keys

| Key | Contents |
|---|---|
| `keyush-os-windows-v1` | Window positions (non-sensitive) |
| `keyush-os-boot-seen` (session) | Boot skip flag |

## Environment Variables

None required for this build. All content is static.

## Third-Party Embeds

None.

## Protected Elements

- Wallpaper gradient and noise layer
- Owner identity — all strings from `ownerProfile.ts`
- No inherited reference implementation assets

## Known Limitations Before Launch

1. Resume is request-only (no PDF hosted) — email flow provided
2. Browser iframe may be blocked by some sites' X-Frame-Options headers — fallback provided
3. Dock magnification uses `getBoundingClientRect` on mouse move — minimal perf impact

---

*This document is the baseline record of the initial build state.*

