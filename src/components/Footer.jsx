import React from 'react'
import '../styles/Footer.css'

const SOCIALS = [
  { icon: 'fa-brands fa-github',    href: 'https://github.com/ananyadarna',      label: 'GitHub' },
  { icon: 'fa-brands fa-linkedin',  href: 'https://www.linkedin.com/in/ananyadarna/', label: 'LinkedIn' },
  { icon: 'fa-solid fa-envelope',   href: 'mailto:ananyadarna@email.com',       label: 'Email' },
  { icon: 'fa-brands fa-whatsapp',  href: 'https://wa.me/919392411970',          label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">Ananya Darna.</div>

      <p className="footer-tagline">
        Crafting digital experiences with clean code and thoughtful design.
        Open to opportunities worldwide.
      </p>

      <div className="footer-socials">
        {SOCIALS.map(s => (
          <a
            key={s.label}
            className="social-link hoverable"
            href={s.href}
            target="_blank"
            rel="noreferrer"
            title={s.label}
          >
            <i className={s.icon} />
          </a>
        ))}
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} Ananya Darna · All rights reserved
        </span>
        <div className="footer-links">
          <a href="#home"><i className="fa-solid fa-arrow-up" /> Back to top</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
