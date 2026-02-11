import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initTg } from './lib/telegram'

initTg();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
