import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import all CSS files
import './index.css'  // Tailwind CSS imports
import './App.css'    // Branch theme styles

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)