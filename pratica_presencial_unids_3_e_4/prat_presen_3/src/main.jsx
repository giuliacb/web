import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LivrosContextProvider } from './contexts/LivrosContext.jsx'

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Monoton&family=Poppins:wght@300;400;600;700&display=swap';
link.rel = 'stylesheet';

document.head.appendChild(link);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LivrosContextProvider>
      <App />
    </LivrosContextProvider>
  </React.StrictMode>,
)
