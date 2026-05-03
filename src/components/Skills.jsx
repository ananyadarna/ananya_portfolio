import React, { useState, useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'
import skillsData from '../data/skills'
import '../styles/Skills.css'

const TABS = ['All', 'Frontend', 'Backend', 'Database', 'Tools']

function getSkillLabel(level, name) {
  if (name === 'VS Code') return 'Primary IDE'
  if (level >= 90) return 'Advanced'
  if (level >= 80) return 'Proficient'
  if (level >= 70) return 'Intermediate'
  return 'Working Knowledge'
}

function SkillCard({ skill }) {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.width = `${skill.level}%`
          observer.unobserve(bar)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(bar)

    return () => observer.disconnect()
  }, [skill.level])

  return (
    <div className="skill-card hoverable">
      <div className="skill-icon">
        <i className={skill.icon}></i>
      </div>

      <div className="skill-name">{skill.name}</div>

      <div className="skill-level-wrap">
        <div className="skill-level-bar">
          <div
            className="skill-level-fill"
            ref={barRef}
            style={{ width: 0 }}
          />
        </div>

        <div className="skill-level-text">
          {getSkillLabel(skill.level, skill.name)}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('All')

  const headerRef = useReveal()
  const gridRef = useReveal()

  const filtered =
    active === 'All'
      ? skillsData
      : skillsData.filter(skill => skill.cat === active.toLowerCase())

  return (
    <section id="skills">
      <div className="grid-bg" />
      <div className="glow-orb orb2" style={{ opacity: 0.4 }} />

      <div className="skills-container">
        <div className="reveal" ref={headerRef}>
          <div className="section-tag">Tech Stack</div>

          <h2 className="section-title">
            Skills & <span>Technologies</span>
          </h2>

          <p className="section-desc">
            Tools and technologies I use to bring ideas from concept to
            production.
          </p>
        </div>

        <div className="skills-tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`skill-tab hoverable ${
                active === tab ? 'active' : ''
              }`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="skills-grid reveal" ref={gridRef}>
          {filtered.map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}