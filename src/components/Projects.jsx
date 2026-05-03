import React from 'react'
import useReveal from '../hooks/useReveal'
import projects from '../data/projects'
import '../styles/Projects.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card hoverable">
      <div className="project-preview">
        <div className="project-preview-bg" />
        <div className="project-preview-grid" />

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="project-preview-image"
        />

        {project.badge && (
          <div className={`project-accent ${project.badge}`}>
            {project.badgeText}
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-title">{project.title}</div>
        <div className="project-subtitle">// {project.subtitle}</div>
        <p className="project-desc">{project.description}</p>

        <div className="project-features">
          <div className="project-features-title">Key Features</div>
          <ul className="feature-list">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="project-stack">
          {project.stack.map(t => (
            <span className="tech-badge hoverable" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            className="project-link demo hoverable"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
          </a>

          <a
            className="project-link github hoverable"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" /> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="projects" id="projects">
      <div className="grid-bg" />
      <div className="glow-orb orb1" style={{ opacity: 0.4 }} />

      <div className="projects-inner">
        <div className="reveal" ref={headerRef}>
          <div className="section-tag">Work</div>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-desc">
            Real-world applications built with purpose — each solving a distinct
            problem.
          </p>
        </div>

        <div className="projects-grid reveal" ref={gridRef}>
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}