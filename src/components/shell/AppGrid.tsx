import { AppIcon } from '../ui/AppIcon';
import { APP_CONFIGS } from '../../data/appConfigs';
import type { AppId } from '../../types';

interface AppGridProps {
  onOpen: (id: AppId) => void;
  openAppIds: AppId[];
}

// Accent tints per app for icon tile backgrounds
const ICON_TINTS: Partial<Record<AppId, string>> = {
  projects: 'rgba(56,189,248,0.14)',
  casefiles: 'rgba(192,132,252,0.12)',
  systems: 'rgba(39,201,63,0.10)',
  journey: 'rgba(255,189,46,0.10)',
  achievements: 'rgba(255,189,46,0.12)',
  contact: 'rgba(56,189,248,0.12)',
  foundertxt: 'rgba(255,255,255,0.06)',
  resume: 'rgba(56,189,248,0.08)',
  browser: 'rgba(39,201,63,0.08)',
  socials: 'rgba(56,189,248,0.08)',
};

const ICON_COLORS: Partial<Record<AppId, string>> = {
  projects: '#38BDF8',
  casefiles: '#c084fc',
  systems: '#27c93f',
  journey: '#ffbd2e',
  achievements: '#ffbd2e',
  contact: '#38BDF8',
  foundertxt: '#EDEDED',
  resume: '#38BDF8',
  browser: '#27c93f',
  socials: '#38BDF8',
};

export function AppGrid({ onOpen, openAppIds }: AppGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 88px)',
        gap: '4px',
        padding: '12px',
        alignContent: 'start',
        justifyContent: 'start',
      }}
      role="list"
      aria-label="Desktop applications"
    >
      {APP_CONFIGS.map((cfg) => (
        <div
          key={cfg.id}
          role="listitem"
        >
          <button
            className="app-icon-tile"
            onClick={() => onOpen(cfg.id)}
            aria-label={`Open ${cfg.name}: ${cfg.description}`}
            title={cfg.name}
            style={{ position: 'relative' }}
          >
            {cfg.badge && (
              <span className="app-icon-badge">{cfg.badge}</span>
            )}
            <div
              className="app-icon-squircle"
              style={{
                background: ICON_TINTS[cfg.id] ?? 'rgba(36,36,42,0.80)',
                color: ICON_COLORS[cfg.id] ?? 'var(--text-secondary)',
              }}
            >
              <AppIcon name={cfg.icon} size={24} />
            </div>
            <span className="app-icon-label">{cfg.name}</span>

            {/* Open indicator */}
            {openAppIds.includes(cfg.id) && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '2px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                }}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}

