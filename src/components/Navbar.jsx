import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#about', label: 'Chi sono' },
  { href: '#education', label: 'Percorso' },
  { href: '#skills', label: 'Competenze' },
  { href: '#projects', label: 'Progetti' },
  { href: '#contact', label: 'Contatti' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-inner glass">
        <a href="#hero" className="navbar-logo gradient-text" onClick={() => setOpen(false)}>
          MC
        </a>
        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="navbar-toggle"
          aria-label="Apri il menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
