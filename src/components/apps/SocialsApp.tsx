import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { ownerProfile } from '../../data/ownerProfile';

const NETWORK_ICONS: Record<string, React.ReactNode> = {
  GitHub: <Github size={22} strokeWidth={1.5} />,
  LinkedIn: <Linkedin size={22} strokeWidth={1.5} />,
  Email: <Mail size={22} strokeWidth={1.5} />,
};

const NETWORK_COLORS: Record<string, string> = {
  GitHub: 'rgba(255,255,255,0.08)',
  LinkedIn: 'rgba(56,189,248,0.08)',
  Email: 'rgba(56,189,248,0.05)',
};

export function SocialsApp() {
  const { socials } = ownerProfile;

  return (
    <div style={{ padding: '24px', overflowY: 'auto', height: '100%' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Socials
        </h2>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
          Public presence and direct contact channels.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '12px' }}>
        {socials.map((social) => (
          <a
            key={social.network}
            href={social.url}
            target={social.network !== 'Email' ? '_blank' : undefined}
            rel="noreferrer noopener"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '18px 20px',
              background: NETWORK_COLORS[social.network] ?? 'rgba(36,36,42,0.60)',
              border: '1px solid var(--border-outer)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              transition: 'border-color 0.15s, background 0.15s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-accent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-outer)';
            }}
            aria-label={`Visit ${social.network}: ${social.handle}`}
          >
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              flexShrink: 0,
            }}>
              {NETWORK_ICONS[social.network] ?? null}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '3px' }}>
                {social.network}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--accent)', fontFamily: 'var(--macos-mono)', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {social.handle}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {social.purpose}
              </div>
            </div>
            <ArrowUpRight size={16} color="var(--text-tertiary)" style={{ flexShrink: 0 }} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}

