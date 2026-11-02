import { ownerProfile } from '../../data/ownerProfile';

export function JourneyApp() {
  const { journey } = ownerProfile;

  return (
    <div style={{ padding: '24px', overflowY: 'auto', height: '100%' }}>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Journey
        </h2>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
          {journey[0]?.year} — Present
        </p>
      </div>

      <div style={{ position: 'relative', paddingLeft: '32px' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '10px',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'var(--border-outer)',
        }} aria-hidden="true" />

        <div style={{ display: 'grid', gap: '24px' }}>
          {journey.map((item, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-27px',
                top: '4px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--accent)',
                border: '2px solid #0A0A0C',
                boxShadow: '0 0 8px rgba(56,189,248,0.4)',
              }} aria-hidden="true" />

              <div className="metric-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px', gap: '12px', flexWrap: 'wrap' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                  <span style={{
                    fontFamily: 'var(--macos-mono)',
                    fontSize: '12px',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}>
                    {item.year}
                  </span>
                </div>
                <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {item.story}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {item.skill.split(' · ').map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

