import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import KycVerification from './pages/profile/KycVerification.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KycVerification/>
  </StrictMode>,
)