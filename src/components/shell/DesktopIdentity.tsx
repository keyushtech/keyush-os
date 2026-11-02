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
        gap: '18px',
        maxWidth: '640px',
        width: 'calc(100% - 48px)',
        padding: '36px 32px',
        background: 'rgba(10, 10, 14, 0.52)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '24px',
        boxShadow: '0 24px 64px rgba(0, 0, 0, 0.60), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      {/* Avatar */}
      <img
        src={ownerProfile.identity.portrait}
        alt="Keyush Sai Velagapudi"
        width={76}
        height={76}
        style={{
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.35)',
          objectFit: 'cover',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.60)',
          pointerEvents: 'none',
        }}
      />

      {/* Morphing descriptor pill */}
      <div
        style={{
          fontFamily: 'var(--macos-mono)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.10em',
          color: '#38BDF8',
          background: 'rgba(56, 189, 248, 0.14)',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          borderRadius: '20px',
          padding: '4px 14px',
          opacity: morphVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          userSelect: 'none',
          boxShadow: '0 0 16px rgba(56, 189, 248, 0.15)',
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {MORPHING_DESCRIPTORS[morphIdx]}
      </div>

      {/* Name — high-contrast crisp white */}
      <h1
        style={{
          margin: 0,
          fontSize: 'clamp(34px, 5.2vw, 56px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          lineHeight: 1.05,
          textShadow: '0 2px 14px rgba(0, 0, 0, 0.90), 0 0 32px rgba(56, 189, 248, 0.25)',
          userSelect: 'none',
        }}
      >
        {ownerProfile.identity.fullName}
      </h1>

      {/* Sub-headline */}
      <p
        style={{
          margin: 0,
          fontSize: 'clamp(13px, 1.6vw, 15px)',
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.92)',
          lineHeight: 1.6,
          maxWidth: '520px',
          textShadow: '0 1px 8px rgba(0, 0, 0, 0.85)',
          userSelect: 'none',
        }}
      >
        {ownerProfile.identity.subHeadline}
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          pointerEvents: 'auto',
          marginTop: '4px',
        }}
      >
        <a
          href={ownerProfile.conversion.primaryUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-primary"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            background: '#38BDF8',
            color: '#0A0A0C',
            boxShadow: '0 4px 16px rgba(56, 189, 248, 0.35)',
            pointerEvents: 'auto',
          }}
          aria-label="Connect on LinkedIn"
        >
          {ownerProfile.conversion.primaryLabel}
          <ArrowUpRight size={14} />
        </a>
        <button
          onClick={() => onOpen('projects')}
          className="btn-secondary"
          style={{
            fontSize: '13px',
            fontWeight: 600,
            background: 'rgba(255, 255, 255, 0.14)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            color: '#FFFFFF',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.30)',
            pointerEvents: 'auto',
          }}
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
          color: 'rgba(255, 255, 255, 0.72)',
          lineHeight: 1.6,
          maxWidth: '460px',
          userSelect: 'none',
          textShadow: '0 1px 6px rgba(0, 0, 0, 0.80)',
        }}
      >
        {ownerProfile.identity.positioning}
      </p>
    </div>
  );
}
