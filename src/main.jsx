import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreatePlans from './pages/plans/CreatePlans.jsx'
// render <CreatePlan />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreatePlans />
  </StrictMode>,
)