import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StyleGuide from './StyleGuide.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyleGuide />
  </StrictMode>,
)