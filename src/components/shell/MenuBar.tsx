import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { ownerProfile } from '../../data/ownerProfile';

interface MenuBarProps {
  onSearch: () => void;
}

export function MenuBar({ onSearch }: MenuBarProps) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    function tick() {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      const dateStr = now.toLocaleDateString('en-IN', {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      setTime(timeStr);
      setDate(dateStr);
    }
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className="glass-menubar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '28px',
        borderBottom: '1px solid var(--border-inner)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 14px',
        zIndex: 10000,
      }}
      role="banner"
    >
      {/* Left — OS name + avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={ownerProfile.identity.portrait}
          alt="Keyush Sai Velagapudi"
          width={18}
          height={18}
          style={{
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.25)',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
          }}
        >
          {ownerProfile.identity.osName}
        </span>

        <nav aria-label="Main navigation" style={{ display: 'flex', gap: '16px', marginLeft: '8px' }}>
          {['Work', 'Proof', 'Journey'].map((item) => (
            <span
              key={item}
              style={{
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                cursor: 'default',
              }}
            >
              {item}
            </span>
          ))}
        </nav>
      </div>

      {/* Right — search + availability + time */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Availability dot */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          title={ownerProfile.identity.availability}
          aria-label={ownerProfile.identity.availability}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--green)',
              boxShadow: '0 0 6px rgba(39,201,63,0.6)',
              display: 'block',
              flexShrink: 0,
            }}
          />
          <span
            style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--macos-mono)' }}
            className="hidden sm:inline"
          >
            OPEN
          </span>
        </div>

        {/* Search */}
        <button
          onClick={onSearch}
          aria-label="Open command palette (⌘K)"
          title="Search (⌘K)"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
            color: 'var(--text-secondary)',
          }}
        >
          <Search size={13} />
        </button>

        {/* Date + Time */}
        <div
          style={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center',
            fontFamily: 'var(--macos-mono)',
            fontSize: '12px',
            color: 'var(--text-secondary)',
          }}
          aria-label={`Current time: ${time} IST`}
        >
          <span className="hidden md:inline">{date}</span>
          <span>{time}</span>
          <span className="hidden md:inline" style={{ color: 'var(--text-tertiary)' }}>IST</span>
        </div>
      </div>
    </header>
  );
}

