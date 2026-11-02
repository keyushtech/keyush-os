import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { APP_CONFIGS } from '../../data/appConfigs';
import type { AppId } from '../../types';
import { ownerProfile } from '../../data/ownerProfile';

interface SearchResult {
  id: string;
  type: 'app' | 'project' | 'contact' | 'social';
  title: string;
  subtitle: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (id: AppId) => void;
}

export function CommandPalette({ isOpen, onClose, onOpenApp }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const allResults: SearchResult[] = [
    ...APP_CONFIGS.map((a) => ({
      id: `app-${a.id}`,
      type: 'app' as const,
      title: a.name,
      subtitle: a.description,
      action: () => { onOpenApp(a.id); onClose(); },
    })),
    ...ownerProfile.projects.map((p) => ({
      id: `project-${p.id}`,
      type: 'project' as const,
      title: p.name,
      subtitle: p.category,
      action: () => { onOpenApp('projects'); onClose(); },
    })),
    {
      id: 'contact-linkedin',
      type: 'contact' as const,
      title: 'LinkedIn',
      subtitle: 'linkedin.com/in/keyush-sai',
      action: () => { window.open('https://www.linkedin.com/in/keyush-sai/', '_blank', 'noreferrer'); onClose(); },
    },
    {
      id: 'contact-email',
      type: 'contact' as const,
      title: 'Email Keyush',
      subtitle: ownerProfile.conversion.email,
      action: () => { window.location.href = `mailto:${ownerProfile.conversion.email}`; onClose(); },
    },
    {
      id: 'contact-github',
      type: 'social' as const,
      title: 'GitHub',
      subtitle: 'github.com/keyushtech',
      action: () => { window.open('https://github.com/keyushtech', '_blank', 'noreferrer'); onClose(); },
    },
  ];

  const results = query.trim()
    ? allResults.filter((r) =>
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.subtitle.toLowerCase().includes(query.toLowerCase())
      )
    : allResults.slice(0, 8);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIdx(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIdx((i) => Math.min(i + 1, results.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIdx((i) => Math.max(i - 1, 0)); }
      if (e.key === 'Enter') { e.preventDefault(); results[selectedIdx]?.action(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, results, selectedIdx, onClose]);

  // Keyboard shortcut to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) onOpenApp('search' as AppId);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onOpenApp]);

  const TYPE_LABELS: Record<string, string> = {
    app: 'APP',
    project: 'PROJECT',
    contact: 'CONTACT',
    social: 'SOCIAL',
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 5400,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '80px',
        background: 'rgba(0,0,0,0.55)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="glass"
        style={{
          width: '100%',
          maxWidth: '560px',
          borderRadius: '14px',
          border: '1px solid var(--border-outer)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.70)',
          overflow: 'hidden',
          animation: 'fade-in 0.15s ease both',
          margin: '0 16px',
        }}
      >
        {/* Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '14px 16px',
          borderBottom: '1px solid var(--border-inner)',
        }}>
          <Search size={16} color="var(--text-tertiary)" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps, projects, contacts…"
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--macos-font)',
            }}
            aria-label="Search query"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', padding: '2px', display: 'flex' }}
            aria-label="Close search"
          >
            <X size={14} />
          </button>
        </div>

        {/* Results */}
        <div
          style={{ maxHeight: '360px', overflowY: 'auto', padding: '6px' }}
          role="listbox"
          aria-label="Search results"
        >
          {results.length === 0 && (
            <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '13px', fontFamily: 'var(--macos-mono)' }}>
              No results for "{query}"
            </div>
          )}
          {results.map((result, i) => (
            <button
              key={result.id}
              onClick={result.action}
              role="option"
              aria-selected={i === selectedIdx}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '8px',
                background: i === selectedIdx ? 'rgba(56,189,248,0.12)' : 'none',
                border: `1px solid ${i === selectedIdx ? 'rgba(56,189,248,0.20)' : 'transparent'}`,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.1s',
              }}
              onMouseEnter={() => setSelectedIdx(i)}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {result.title}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: '2px' }}>
                  {result.subtitle}
                </div>
              </div>
              <span style={{
                fontSize: '9px',
                fontFamily: 'var(--macos-mono)',
                color: 'var(--text-tertiary)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--border-inner)',
                borderRadius: '3px',
                padding: '2px 5px',
                flexShrink: 0,
              }}>
                {TYPE_LABELS[result.type]}
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          padding: '8px 16px',
          borderTop: '1px solid var(--border-inner)',
          display: 'flex',
          gap: '14px',
          fontSize: '11px',
          fontFamily: 'var(--macos-mono)',
          color: 'var(--text-tertiary)',
        }}>
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}

