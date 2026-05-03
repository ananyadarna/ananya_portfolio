import React, { useState } from 'react'
import '../styles/Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar({ dark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* Mobile overlay menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => scrollTo(l)}>
            {l}
          </a>
        ))}
      </div>

      <nav>
        <a className="nav-logo" href="#home">AD.</a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="theme-btn hoverable" onClick={toggleTheme} title="Toggle theme">
            <i className={dark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} />
          </button>
          <a className="hire-btn hoverable" href="#contact">
            Hire Me <i className="fa-solid fa-arrow-right" />
          </a>
          <button
            className="hamburger hoverable"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  )
}
