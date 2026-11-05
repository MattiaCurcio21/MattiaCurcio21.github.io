import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile } from '../data/profile'
import { emailConfig } from '../data/emailConfig'
import './ContactForm.css'

function ContactForm({ onClose }) {
  const [fromEmail, setFromEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const isConfigured =
    emailConfig.serviceId !== 'YOUR_SERVICE_ID' &&
    emailConfig.templateId !== 'YOUR_TEMPLATE_ID' &&
    emailConfig.publicKey !== 'YOUR_PUBLIC_KEY'

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isConfigured) {
      setStatus('error')
      setErrorMsg('Invio email non ancora configurato (manca la configurazione EmailJS).')
      return
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          subject,
          message,
          from_email: fromEmail,
          to_email: profile.email,
        },
        { publicKey: emailConfig.publicKey }
      )
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err?.text || 'Si è verificato un errore durante l\'invio. Riprova più tardi.')
    }
  }

  return (
    <div className="contact-modal-backdrop" onClick={onClose}>
      <div className="contact-modal glass" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Chiudi">
          ×
        </button>

        {status === 'success' ? (
          <div className="contact-form-success">
            <h3>Messaggio inviato!</h3>
            <p>Grazie, ti risponderò il prima possibile.</p>
            <button className="btn btn-primary" onClick={onClose}>
              Chiudi
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Scrivimi un'email</h3>
            <p className="contact-form-sub">Il messaggio arriverà direttamente a {profile.email}</p>

            <label className="contact-field">
              <span>La tua email</span>
              <input
                type="email"
                required
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                placeholder="nome@esempio.com"
              />
            </label>

            <label className="contact-field">
              <span>Oggetto</span>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Es. Proposta di collaborazione"
              />
            </label>

            <label className="contact-field">
              <span>Messaggio</span>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Scrivi qui il tuo messaggio..."
              />
            </label>

            {status === 'error' && <p className="contact-form-error">{errorMsg}</p>}

            <button className="btn btn-primary contact-form-submit" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Invio in corso...' : 'Invia'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactForm
