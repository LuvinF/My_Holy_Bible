import React from 'react'
import { Analytics } from "@vercel/analytics/next"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Analytics>
    <App />
    </Analytics>
  </React.StrictMode>,
)
