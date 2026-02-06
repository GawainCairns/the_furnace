import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { NewDataProvider } from './context/NewDataContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <NewDataProvider>
      <App />
    </NewDataProvider>
  </React.StrictMode>
)