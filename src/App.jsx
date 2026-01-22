import React, { useState, useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Loader from './component/Loader'
import GradualBlur from './component/GradualBlur'
import Navbar from './component/Navbar'

const App = () => {
  const hasRunRef = useRef(false)

  const [loading, setLoading] = useState(true)
  const [exit, setExit] = useState(false)
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' && window.innerWidth >= 1024
  )

  /* DESKTOP CHECK */
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  /* LOADER – RUN ONCE PER SESSION */
  useEffect(() => {
    if (hasRunRef.current) return
    hasRunRef.current = true

    if (!isDesktop) {
      setLoading(false)
      return
    }

    const hasPlayed = sessionStorage.getItem('loaderPlayed')

    if (hasPlayed === 'true') {
      setLoading(false)
      return
    }

    sessionStorage.setItem('loaderPlayed', 'true')

    const exitTimer = setTimeout(() => setExit(true), 2000)
    const removeTimer = setTimeout(() => setLoading(false), 3200)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [isDesktop])

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
