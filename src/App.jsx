import { useState } from 'react'

export default function App({ branches = [] }) {
  const [active, setActive] = useState(branches.length ? 0 : null)

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      {active === null && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontFamily: 'Inter, system-ui, sans-serif', color: '#999' }}>
          No branches configured in branches.json
        </div>
      )}
      <iframe
        src={active !== null ? branches[active].url : 'about:blank'}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
      />

      {/* Branch switcher */}
      <div style={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        background: '#1a1a1a',
        borderRadius: 999,
        padding: 4,
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        {branches.map(({ label }, i) => (
          <button
            key={label}
            onClick={() => setActive(i)}
            style={{
              fontSize: 13,
              fontWeight: 500,
              fontFamily: 'inherit',
              color: i === active ? '#000' : '#999',
              background: i === active ? '#fff' : 'transparent',
              border: 'none',
              borderRadius: 999,
              padding: '6px 16px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
