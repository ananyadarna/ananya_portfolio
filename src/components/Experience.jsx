import React from 'react'
import useReveal from '../hooks/useReveal'
import {
  achievements,
  certifications,
  badges
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

function BadgeCard({ item }) {
  return (
    <div className="badge-card hoverable">
      <div className="badge-img-wrap">
        <img src={item.image} alt={`${item.title} ${item.subtitle}`} className="badge-img" />
      </div>
      <div className="badge-details">
        <div className="badge-org">{item.org}</div>
        <div className="badge-title-row">
          <span className="badge-title">{item.title}</span>
          <span className="badge-sub">{item.subtitle}</span>
        </div>
        <p className="badge-desc">{item.desc}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="achievements">
      <div className="grid-bg" />
      <div
        className="glow-orb orb2"
        style={{ opacity: 0.35 }}
      />

      <div className="experience-inner">
        <div className="reveal" ref={headerRef}>
          <div className="section-tag">Credentials</div>

          <h2 className="section-title">
            Achievements & <span>Certifications</span>
          </h2>

          <p className="section-desc">
            Official badges, certifications, and project milestones highlighting technical credentials and open-source contributions.
          </p>
        </div>

        {/* Visual Badges Showcase */}
        <div className="badges-showcase reveal" ref={useReveal()}>
          {badges.map(item => (
            <BadgeCard key={item.id} item={item} />
          ))}
        </div>

        <div className="experience-grid reveal" ref={gridRef}>
          {/* Left Column */}
          <div>
            <div className="exp-col-title">
              <i className="fa-solid fa-trophy"></i>{' '}
              Key Milestones
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