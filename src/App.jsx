import React from 'react'
import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Notes from './notes/pages/Notes'
import Calendar from './calender/pages/Calender'
import Login from './auth/pages/Login'
import Register from './auth/pages/Register'
import About from './about/pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
