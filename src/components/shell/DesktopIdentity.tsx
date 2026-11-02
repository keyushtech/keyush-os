import { useState, useEffect } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { ownerProfile } from '../../data/ownerProfile';
import type { AppId } from '../../types';

const MORPHING_DESCRIPTORS = [
  'KEYUSH OS v1.0',
  'AI SYSTEMS BUILDER',
  'CLOUD ARCHITECT',
  'GOOGLE ACE CERTIFIED',
  'FOUNDER MODE: ACTIVE',
  'IIT BHILAI · CSE \'29',
];

interface DesktopIdentityProps {
  onOpen: (id: AppId) => void;
}

export function DesktopIdentity({ onOpen }: DesktopIdentityProps) {
  const [morphIdx, setMorphIdx] = useState(0);
  const [morphVisible, setMorphVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setMorphVisible(false);
      setTimeout(() => {
        setMorphIdx((i) => (i + 1) % MORPHING_DESCRIPTORS.length);
        setMorphVisible(true);
      }, 300);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        maxWidth: '600px',
        width: '100%',
        padding: '0 24px',
        pointerEvents: 'none',
      }}
    >
      {/* Avatar */}
      <img
        src={ownerProfile.identity.portrait}
        alt="Keyush Sai Velagapudi"
        width={72}
        height={72}
        style={{
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.20)',
          objectFit: 'cover',
          boxShadow: '0 8px 32px rgba(0,0,0,0.50)',
          pointerEvents: 'none',
        }}
      />

      {/* Morphing descriptor */}
      <div
        style={{
          fontFamily: 'var(--macos-mono)',
          fontSize: '11px',
          letterSpacing: '0.12em',
          color: 'var(--accent)',
          opacity: morphVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          userSelect: 'none',
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {MORPHING_DESCRIPTORS[morphIdx]}
      </div>

      {/* Name */}
      <h1
        style={{
          margin: 0,
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          lineHeight: 1.0,
          textShadow: '0 2px 20px rgba(0,0,0,0.50)',
          userSelect: 'none',
        }}
      >
        {ownerProfile.identity.fullName}
      </h1>

      {/* Sub-headline */}
      <p
        style={{
          margin: 0,
          fontSize: 'clamp(12px, 1.8vw, 15px)',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          maxWidth: '480px',
          textShadow: '0 1px 8px rgba(0,0,0,0.60)',
          userSelect: 'none',
        }}
      >
        {ownerProfile.identity.subHeadline}
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', pointerEvents: 'all' }}>
        <a
          href={ownerProfile.conversion.primaryUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-primary"
          style={{ fontSize: '13px' }}
          aria-label="Connect on LinkedIn"
        >
          {ownerProfile.conversion.primaryLabel}
          <ArrowUpRight size={14} />
        </a>
        <button
          onClick={() => onOpen('projects')}
          className="btn-secondary"
          style={{ fontSize: '13px' }}
          aria-label="View portfolio projects"
        >
          <FileText size={14} />
          View Projects
        </button>
      </div>

      {/* Positioning statement */}
      <p
        style={{
          margin: 0,
          fontSize: '12px',
          fontFamily: 'var(--macos-mono)',
          color: 'var(--text-tertiary)',
          lineHeight: 1.6,
          maxWidth: '420px',
          userSelect: 'none',
        }}
      >
        {ownerProfile.identity.positioning}
      </p>
    </div>
  );
}

