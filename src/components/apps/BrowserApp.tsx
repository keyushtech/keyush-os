import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, ExternalLink, Home } from 'lucide-react';

const BOOKMARKS = [
  {
    label: 'The Grand Scheme',
    url: 'https://iit-bhilai-f4a14.web.app',
    description: 'Live campus super app — IIT Bhilai',
  },
  {
    label: 'GitHub — keyushtech',
    url: 'https://github.com/keyushtech',
    description: 'Open-source projects and portfolio source',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/keyush-sai/',
    description: 'Professional profile',
  },
];

const HOME_URL = 'https://iit-bhilai-f4a14.web.app';

export function BrowserApp() {
  const [history, setHistory] = useState<string[]>([HOME_URL]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [inputUrl, setInputUrl] = useState(HOME_URL);
  const [frameKey, setFrameKey] = useState(0);
  const [frameError, setFrameError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const url = history[historyIndex] ?? HOME_URL;

  const navigate = (target: string) => {
    const full = target.startsWith('http') ? target : `https://${target}`;
    const nextHistory = [...history.slice(0, historyIndex + 1), full];
    setHistory(nextHistory);
    setHistoryIndex(nextHistory.length - 1);
    setInputUrl(full);
    setFrameKey((k) => k + 1);
    setFrameError(false);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const nextIdx = historyIndex - 1;
      setHistoryIndex(nextIdx);
      setInputUrl(history[nextIdx]);
      setFrameKey((k) => k + 1);
      setFrameError(false);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      const nextIdx = historyIndex + 1;
      setHistoryIndex(nextIdx);
      setInputUrl(history[nextIdx]);
      setFrameKey((k) => k + 1);
      setFrameError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(inputUrl);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Browser toolbar */}
      <div style={{
        padding: '8px 12px',
        borderBottom: '1px solid var(--border-inner)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(22,22,26,0.60)',
        flexShrink: 0,
      }}>
        <button
          onClick={goBack}
          disabled={historyIndex <= 0}
          style={{
            background: 'none',
            border: 'none',
            color: historyIndex <= 0 ? 'var(--text-tertiary)' : 'var(--text-secondary)',
            cursor: historyIndex <= 0 ? 'default' : 'pointer',
            padding: '4px',
            display: 'flex',
          }}
          title="Back"
          aria-label="Back"
        >
          <ArrowLeft size={14} />
        </button>
        <button
          onClick={goForward}
          disabled={historyIndex >= history.length - 1}
          style={{
            background: 'none',
            border: 'none',
            color: historyIndex >= history.length - 1 ? 'var(--text-tertiary)' : 'var(--text-secondary)',
            cursor: historyIndex >= history.length - 1 ? 'default' : 'pointer',
            padding: '4px',
            display: 'flex',
          }}
          title="Forward"
          aria-label="Forward"
        >
          <ArrowRight size={14} />
        </button>
        <button
          onClick={() => navigate(HOME_URL)}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px', display: 'flex' }}
          title="Home"
          aria-label="Navigate home"
        >
          <Home size={14} />
        </button>
        <button
          onClick={() => setFrameKey((k) => k + 1)}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px', display: 'flex' }}
          title="Refresh"
          aria-label="Refresh page"
        >
          <RotateCcw size={14} />
        </button>

        <form onSubmit={handleSubmit} style={{ flex: 1 }}>
          <input
            ref={inputRef}
            type="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-inner)',
              borderRadius: '6px',
              padding: '5px 10px',
              fontSize: '12px',
              fontFamily: 'var(--macos-mono)',
              color: 'var(--text-primary)',
              outline: 'none',
              userSelect: 'text',
            }}
            aria-label="URL bar"
            onFocus={(e) => e.currentTarget.select()}
          />
        </form>

        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px', display: 'flex', textDecoration: 'none' }}
          title="Open in new tab"
          aria-label="Open current URL in new tab"
        >
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Bookmarks bar */}
      <div style={{
        display: 'flex',
        gap: '6px',
        padding: '6px 12px',
        borderBottom: '1px solid var(--border-inner)',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        flexShrink: 0,
        background: 'rgba(18,18,22,0.40)',
      }}>
        {BOOKMARKS.map((bm) => (
          <button
            key={bm.url}
            onClick={() => navigate(bm.url)}
            style={{
              background: url === bm.url ? 'rgba(56,189,248,0.12)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${url === bm.url ? 'rgba(56,189,248,0.30)' : 'var(--border-inner)'}`,
              borderRadius: '5px',
              padding: '3px 10px',
              fontSize: '12px',
              color: url === bm.url ? 'var(--accent)' : 'var(--text-secondary)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--macos-font)',
              transition: 'background 0.12s',
            }}
            title={bm.description}
            aria-label={`Bookmark: ${bm.label}`}
          >
            {bm.label}
          </button>
        ))}
      </div>

      {/* Frame */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {frameError ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: '16px',
            padding: '24px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '360px' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: 'var(--text-primary)' }}>Cannot display in-frame</p>
              <p style={{ margin: 0 }}>
                Some sites block embedding for security. Open in a new tab to view it directly.
              </p>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary"
              style={{ fontSize: '13px' }}
            >
              <ExternalLink size={14} />
              Open in New Tab
            </a>
          </div>
        ) : (
          <iframe
            key={frameKey}
            src={url}
            title={`Browser — ${url}`}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
            onError={() => setFrameError(true)}
          />
        )}
      </div>
    </div>
  );
}

