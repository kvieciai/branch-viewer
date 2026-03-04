import { useState } from 'react'

const FONT = 'Inter, system-ui, sans-serif'

const wrapperStyle = { position: 'fixed', inset: 0 }

const emptyStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  fontFamily: FONT,
  color: '#999',
}

const iframeStyle = { width: '100%', height: '100%', border: 'none', display: 'block' }

const switcherStyle = {
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
  fontFamily: FONT,
}

const buttonStyle = {
  fontSize: 13,
  fontWeight: 500,
  fontFamily: 'inherit',
  border: 'none',
  borderRadius: 999,
  padding: '6px 16px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'background 0.15s, color 0.15s',
}

export default function App({ branches = [] }) {
  const [active, setActive] = useState(branches.length ? 0 : null)

  return (
    <div style={wrapperStyle}>
      {active === null ? (
        <div style={emptyStyle}>
          No branches configured in branches.json
        </div>
      ) : (
        <iframe
          src={branches[active]?.url}
          style={iframeStyle}
        />
      )}

      {/* Branch switcher */}
      {branches.length > 0 ? (
        <div style={switcherStyle}>
          {branches.map(({ label }, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                ...buttonStyle,
                color: i === active ? '#000' : '#999',
                background: i === active ? '#fff' : 'transparent',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
