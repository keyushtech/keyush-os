import { ownerProfile } from '../../data/ownerProfile';

export function FounderTxtApp() {
  return (
    <div
      style={{
        padding: '24px',
        height: '100%',
        overflowY: 'auto',
        fontFamily: 'var(--macos-mono)',
        fontSize: '13px',
        lineHeight: 1.85,
        color: 'var(--text-secondary)',
      }}
    >
      <pre
        style={{
          margin: 0,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit',
          color: 'inherit',
        }}
        aria-label="Founder.txt — personal note from Keyush Sai Velagapudi"
      >
        {ownerProfile.founderTxt}
      </pre>
    </div>
  );
}

