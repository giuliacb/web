import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LivrosContextProvider } from './contexts/LivrosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LivrosContextProvider>
      <App />
    </LivrosContextProvider>
  </React.StrictMode>,
)
