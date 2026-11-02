import { ownerProfile } from '../../data/ownerProfile';
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
      {/* Wallpaper — radial gradient from dark center to near-black */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 100% 80% at 50% 30%, #17181e 0%, #0D0D10 45%, #0A0A0C 100%)',
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

      {/* Bottom-right: folded corner CTA */}
      <FoldedCornerCTA />

      {/* Bottom-left: proof metrics pill */}
      <MetricsPill />
    </div>
  );
}

function FoldedCornerCTA() {
  return (
    <a
      href={ownerProfile.conversion.buildThisUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="View this OS on GitHub"
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '140px',
        height: '140px',
        zIndex: 500,
        overflow: 'hidden',
        display: 'block',
        textDecoration: 'none',
      }}
    >
      {/* Triangle SVG */}
      <svg
        viewBox="0 0 140 140"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        aria-hidden="true"
      >
        <polygon points="140,0 140,140 0,140" fill="rgba(14,14,18,0.90)" />
        <polygon points="140,20 140,140 20,140" fill="#38BDF8" opacity="0.85" />
      </svg>
      <div style={{
        position: 'absolute',
        bottom: '22px',
        right: '14px',
        textAlign: 'right',
        transform: 'rotate(-45deg)',
        transformOrigin: 'bottom right',
        lineHeight: 1.3,
      }}>
        <div style={{ fontSize: '10px', fontWeight: 700, color: '#0A0A0C', fontFamily: 'var(--macos-mono)', whiteSpace: 'nowrap' }}>
          View on
        </div>
        <div style={{ fontSize: '10px', fontWeight: 700, color: '#0A0A0C', fontFamily: 'var(--macos-mono)', whiteSpace: 'nowrap' }}>
          GitHub →
        </div>
      </div>
    </a>
  );
}

function MetricsPill() {
  const metrics = ownerProfile.metrics.filter((m) => m.public).slice(0, 3);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '92px',
        left: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        zIndex: 500,
      }}
      aria-label="Key credentials"
    >
      {metrics.map((m) => (
        <div
          key={m.label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(22,22,26,0.72)',
            border: '1px solid var(--border-outer)',
            borderRadius: '8px',
            padding: '6px 12px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <span style={{ fontFamily: 'var(--macos-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--accent)' }}>
            {m.value}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{m.label}</span>
        </div>
      ))}
    </div>
  );
}

