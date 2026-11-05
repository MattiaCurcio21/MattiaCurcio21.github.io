import { projects } from '../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <span className="section-kicker">Portfolio</span>
      <h2>Progetti</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card glass glass-hover" key={project.title}>
            <span className="pill project-type">{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {project.link ? (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel} →
              </a>
            ) : (
              <span className="project-link disabled">{project.linkLabel}</span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
