import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import Tailwind base styles first
import './index.css' // This should contain @tailwind base; @tailwind components; @tailwind utilities;
// Then import your custom CSS
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)