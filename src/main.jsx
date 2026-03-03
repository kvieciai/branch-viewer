import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import branches from './branches.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App branches={branches} />
  </StrictMode>,
)
