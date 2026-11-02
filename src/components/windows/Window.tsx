import { useRef, useEffect, useCallback, type ReactNode } from 'react';
import type { WindowState } from '../../types';

interface WindowProps {
  win: WindowState;
  children: ReactNode;
  onClose: () => void;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
  onMaximize: () => void;
}

export function Window({ win, children, onClose, onFocus, onMove, onMaximize }: WindowProps) {
  const titleBarRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const isMobile = window.innerWidth < 768;

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isMobile || win.isMaximized) return;
      if ((e.target as HTMLElement).closest('button')) return;
      dragging.current = true;
      offset.current = { x: e.clientX - win.x, y: e.clientY - win.y };
      titleBarRef.current?.setPointerCapture(e.pointerId);
      onFocus();
    },
    [isMobile, win.isMaximized, win.x, win.y, onFocus]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging.current) return;
      onMove(e.clientX - offset.current.x, e.clientY - offset.current.y);
    },
    [onMove]
  );

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  // Escape key closes
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const style: React.CSSProperties = win.isMaximized
    ? {
        position: 'fixed',
        top: '28px',
        left: 0,
        right: 0,
        bottom: isMobile ? '80px' : '88px',
        width: '100%',
        height: 'auto',
        borderRadius: isMobile ? 0 : '12px',
        zIndex: win.zIndex,
      }
    : {
        position: 'fixed',
        top: win.y,
        left: win.x,
        width: win.width,
        height: win.height,
        zIndex: win.zIndex,
      };

  return (
    <div
      className="macos-window glass"
      style={style}
      onClick={onFocus}
      role="dialog"
      aria-modal="true"
      aria-label={win.title}
    >
      {/* Title bar */}
      <div
        ref={titleBarRef}
        className={`macos-titlebar${!isMobile && !win.isMaximized ? ' draggable' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {/* Traffic lights */}
        <div className="traffic-lights">
          <button
            className="traffic-dot close-dot"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            aria-label={`Close ${win.title}`}
            title="Close"
          />
          <div
            className="traffic-dot min-dot"
            style={{ cursor: 'default', opacity: 0.5 }}
            aria-hidden="true"
          />
          <button
            className="traffic-dot max-dot"
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
            aria-label={win.isMaximized ? `Restore ${win.title}` : `Maximize ${win.title}`}
            title={win.isMaximized ? 'Restore' : 'Maximize'}
          />
        </div>

        {/* Title */}
        <span className="titlebar-title">{win.title}</span>
      </div>

      {/* Body */}
      <div
        className="window-body"
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
}

