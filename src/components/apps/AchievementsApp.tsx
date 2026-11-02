import { ownerProfile } from '../../data/ownerProfile';

const CATEGORY_COLORS: Record<string, string> = {
  Academic: '#38BDF8',
  Technical: '#27c93f',
  Community: '#ffbd2e',
  'Shipped Work': '#c084fc',
};

export function AchievementsApp() {
  const { achievements, legal } = ownerProfile;

  const grouped = achievements.reduce<Record<string, typeof achievements>>((acc, a) => {
    if (!acc[a.category]) acc[a.category] = [];
    acc[a.category].push(a);
    return acc;
  }, {});

  return (
    <div style={{ padding: '24px', overflowY: 'auto', height: '100%' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Achievements
        </h2>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
          All credentials are officially certified or independently verifiable.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <div style={{
              fontSize: '11px',
              fontFamily: 'var(--macos-mono)',
              color: CATEGORY_COLORS[category] ?? 'var(--text-tertiary)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: CATEGORY_COLORS[category] ?? 'var(--text-tertiary)',
              }} aria-hidden="true" />
              {category}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
              {items.map((a) => (
                <div
                  key={a.id}
                  className="metric-card"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: `rgba(${hexToRgb(CATEGORY_COLORS[a.category] ?? '#38bdf8')}, 0.12)`,
                    border: `1px solid rgba(${hexToRgb(CATEGORY_COLORS[a.category] ?? '#38bdf8')}, 0.25)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    flexShrink: 0,
                  }} aria-hidden="true">
                    {a.badge}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>
                      {a.title}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {a.description}
                    </div>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--macos-mono)', color: 'var(--green)', marginTop: '6px' }}>
                      ✓ {a.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'var(--macos-mono)', marginTop: '24px', lineHeight: 1.6, borderTop: '1px solid var(--border-inner)', paddingTop: '16px' }}>
        {legal.metricDisclaimer}
      </p>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '255,255,255';
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}

