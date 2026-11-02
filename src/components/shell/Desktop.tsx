import { AppGrid } from './AppGrid';
import { DesktopIdentity } from './DesktopIdentity';
import type { AppId } from '../../types';

interface DesktopProps {
  onOpen: (id: AppId) => void;
  openAppIds: AppId[];
}

export function Desktop({ onOpen, openAppIds }: DesktopProps) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        top: '28px', // menu bar height
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-label="Desktop"
    >
      {/* Video Wallpaper */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/wallpaper-poster.jpg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <source src="/wallpaper.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric gradient overlay for contrast and text readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 100% 100% at 50% 45%, rgba(10, 10, 12, 0.50) 0%, rgba(10, 10, 12, 0.78) 100%)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Subtle noise overlay */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 2,
        }}
        aria-hidden="true"
      >
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Top-left: App grid */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          width: '188px',
          bottom: '88px', // above dock
          zIndex: 400,
          overflowY: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        <AppGrid onOpen={onOpen} openAppIds={openAppIds} />
      </div>

      {/* Center: Identity block */}
      <DesktopIdentity onOpen={onOpen} />
    </div>
  );
}

