import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContatosContextProvider } from './contexts/ContatosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContatosContextProvider>
      <App />
    </ContatosContextProvider>
  </React.StrictMode>,
)
