import { profile } from '../data/profile'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <span className="pill hero-badge">
        <span className="hero-badge-dot" />
        Disponibile per tirocini, lavoro e progetti
      </span>

      <h1>
        Ciao, sono <span className="gradient-text">{profile.name}</span>
      </h1>
      <p className="hero-role">{profile.role}</p>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          Guarda i progetti
        </a>
        <a className="btn btn-secondary" href="#contact">
          Contattami
        </a>
        <a className="btn btn-secondary" href={profile.cvUrl} download>
          Scarica CV
        </a>
      </div>
    </section>
  )
}

export default Hero
