import { FileSearch, ArrowUpRight } from 'lucide-react';
import { ownerProfile } from '../../data/ownerProfile';

export function ResumeApp() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '32px',
        textAlign: 'center',
        gap: '24px',
      }}
    >
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '16px',
        background: 'rgba(56,189,248,0.10)',
        border: '1px solid rgba(56,189,248,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--accent)',
      }}>
        <FileSearch size={28} strokeWidth={1.5} />
      </div>

      <div>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 700 }}>Resume / CV</h2>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '360px' }}>
          {ownerProfile.identity.fullName} — {ownerProfile.identity.subHeadline}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '300px' }}>
        <a
          href={`mailto:${ownerProfile.conversion.email}?subject=Resume Request — ${ownerProfile.identity.fullName}`}
          className="btn-primary"
          style={{ justifyContent: 'center', padding: '13px 20px' }}
          aria-label="Request resume via email"
        >
          Request Resume via Email
          <ArrowUpRight size={14} />
        </a>
        <a
          href={ownerProfile.conversion.primaryUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-secondary"
          style={{ justifyContent: 'center', padding: '13px 20px' }}
          aria-label="View LinkedIn profile"
        >
          View LinkedIn Profile
        </a>
      </div>

      <p style={{
        fontSize: '11px',
        fontFamily: 'var(--macos-mono)',
        color: 'var(--text-tertiary)',
        maxWidth: '320px',
        lineHeight: 1.6,
      }}>
        Resume is available on request. Email directly or connect on LinkedIn for the latest version.
      </p>
    </div>
  );
}

