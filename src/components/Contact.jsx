import { useState } from 'react'
import { profile } from '../data/profile'
import ContactForm from './ContactForm'
import './Contact.css'

function Contact() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-glow" />
      <span className="section-kicker">Parliamone</span>
      <h2>Contatti</h2>
      <p className="contact-intro">
        Hai un progetto interessante o vuoi semplicemente scambiare due parole? Scrivimi.
      </p>
      <div className="contact-links">
        <button className="btn btn-primary" onClick={() => setFormOpen(true)}>
          Scrivimi un'email
        </button>
        <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <p className="contact-email-fallback">
        Oppure scrivimi direttamente a <span className="contact-email">{profile.email}</span>
      </p>
      <p className="contact-footer">© {new Date().getFullYear()} {profile.name}</p>

      {formOpen && <ContactForm onClose={() => setFormOpen(false)} />}
    </section>
  )
}

export default Contact
