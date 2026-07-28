import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdminApproval from './pages/groups/AdminApproval.jsx'
// render <AdminApproval />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminApproval/>
  </StrictMode>,
)