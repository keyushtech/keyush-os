import { useState, useRef, useEffect } from 'react';
import { AppIcon } from '../ui/AppIcon';
import { APP_CONFIGS, DOCK_APPS } from '../../data/appConfigs';
import type { AppId } from '../../types';

interface DockProps {
  openAppIds: AppId[];
  onOpen: (id: AppId) => void;
}

// Dock magnification
function DockItem({
  appId,
  isOpen,
  onOpen,
  mouseX,
  itemRef,
}: {
  appId: AppId;
  isOpen: boolean;
  onOpen: () => void;
  mouseX: number | null;
  itemRef: (el: HTMLButtonElement | null) => void;
}) {
  const cfg = APP_CONFIGS.find((a) => a.id === appId)!;
  const [rect, setRect] = useState<DOMRect | null>(null);
  const ref = useRef<HTMLButtonElement | null>(null);

  const scale = (() => {
    if (mouseX === null || !rect) return 1;
    const centerX = rect.left + rect.width / 2;
    const dist = Math.abs(mouseX - centerX);
    const range = 80;
    if (dist > range) return 1;
    return 1 + 0.35 * (1 - dist / range);
  })();

  useEffect(() => {
    if (ref.current) setRect(ref.current.getBoundingClientRect());
  }, [mouseX]);

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
        ref={(el) => {
          ref.current = el;
          itemRef(el);
        }}
        className="dock-item"
        onClick={onOpen}
        aria-label={`Open ${cfg.name}`}
        title={cfg.name}
        style={{
          transform: `scale(${scale}) translateY(${(scale - 1) * -8}px)`,
          transition: mouseX === null ? 'transform 0.2s ease' : 'none',
          color: 'var(--text-secondary)',
        }}
      >
        <AppIcon name={cfg.icon} size={24} />
        <span className="dock-tooltip">{cfg.name}</span>
        {isOpen && <span className="dock-dot" aria-hidden="true" />}
      </button>
    </div>
  );
}

export function Dock({ openAppIds, onOpen }: DockProps) {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={dockRef}
      className="macos-dock glass-dock"
      role="toolbar"
      aria-label="Application dock"
      onMouseMove={(e) => setMouseX(e.clientX)}
      onMouseLeave={() => setMouseX(null)}
    >
      {DOCK_APPS.map((appId) => (
        <DockItem
          key={appId}
          appId={appId}
          isOpen={openAppIds.includes(appId)}
          onOpen={() => onOpen(appId)}
          mouseX={mouseX}
          itemRef={() => {}}
        />
      ))}

      {/* Dock divider */}
      <div
        style={{
          width: '1px',
          height: '32px',
          background: 'var(--border-outer)',
          flexShrink: 0,
        }}
        aria-hidden="true"
      />

      {/* Extra apps */}
      {APP_CONFIGS.filter((a) => !DOCK_APPS.includes(a.id)).map((cfg) => (
        <DockItem
          key={cfg.id}
          appId={cfg.id}
          isOpen={openAppIds.includes(cfg.id)}
          onOpen={() => onOpen(cfg.id)}
          mouseX={mouseX}
          itemRef={() => {}}
        />
      ))}
    </div>
  );
}

