import React from 'react'
import useReveal from '../hooks/useReveal'
import {
  achievements,
  certifications,
  githubStats
} from '../data/achievements'
import '../styles/Experience.css'

function AchievementCard({ item }) {
  return (
    <div className="achievement-card hoverable">
      <div className="ach-icon">
        <i className={item.faIcon}></i>
      </div>

      <div className="ach-content">
        <div className="ach-title">{item.title}</div>

        <div className="ach-sub">{item.sub}</div>

        <div className="ach-bottom">
          <span className="ach-badge">{item.badge}</span>

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ach-link"
            >
              Verify{' '}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="experience">
      <div className="grid-bg" />
      <div
        className="glow-orb orb2"
        style={{ opacity: 0.35 }}
      />

      <div className="experience-inner">
        <div className="reveal" ref={headerRef}>
          <div className="section-tag">Journey</div>

          <h2 className="section-title">
            Experience & <span>Achievements</span>
          </h2>

          <p className="section-desc">
            Milestones that shaped my skills and
            perspective as a developer.
          </p>
        </div>

        <div className="experience-grid reveal" ref={gridRef}>
          {/* Left Column */}
          <div>
            <div className="exp-col-title">
              <i className="fa-solid fa-trophy"></i>{' '}
              Achievements
            </div>

            <div className="achievement-list">
              {achievements.map(item => (
                <AchievementCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="exp-col-title">
              <i className="fa-solid fa-chart-line"></i>{' '}
              GitHub Activity
            </div>

            <div className="github-stats">
              {githubStats.map(stat => (
                <div
                  className="gh-stat-card hoverable"
                  key={stat.label}
                >
                  <div className="gh-stat-num">
                    {stat.num}
                  </div>

                  <div className="gh-stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="exp-col-title"
              style={{ marginTop: '2rem' }}
            >
              <i className="fa-solid fa-certificate"></i>{' '}
              Certifications
            </div>

            <div className="achievement-list">
              {certifications.map(item => (
                <AchievementCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}