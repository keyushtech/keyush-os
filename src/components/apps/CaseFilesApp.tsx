import { useState } from 'react';
import { ChevronRight, ExternalLink, Github, Folder, FileText } from 'lucide-react';
import { ownerProfile } from '../../data/ownerProfile';

type PathSegment = string;

interface FileEntry {
  type: 'folder' | 'file';
  name: string;
  children?: FileEntry[];
  projectId?: string;
}

const FILE_TREE: FileEntry[] = [
  {
    type: 'folder',
    name: 'Start Here',
    children: [
      { type: 'file', name: 'README.case', projectId: 'grand-scheme' },
    ],
  },
  {
    type: 'folder',
    name: 'AI & Cloud',
    children: [
      { type: 'file', name: 'The Grand Scheme.case', projectId: 'grand-scheme' },
      { type: 'file', name: 'Aura AI.case', projectId: 'aura-ai' },
    ],
  },
  {
    type: 'folder',
    name: 'Systems',
    children: [
      { type: 'file', name: 'Pac-Man Engine.case', projectId: 'pacman' },
      { type: 'file', name: 'Telemetry Pipeline.case', projectId: 'telemetry-pipeline' },
    ],
  },
  {
    type: 'folder',
    name: 'Engineering',
    children: [
      { type: 'file', name: 'Parametric Gearbox.case', projectId: 'gearbox' },
    ],
  },
];

export function CaseFilesApp() {
  const [path, setPath] = useState<PathSegment[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const currentFolder = (() => {
    let node: FileEntry[] = FILE_TREE;
    for (const seg of path) {
      const found = node.find((e) => e.name === seg && e.type === 'folder');
      if (found?.children) node = found.children;
    }
    return node;
  })();

  const project = selectedId ? ownerProfile.projects.find((p) => p.id === selectedId) : null;

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '200px',
          minWidth: '200px',
          borderRight: '1px solid var(--border-inner)',
          padding: '16px 12px',
          overflowY: 'auto',
          flexShrink: 0,
        }}
      >
        <div style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
          Case Files
        </div>
        {FILE_TREE.map((entry) => (
          <SidebarItem
            key={entry.name}
            entry={entry}
            isSelected={path[0] === entry.name}
            onSelect={() => { setPath([entry.name]); setSelectedId(null); }}
          />
        ))}
      </div>

      {/* Main pane */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Breadcrumb */}
        <div
          style={{
            padding: '10px 16px',
            borderBottom: '1px solid var(--border-inner)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            fontFamily: 'var(--macos-mono)',
            color: 'var(--text-secondary)',
          }}
        >
          <button onClick={() => { setPath([]); setSelectedId(null); }} style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '12px', fontFamily: 'var(--macos-mono)', cursor: 'pointer', padding: 0 }}>
            Case Files
          </button>
          {path.map((seg, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ChevronRight size={12} color="var(--text-tertiary)" />
              <button
                onClick={() => { setPath(path.slice(0, i + 1)); setSelectedId(null); }}
                style={{ background: 'none', border: 'none', color: i === path.length - 1 ? 'var(--text-primary)' : 'var(--accent)', fontSize: '12px', fontFamily: 'var(--macos-mono)', cursor: 'pointer', padding: 0 }}
              >
                {seg}
              </button>
            </span>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          {project ? (
            <CaseDetail project={project} onBack={() => setSelectedId(null)} />
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
              {currentFolder.map((entry) => (
                <FileEntryCard
                  key={entry.name}
                  entry={entry}
                  onClick={() => {
                    if (entry.type === 'folder') {
                      setPath([...path, entry.name]);
                    } else if (entry.projectId) {
                      setSelectedId(entry.projectId);
                    }
                  }}
                />
              ))}
              {currentFolder.length === 0 && (
                <p style={{ color: 'var(--text-tertiary)', fontSize: '13px', fontFamily: 'var(--macos-mono)', gridColumn: '1/-1' }}>
                  Empty folder.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  entry,
  isSelected,
  onSelect,
}: {
  entry: FileEntry;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        padding: '6px 8px',
        borderRadius: '6px',
        background: isSelected ? 'rgba(56,189,248,0.12)' : 'none',
        border: isSelected ? '1px solid rgba(56,189,248,0.20)' : '1px solid transparent',
        color: isSelected ? 'var(--accent)' : 'var(--text-secondary)',
        fontSize: '13px',
        cursor: 'pointer',
        textAlign: 'left',
        marginBottom: '2px',
        transition: 'background 0.12s',
      }}
      aria-label={`Navigate to ${entry.name}`}
    >
      <Folder size={13} />
      {entry.name}
    </button>
  );
}

function FileEntryCard({ entry, onClick }: { entry: FileEntry; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '16px 12px',
        borderRadius: '10px',
        background: 'rgba(36,36,42,0.60)',
        border: '1px solid var(--border-outer)',
        cursor: 'pointer',
        transition: 'border-color 0.15s, background 0.15s',
        color: 'var(--text-primary)',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-accent)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-outer)'; }}
      aria-label={`Open ${entry.name}`}
    >
      {entry.type === 'folder' ? (
        <Folder size={28} color="var(--accent)" />
      ) : (
        <FileText size={28} color="var(--text-secondary)" />
      )}
      <span style={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.3, wordBreak: 'break-word' }}>
        {entry.name}
      </span>
    </button>
  );
}

function CaseDetail({ project, onBack }: { project: typeof ownerProfile.projects[0]; onBack: () => void }) {
  return (
    <div style={{ maxWidth: '620px' }}>
      <button
        onClick={onBack}
        style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '13px', fontFamily: 'var(--macos-mono)', cursor: 'pointer', padding: '0 0 20px 0' }}
        aria-label="Back to file list"
      >
        ← Back
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', width: '100%' }}>
          {project.name}
        </h2>
        {project.url && (
          <a href={project.url} target="_blank" rel="noreferrer noopener" className="btn-primary" style={{ fontSize: '12px', padding: '7px 14px' }}>
            <ExternalLink size={12} /> Live
          </a>
        )}
        {project.repository && (
          <a href={project.repository} target="_blank" rel="noreferrer noopener" className="btn-secondary" style={{ fontSize: '12px', padding: '7px 14px' }}>
            <Github size={12} /> Source
          </a>
        )}
      </div>

      {[
        { label: 'Client', value: project.client },
        { label: 'Category', value: project.category },
        { label: 'Dates', value: project.dates },
        { label: 'Role', value: project.role },
      ].map(({ label, value }) => (
        <div key={label} style={{ display: 'flex', gap: '12px', marginBottom: '10px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', width: '72px', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.06em', paddingTop: '2px' }}>{label}</span>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{value}</span>
        </div>
      ))}

      <div className="section-divider" />

      {[
        { label: 'Problem', value: project.problem },
        { label: 'Built', value: project.intervention },
        { label: 'Outcome', value: project.outcome },
      ].map(({ label, value }) => (
        <div key={label} style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>{label}</div>
          <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{value}</p>
        </div>
      ))}

      <div style={{ marginTop: '8px' }}>
        <div style={{ fontSize: '11px', fontFamily: 'var(--macos-mono)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Stack</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </div>
    </div>
  );
}

