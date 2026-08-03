import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter enables all the routing/URL logic for the whole app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)