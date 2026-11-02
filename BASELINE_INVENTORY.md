# BASELINE INVENTORY — Keyush OS

**Repository:** `github.com/keyushtech/<repo-name>` (to be set)  
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
| Wallpaper | Dark radial gradient (`#17181e → #0D0D10 → #0A0A0C`) |
| SVG noise overlay | 4% opacity `feTurbulence` filter |
| Mode | Dark only |
| Protected | Yes — no changes without explicit Build Contract approval |

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

