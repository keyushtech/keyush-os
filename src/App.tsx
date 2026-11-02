import { useState, useCallback } from 'react';
import { MenuBar } from './components/shell/MenuBar';
import { Desktop } from './components/shell/Desktop';
import { Dock } from './components/shell/Dock';
import { BootScreen } from './components/shell/BootScreen';
import { Window } from './components/windows/Window';
import { CommandPalette } from './components/ui/CommandPalette';
import { ProjectsApp } from './components/apps/ProjectsApp';
import { CaseFilesApp } from './components/apps/CaseFilesApp';
import { SystemsApp } from './components/apps/SystemsApp';
import { JourneyApp } from './components/apps/JourneyApp';
import { AchievementsApp } from './components/apps/AchievementsApp';
import { SocialsApp } from './components/apps/SocialsApp';
import { ContactApp } from './components/apps/ContactApp';
import { FounderTxtApp } from './components/apps/FounderTxtApp';
import { ResumeApp } from './components/apps/ResumeApp';
import { BrowserApp } from './components/apps/BrowserApp';
import { useWindowManager } from './hooks/useWindowManager';
import type { AppId } from './types';

function AppContent({ appId }: { appId: AppId }) {
  switch (appId) {
    case 'projects': return <ProjectsApp />;
    case 'casefiles': return <CaseFilesApp />;
    case 'systems': return <SystemsApp />;
    case 'journey': return <JourneyApp />;
    case 'achievements': return <AchievementsApp />;
    case 'socials': return <SocialsApp />;
    case 'contact': return <ContactApp />;
    case 'foundertxt': return <FounderTxtApp />;
    case 'resume': return <ResumeApp />;
    case 'browser': return <BrowserApp />;
    default: return <div style={{ padding: '24px', color: 'var(--text-secondary)' }}>App not found.</div>;
  }
}

export default function App() {
  const [showBoot, setShowBoot] = useState(() => {
    try {
      return !sessionStorage.getItem('keyush-os-boot-seen');
    } catch {
      return false;
    }
  });

  const [searchOpen, setSearchOpen] = useState(false);
  const { state, openWindow, closeWindow, focusWindow, moveWindow, maximizeWindow } = useWindowManager();

  const handleOpen = useCallback((id: AppId) => {
    if (id === 'search') {
      setSearchOpen(true);
      return;
    }
    openWindow(id);
  }, [openWindow]);

  const openAppIds = state.windows.map((w) => w.appId);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* System navigation */}
      <MenuBar onSearch={() => setSearchOpen(true)} />

      {/* Desktop wallpaper + identity + app grid */}
      <Desktop onOpen={handleOpen} openAppIds={openAppIds} />

      {/* Window layer (z 1000-4499) */}
      {state.windows.map((win) => (
        <Window
          key={win.id}
          win={win}
          onClose={() => closeWindow(win.id)}
          onFocus={() => focusWindow(win.id)}
          onMove={(x, y) => moveWindow(win.id, x, y)}
          onMaximize={() => maximizeWindow(win.id)}
        >
          <AppContent appId={win.appId} />
        </Window>
      ))}

      {/* Dock */}
      <Dock openAppIds={openAppIds} onOpen={handleOpen} />

      {/* Command Palette */}
      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onOpenApp={handleOpen}
      />

      {/* Boot Screen Overlay (z-index: 9000) */}
      {showBoot && (
        <BootScreen onComplete={() => setShowBoot(false)} />
      )}
    </div>
  );
}
