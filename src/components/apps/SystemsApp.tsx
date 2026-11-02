export function SystemsApp() {
  const steps = [
    {
      n: '01',
      title: 'Find the Leverage',
      purpose: 'Identify the highest-friction point in the system—not the most visible one.',
      owner: 'Deep user research, log analysis, and architectural review.',
      client: 'Access to production logs and direct stakeholder interviews.',
      artifact: 'Friction map + ranked opportunity list.',
      gate: 'Alignment on the one problem worth solving now.',
      failure: 'Building solutions to symptoms instead of root causes.',
    },
    {
      n: '02',
      title: 'Lock the System',
      purpose: 'Define exact input/output contracts before writing code.',
      owner: 'API schema, state model, data flow diagram.',
      client: 'Approve the contract. Changes after this point cost 5×.',
      artifact: 'System spec doc with typed interfaces.',
      gate: 'Zero ambiguity in what the system accepts and produces.',
      failure: 'Scope creep mid-implementation breaking the architecture.',
    },
    {
      n: '03',
      title: 'Build the Sharp Edge',
      purpose: 'Ship the smallest version that demonstrates the core value.',
      owner: 'Implement with clean architecture, typed state, and no shortcuts.',
      client: 'Review and approve the proof-of-value build.',
      artifact: 'Working prototype or MVP deployed to staging.',
      gate: 'Core loop works end-to-end with real data.',
      failure: 'Over-engineering before validating the core assumption.',
    },
    {
      n: '04',
      title: 'Integrate the Workflow',
      purpose: 'Embed the system into the real operating environment.',
      owner: 'CI/CD, secrets management, observability, error boundaries.',
      client: 'Provide production credentials and integration access.',
      artifact: 'Production deployment with monitoring dashboards.',
      gate: 'Sub-second latency under realistic load. Zero silent failures.',
      failure: 'Integration assumptions breaking under real usage patterns.',
    },
    {
      n: '05',
      title: 'Prove and Hand Off',
      purpose: 'Document what was built, what changed, and how to maintain it.',
      owner: 'Write runbooks, architecture notes, and handoff documentation.',
      client: 'Validate outcomes against the original contract.',
      artifact: 'Architecture doc + deployment runbook + outcome ledger.',
      gate: 'Client can operate and extend the system independently.',
      failure: 'Tribal knowledge staying in one engineer\'s head.',
    },
  ];

  return (
    <div style={{ padding: '24px', overflowY: 'auto', height: '100%' }}>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Operating Loop
        </h2>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '520px' }}>
          How I diagnose, architect, ship, and hand off production systems. Not a methodology deck—a working method I apply to every project.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '12px' }}>
        {steps.map((step) => (
          <div
            key={step.n}
            className="metric-card"
            style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '16px', alignItems: 'start' }}
          >
            <div style={{
              fontFamily: 'var(--macos-mono)',
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--accent)',
              opacity: 0.6,
              lineHeight: 1,
              paddingTop: '2px',
            }}>
              {step.n}
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 600 }}>{step.title}</h3>
              <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {step.purpose}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
                {[
                  { label: 'My responsibility', value: step.owner },
                  { label: 'Artifact', value: step.artifact },
                  { label: 'Gate', value: step.gate },
                  { label: 'Common failure', value: step.failure },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>
                      {label}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

