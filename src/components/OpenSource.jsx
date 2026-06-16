import React from 'react'
import useReveal from '../hooks/useReveal'
import { globalStats, contributions } from '../data/opensource'
import '../styles/OpenSource.css'

function ContributionCard({ item }) {
  // Extract platform badge class
  const badgeClass = item.platform.toLowerCase().includes('gssoc') ? 'gssoc' : 'nsoc'

  return (
    <div className="os-card hoverable">
      <div className="os-header">
        <div className="os-title-group">
          <div className="os-title-wrap">
            <span className="os-title">{item.title}</span>
            <span className={`os-badge ${badgeClass}`}>{item.platform}</span>
            <a 
              href={item.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="os-repo-link hoverable"
              title="View Repository"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
          <div className="os-subtitle">// {item.subtitle}</div>
        </div>
        <div className="os-year">{item.year}</div>
      </div>

      <div className="os-prs">
        <span className="os-pr-title">Merged PRs:</span>
        {item.prs.map((pr, index) => (
          <a
            key={index}
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="os-pr-badge hoverable"
          >
            <i className="fa-solid fa-code-pull-request" /> {pr.num}
          </a>
        ))}
      </div>

      <ul className="os-bullets">
        {item.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>

      <div className="os-stack">
        {item.stack.map(tech => (
          <span className="os-tech-badge hoverable" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function OpenSource() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="opensource" id="opensource">
      <div className="grid-bg" />
      <div className="glow-orb orb2" style={{ opacity: 0.3, top: '20%', left: '10%' }} />

      <div className="opensource-inner">
        <div className="reveal" ref={headerRef}>
          <div className="section-tag">Collaboration</div>
          <h2 className="section-title">
            Open-Source <span>Contributions</span>
          </h2>
          <p className="section-desc">
            Collaborating on production-grade systems, writing backend services, bootstrapping ML pipelines, writing robust security test suites, and resolving frontend bugs.
          </p>

          <div className="os-stats">
            {globalStats.map((stat, i) => (
              <div className="os-stat-card hoverable" key={i}>
                <div className="os-stat-num">{stat.num}</div>
                <div className="os-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="os-grid reveal" ref={gridRef}>
          {contributions.map(item => (
            <ContributionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
