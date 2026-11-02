import { useState } from 'react';
import { Linkedin, Mail, Copy, CheckCheck, ArrowUpRight } from 'lucide-react';
import { ownerProfile } from '../../data/ownerProfile';

export function ContactApp() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(ownerProfile.conversion.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div style={{ padding: '24px', overflowY: 'auto', height: '100%' }}>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ margin: '0 0 6px 0', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Contact
        </h2>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '480px' }}>
          Open for summer/fall internships, technical roles, and engineering collaborations.
        </p>
      </div>

      {/* Primary actions */}
      <div style={{ display: 'grid', gap: '10px', marginBottom: '28px' }}>
        <a
          href={ownerProfile.conversion.primaryUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-primary"
          style={{ justifyContent: 'center', padding: '14px 20px', fontSize: '14px', borderRadius: '10px' }}
          aria-label="Connect on LinkedIn"
        >
          <Linkedin size={16} />
          Connect on LinkedIn
          <ArrowUpRight size={14} style={{ marginLeft: 'auto' }} />
        </a>

        <button
          onClick={copyEmail}
          className="btn-secondary"
          style={{ justifyContent: 'center', padding: '14px 20px', fontSize: '14px', borderRadius: '10px' }}
          aria-label="Copy email address"
        >
          {copied ? <CheckCheck size={16} color="var(--green)" /> : <Copy size={16} />}
          {copied ? 'Copied!' : 'Copy Email Address'}
          <span style={{ fontFamily: 'var(--macos-mono)', fontSize: '12px', color: 'var(--text-secondary)', marginLeft: 'auto' }}>
            {ownerProfile.conversion.email}
          </span>
        </button>

        <a
          href={`mailto:${ownerProfile.conversion.email}`}
          className="btn-secondary"
          style={{ justifyContent: 'center', padding: '14px 20px', fontSize: '14px', borderRadius: '10px' }}
          aria-label="Send email to Keyush"
        >
          <Mail size={16} />
          Send Email
        </a>
      </div>

      <div className="section-divider" />

      {/* Services */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
          I build
        </div>
        <div style={{ display: 'grid', gap: '8px' }}>
          {ownerProfile.services.map((s) => (
            <div key={s.id} className="metric-card">
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>{s.name}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{s.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* Info */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {[
          { label: 'Timezone', value: ownerProfile.identity.timezone },
          { label: 'Location', value: ownerProfile.identity.location },
          { label: 'Status', value: ownerProfile.identity.availability },
          { label: 'Pronouns', value: ownerProfile.identity.pronouns },
        ].map(({ label, value }) => (
          <div key={label} style={{ background: 'rgba(36,36,42,0.40)', border: '1px solid var(--border-inner)', borderRadius: '8px', padding: '10px 14px' }}>
            <div style={{ fontSize: '10px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>{label}</div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

