import React, { useEffect, useRef, useState } from 'react'
import '../styles/Hero.css'

const ROLES = [
  'Full Stack Developer',
  'React Developer',
  'Backend Builder',
  'Software Engineer',
  'MERN Stack Developer',
]

const HIGHLIGHTS = [
  { icon: 'fa-solid fa-rocket', text: '3+ Live Projects' },
  { icon: 'fa-solid fa-brain', text: 'NEXUS • Google Challenge 2026' },
  { icon: 'fa-solid fa-database', text: 'SQL Intermediate Certified' },
  { icon: 'fa-solid fa-code', text: 'React • Node • Firebase' },
]

/* ── Particle canvas ─────────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let pts = []
    let raf

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      init()
    }

    const init = () => {
      pts = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        a: Math.random() * 0.45 + 0.1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isLight = document.documentElement.classList.contains('light')

      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)

        ctx.fillStyle = isLight
          ? `rgba(59,130,246,${p.a * 0.4})`
          : `rgba(59,130,246,${p.a})`

        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)

          if (d < 120) {
            const alpha = (1 - d / 120) * (isLight ? 0.05 : 0.12)

            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    />
  )
}

/* ── Typing animation ────────────────────────────────────────── */
function TypingRole() {
  const [display, setDisplay] = useState('')

  const state = useRef({
    roleIdx: 0,
    charIdx: 0,
    deleting: false,
  })

  useEffect(() => {
    let timer

    const tick = () => {
      const { roleIdx, charIdx, deleting } = state.current
      const current = ROLES[roleIdx]

      if (!deleting) {
        const next = current.slice(0, charIdx + 1)
        setDisplay(next)
        state.current.charIdx++

        if (charIdx + 1 === current.length) {
          state.current.deleting = true
          timer = setTimeout(tick, 1800)
          return
        }
      } else {
        const next = current.slice(0, charIdx - 1)
        setDisplay(next)
        state.current.charIdx--

        if (charIdx - 1 === 0) {
          state.current.deleting = false
          state.current.roleIdx = (roleIdx + 1) % ROLES.length
        }
      }

      timer = setTimeout(tick, deleting ? 55 : 95)
    }

    timer = setTimeout(tick, 400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="hero-role">
      <span className="typed">{display}</span>
      <span className="cursor-blink" />
    </div>
  )
}

/* ── Hero ────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="grid-bg" />
      <div className="glow-orb orb1" />
      <div className="glow-orb orb2" />
      <div className="glow-orb orb3" />

      <ParticleCanvas />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for Work — Open to Opportunities
        </div>

        <h1 className="hero-name">
          Ananya
          <br />
          <span>Darna.</span>
        </h1>

        <TypingRole />

        <p className="hero-desc">
          MCA student building scalable full-stack applications with React,
          Node.js, Firebase, and modern UI systems. Focused on solving real
          problems through clean engineering.
        </p>

        <div className="hero-btns">
          <a className="btn-primary hoverable" href="#projects">
            <i className="fa-solid fa-bolt"></i> View Projects
          </a>

          <a
            className="btn-secondary hoverable"
            href="/ananya_resume.pdf"
            download
          >
            <i className="fa-solid fa-download"></i> Download Resume
          </a>

          <a className="btn-ghost hoverable" href="#contact">
            <i className="fa-solid fa-envelope"></i> Contact Me
          </a>
        </div>

        <div className="hero-highlights">
          {HIGHLIGHTS.map(item => (
            <div className="highlight-item" key={item.text}>
              <i className={item.icon}></i>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        scroll
      </div>
    </section>
  )
}