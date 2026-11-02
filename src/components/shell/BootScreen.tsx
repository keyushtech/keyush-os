import { useEffect, useState, useRef } from 'react';
import { ownerProfile } from '../../data/ownerProfile';

interface BootScreenProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  '> Initializing Keyush OS v' + ownerProfile.identity.osVersion + '...',
  '> Loading project manifests...',
  '> Mounting case studies...',
  '> Starting Cloud Architecture module...',
  '> Activating AI Systems layer...',
  '> Ready.',
];

export function BootScreen({ onComplete }: BootScreenProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [visible, setVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    try {
      if (sessionStorage.getItem('keyush-os-boot-seen')) {
        onCompleteRef.current();
        return;
      }
    } catch {
      // ignore
    }

    const timers: number[] = [];

    BOOT_LINES.forEach((line, index) => {
      const t = window.setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, (index + 1) * 160);
      timers.push(t);
    });

    const totalDuration = (BOOT_LINES.length + 1) * 160;
    const fadeTimer = window.setTimeout(() => {
      setVisible(false);
      const doneTimer = window.setTimeout(() => {
        try {
          sessionStorage.setItem('keyush-os-boot-seen', '1');
        } catch {
          // ignore
        }
        onCompleteRef.current();
      }, 350);
      timers.push(doneTimer);
    }, totalDuration);
    timers.push(fadeTimer);

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const handleSkip = () => {
    try {
      sessionStorage.setItem('keyush-os-boot-seen', '1');
    } catch {
      // ignore
    }
    setVisible(false);
    setTimeout(() => {
      onCompleteRef.current();
    }, 100);
  };

  return (
    <div
      className="boot-screen"
      role="status"
      aria-label="Keyush OS loading"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div style={{ maxWidth: '480px', width: '100%', padding: '32px' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
          <img
            src={ownerProfile.identity.portrait}
            alt="Keyush Sai Velagapudi"
            width={48}
            height={48}
            style={{
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.20)',
              objectFit: 'cover',
            }}
          />
          <div>
            <div
              style={{
                fontFamily: 'var(--macos-mono)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              {ownerProfile.identity.osName}
            </div>
            <div
              style={{
                fontFamily: 'var(--macos-mono)',
                fontSize: '11px',
                color: 'var(--text-tertiary)',
                marginTop: '2px',
              }}
            >
              v{ownerProfile.identity.osVersion}
            </div>
          </div>
        </div>

        {/* Terminal boot log */}
        <div
          style={{
            fontFamily: 'var(--macos-mono)',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.9,
            minHeight: '160px',
          }}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                color: line.includes('Ready') ? 'var(--green)' : 'var(--text-secondary)',
              }}
            >
              {line}
            </div>
          ))}
          {lines.length < BOOT_LINES.length && (
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '14px',
                background: 'var(--accent)',
                marginLeft: '2px',
                verticalAlign: 'middle',
                animation: 'boot-blink 1s step-end infinite',
              }}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Skip */}
        <button
          onClick={handleSkip}
          style={{
            marginTop: '32px',
            background: 'none',
            border: '1px solid var(--border-outer)',
            borderRadius: '6px',
            padding: '6px 16px',
            color: 'var(--text-tertiary)',
            fontSize: '12px',
            fontFamily: 'var(--macos-mono)',
            cursor: 'pointer',
            transition: 'color 0.15s, border-color 0.15s',
          }}
          aria-label="Skip boot screen"
        >
          Skip Boot ↵
        </button>
      </div>
    </div>
  );
}

