import React, { useEffect } from 'react'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

import useTheme          from './hooks/useTheme'
import useCursor         from './hooks/useCursor'
import useScrollProgress from './hooks/useScrollProgress'

export default function App() {
  const { dark, toggle } = useTheme()

  useCursor()
  useScrollProgress()

  return (
    <>
      {/* Global UI chrome */}
      <div id="cursor" />
      <div id="cursor-ring" />
      <div id="scroll-progress" />
      <button
        id="back-top"
        className="back-top hoverable"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up" />
      </button>

      {/* Page */}
      <Navbar dark={dark} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
