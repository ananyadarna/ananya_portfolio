import React from 'react'
import useReveal from '../hooks/useReveal'
import '../styles/About.css'

const HIGHLIGHTS = [
  { label: 'Frontend', value: 'React, Bootstrap, Responsive UI, CSS Architecture' },
  { label: 'Backend',  value: 'Node.js, Express, REST APIs, Auth Systems' },
  { label: 'Goal',     value: 'Build impactful products and grow as a software engineer' },
  { label: 'Status',   value: 'Open to Software Developer Opportunities' },
]

const TAGS = [
  'React', 'Node.js', 'MongoDB', 'Express',
  'Python', 'Git', 'Bootstrap','REST APIs',
]

export default function About() {
  const imageRef = useReveal()
  const textRef  = useReveal()

  return (
    <section className="about" id="about">
      <div className="grid-bg" />
      <div className="glow-orb orb1" style={{ opacity: 0.5 }} />

      <div className="about-inner">
        <div className="about-grid">

          {/* Image */}
          <div className="about-image-wrap reveal" ref={imageRef}>
            <div className="about-glow" />
            <div className="about-image-frame">
              <div className="about-image-inner"><img src="/profile.jpeg" alt="Ananya Darna" style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover', 
      objectPosition: 'top' 
    }} /></div>
            </div>
            <div className="about-floating-badge">
              <div className="badge-icon"><i className="fa-solid fa-graduation-cap" /></div>
              <div>
                <div className="badge-text">MCA Student</div>
                <div className="badge-sub">Full Stack Focus</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text reveal" ref={textRef}>
            <div className="section-tag">About Me</div>
            <h2 className="section-title">
              Building the web,<br />
              <span>one commit at a time.</span>
            </h2>

            <p className="section-desc">
              I'm Ananya, an MCA student and full-stack developer focused on building scalable, user-friendly products. I enjoy solving real problems through clean code, performance, and thoughtful UI.
            </p>

            <div className="about-highlights">
              {HIGHLIGHTS.map(h => (
                <div className="highlight-item" key={h.label}>
                  <div className="highlight-dot" />
                  <span><strong>{h.label}:</strong> {h.value}</span>
                </div>
              ))}
            </div>

            <div className="about-tags">
              {TAGS.map(t => (
                <span className="about-tag hoverable" key={t}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
