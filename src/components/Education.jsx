import { education } from '../data/education'
import './Education.css'

function Education() {
  return (
    <section id="education" className="section education-section">
      <span className="section-kicker">Percorso</span>
      <h2>Percorso di studi</h2>
      <ol className="timeline">
        {education.map((item) => (
          <li key={item.title} className={item.current ? 'current' : ''}>
            <div className="timeline-marker" />
            <div className="timeline-content glass glass-hover">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="timeline-institution">{item.institution}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Education
