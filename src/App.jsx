import React, { useState, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Loader from './component/Loader'
import GradualBlur from './component/GradualBlur'
import Navbar from './component/Navbar'

const App = () => {
  const location = useLocation()

  const [loading, setLoading] = useState(true)
  const [exit, setExit] = useState(false)

  /* LOADER – RUN ON INITIAL MOUNT */
  useEffect(() => {
    const exitTimer = setTimeout(() => setExit(true), 2400)
    const removeTimer = setTimeout(() => setLoading(false), 3600)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      {loading && <Loader isExiting={exit} />}
    </div>
  )
}

export default App
