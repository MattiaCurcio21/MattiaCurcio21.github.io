import { profile } from '../data/profile'
import './About.css'

function About() {
  return (
    <section id="about" className="section about-section">
      <span className="section-kicker">Chi sono</span>
      <h2>Un po' di me</h2>
      <div className="about-content">
        <div className="about-bio">
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <ul className="about-highlights">
          {profile.highlights.map((item) => (
            <li className="glass glass-hover" key={item.label}>
              <span className="highlight-label">{item.label}</span>
              <span className="highlight-value">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
