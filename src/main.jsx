import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Marketplace from './pages/marketplace/Marketplace.jsx'
// render <Marketplace />
// render <AdminApproval />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Marketplace/>
  </StrictMode>,
)