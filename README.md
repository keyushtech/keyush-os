# Keyush OS

**Personal AI Operating System — Keyush Sai Velagapudi**

> Building low-latency agentic systems, scalable cloud infrastructure, and deliberate software.

A premium personal portfolio that behaves like a complete macOS-style desktop operating system.

---

## Stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS** for utility styling
- **Lucide React** (ISC license) for icons
- **Vercel** for deployment
- Zero analytics trackers · Zero cookie banners · Zero third-party data

---

## Quick Start

```bash
cd keyush-os
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push to GitHub and connect to [Vercel](https://vercel.com). Auto-deploys on `main`.

```bash
git init
git add .
git commit -m "feat: initial Keyush OS build"
git remote add origin https://github.com/keyushtech/<repo-name>.git
git push -u origin main
```

---

## Content Customization

All visible content lives in one file:

```
src/data/ownerProfile.ts
```

Edit that file to update name, bio, projects, metrics, socials, and all text. No content is scattered through components.

App layout config is in:

```
src/data/appConfigs.ts
```

---

## Architecture

```
src/
├── App.tsx                  # Root — window manager + shell assembly
├── data/
│   ├── ownerProfile.ts      # ← Single content source of truth
│   └── appConfigs.ts        # App registry and dock config
├── components/
│   ├── shell/
│   │   ├── MenuBar.tsx      # 28px system bar
│   │   ├── Desktop.tsx      # Wallpaper + identity + app grid
│   │   ├── DesktopIdentity.tsx  # Hero identity block
│   │   ├── AppGrid.tsx      # Desktop app icons
│   │   ├── Dock.tsx         # Magnifying dock
│   │   └── BootScreen.tsx   # Boot animation
│   ├── windows/
│   │   └── Window.tsx       # Draggable window with traffic lights
│   ├── apps/                # One file per application
│   │   ├── ProjectsApp.tsx
│   │   ├── CaseFilesApp.tsx
│   │   ├── SystemsApp.tsx
│   │   ├── JourneyApp.tsx
│   │   ├── AchievementsApp.tsx
│   │   ├── SocialsApp.tsx
│   │   ├── ContactApp.tsx
│   │   ├── FounderTxtApp.tsx
│   │   ├── ResumeApp.tsx
│   │   └── BrowserApp.tsx
│   └── ui/
│       └── CommandPalette.tsx   # ⌘K search
├── hooks/
│   └── useWindowManager.ts  # Window state + local storage
└── types/
    └── index.ts
```

## Local Storage Keys

| Key | Contents |
|-----|----------|
| `keyush-os-windows-v1` | Open window positions |

Session: `keyush-os-boot-seen` — skips boot animation on repeat visits.

---

## License

© 2026 Keyush Sai Velagapudi. All rights reserved.

Icons: [Lucide](https://lucide.dev/license) (ISC)  
Font: JetBrains Mono (SIL OFL 1.1)

