import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TransactionHistory from './pages/transactions/TransactionHistory.jsx'
// render <Marketplace />
// render <AdminApproval />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TransactionHistory/>
  </StrictMode>,
)