import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GroupDashboard from './pages/groups/GroupDashboard.jsx'
// render <GroupDashboard />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GroupDashboard/>
  </StrictMode>,
)