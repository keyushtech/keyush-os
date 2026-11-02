import { useState, useCallback } from 'react';
import type { WindowState, LayoutState, AppId } from '../types';
import { APP_CONFIGS } from '../data/appConfigs';

const STORAGE_KEY = 'keyush-os-windows-v1';

function clampPosition(x: number, y: number, width: number, height: number) {
  const menuBarH = 28;
  const dockH = 88; // dock height + bottom margin
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return {
    x: Math.max(0, Math.min(x, vw - width)),
    y: Math.max(menuBarH, Math.min(y, Math.max(menuBarH, vh - dockH - height))),
  };
}

export function useWindowManager() {
  const [state, setState] = useState<LayoutState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as LayoutState;
        return parsed;
      }
    } catch {
      // ignore
    }
    return { windows: [], topZ: 100 };
  });

  const persist = useCallback((next: LayoutState) => {
    setState(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const openWindow = useCallback(
    (appId: AppId) => {
      setState((prev) => {
        // If already open, focus it
        const existing = prev.windows.find((w) => w.appId === appId);
        if (existing) {
          const topZ = prev.topZ + 1;
          return {
            topZ,
            windows: prev.windows.map((w) =>
              w.appId === appId ? { ...w, zIndex: topZ, isMinimized: false } : w
            ),
          };
        }

        const cfg = APP_CONFIGS.find((a) => a.id === appId);
        if (!cfg) return prev;

        const topZ = prev.topZ + 1;
        const isMobile = window.innerWidth < 768;
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const width = isMobile ? vw : Math.min(cfg.defaultSize.width, vw - 40);
        const height = isMobile ? vh - 28 - 4 : Math.min(cfg.defaultSize.height, vh - 120);
        const x = isMobile ? 0 : Math.max(0, (vw - width) / 2 + (prev.windows.length * 20));
        const y = isMobile ? 28 : Math.max(28, (vh - height) / 2 + (prev.windows.length * 20));

        const clamped = clampPosition(x, y, width, height);

        const newWindow: WindowState = {
          id: `${appId}-${Date.now()}`,
          appId,
          title: cfg.name,
          x: clamped.x,
          y: clamped.y,
          width,
          height,
          zIndex: topZ,
          isMaximized: isMobile,
          isMinimized: false,
        };

        return {
          topZ,
          windows: [...prev.windows, newWindow],
        };
      });
    },
    []
  );

  const closeWindow = useCallback(
    (id: string) => {
      setState((prev) => {
        const next = { ...prev, windows: prev.windows.filter((w) => w.id !== id) };
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* */ }
        return next;
      });
    },
    []
  );

  const focusWindow = useCallback((id: string) => {
    setState((prev) => {
      const topZ = prev.topZ + 1;
      return {
        topZ,
        windows: prev.windows.map((w) => (w.id === id ? { ...w, zIndex: topZ } : w)),
      };
    });
  }, []);

  const moveWindow = useCallback((id: string, x: number, y: number) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.map((w) => {
        if (w.id !== id) return w;
        const clamped = clampPosition(x, y, w.width, w.height);
        return { ...w, x: clamped.x, y: clamped.y };
      }),
    }));
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    }));
  }, []);

  const closeAll = useCallback(() => {
    persist({ windows: [], topZ: 100 });
  }, [persist]);

  return { state, openWindow, closeWindow, focusWindow, moveWindow, maximizeWindow, closeAll };
}

