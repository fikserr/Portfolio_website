import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/style.scss'
import ContextProvider from './Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>,
)
