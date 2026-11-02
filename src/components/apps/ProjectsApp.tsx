import { useState } from 'react';
import { ExternalLink, Github, Star, Layers } from 'lucide-react';
import { ownerProfile } from '../../data/ownerProfile';

const STATUS_COLORS: Record<string, string> = {
  verified: 'var(--green)',
  'founder-reported': 'var(--yellow)',
  'client-reported': 'var(--accent)',
  estimated: 'rgba(255,200,100,0.9)',
  illustrative: 'var(--text-tertiary)',
  private: 'var(--text-tertiary)',
};

export function ProjectsApp() {
  const [selected, setSelected] = useState<string | null>(null);
  const projects = ownerProfile.projects;
  const selectedProject = projects.find((p) => p.id === selected);

  if (selectedProject) {
    return (
      <div style={{ padding: '24px', height: '100%', overflowY: 'auto' }}>
        <button
          onClick={() => setSelected(null)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent)',
            fontSize: '13px',
            fontFamily: 'var(--macos-mono)',
            cursor: 'pointer',
            padding: '0 0 20px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
          aria-label="Back to all projects"
        >
          ← Back
        </button>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            {selectedProject.name}
          </h2>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {selectedProject.url && (
              <a href={selectedProject.url} target="_blank" rel="noreferrer noopener" className="btn-primary" style={{ fontSize: '12px', padding: '7px 14px' }}>
                <ExternalLink size={13} /> Live
              </a>
            )}
            {selectedProject.repository && (
              <a href={selectedProject.repository} target="_blank" rel="noreferrer noopener" className="btn-secondary" style={{ fontSize: '12px', padding: '7px 14px' }}>
                <Github size={13} /> Source
              </a>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <span className="chip">{selectedProject.category}</span>
          <span className="chip-neutral chip">{selectedProject.dates}</span>
          <span className="chip-neutral chip">{selectedProject.role}</span>
        </div>

        <div className="section-divider" />

        <div style={{ display: 'grid', gap: '20px' }}>
          <section>
            <h3 style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Problem</h3>
            <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{selectedProject.problem}</p>
          </section>

          <section>
            <h3 style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>What I Built</h3>
            <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{selectedProject.intervention}</p>
          </section>

          <section>
            <h3 style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Outcome</h3>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: STATUS_COLORS[selectedProject.outcomeStatus] ?? 'var(--text-tertiary)',
                  marginTop: '6px',
                  flexShrink: 0,
                }}
              />
              <div>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--text-primary)', margin: '0 0 6px 0' }}>{selectedProject.outcome}</p>
                <span style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)' }}>
                  {selectedProject.outcomeStatus.replace('-', ' ')}
                </span>
              </div>
            </div>
          </section>

          <section>
            <h3 style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {selectedProject.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', height: '100%', overflowY: 'auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Projects
        </h2>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'var(--macos-mono)' }}>
          {projects.length} projects · click to expand
        </p>
      </div>

      {/* Featured */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
          ★ Featured
        </div>
        <div style={{ display: 'grid', gap: '12px' }}>
          {projects.filter((p) => p.featured).map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelected(project.id)} />
          ))}
        </div>
      </div>

      {/* Other */}
      <div>
        <div style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
          All Projects
        </div>
        <div style={{ display: 'grid', gap: '10px' }}>
          {projects.filter((p) => !p.featured).map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelected(project.id)} compact />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onClick,
  compact = false,
}: {
  project: typeof ownerProfile.projects[0];
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        background: 'rgba(36,36,42,0.60)',
        border: '1px solid var(--border-outer)',
        borderRadius: '10px',
        padding: compact ? '12px 16px' : '16px',
        cursor: 'pointer',
        transition: 'border-color 0.15s, background 0.15s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-accent)';
        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(36,36,52,0.80)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-outer)';
        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(36,36,42,0.60)';
      }}
      aria-label={`Open ${project.name} project details`}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            {project.featured && <Star size={12} color="var(--accent)" fill="var(--accent)" />}
            <span style={{ fontSize: compact ? '14px' : '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
              {project.name}
            </span>
          </div>
          {!compact && (
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '0 0 10px 0', lineHeight: 1.55 }}>
              {project.problem.slice(0, 120)}…
            </p>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <span className="chip-neutral chip">{project.category}</span>
            <span className="chip-neutral chip">{project.dates}</span>
          </div>
        </div>
        <Layers size={14} color="var(--text-tertiary)" style={{ flexShrink: 0, marginTop: '4px' }} />
      </div>
    </button>
  );
}

