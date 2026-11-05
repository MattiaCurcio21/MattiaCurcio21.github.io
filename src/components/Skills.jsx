import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/skills'
import './Skills.css'

function Skills() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <span className="section-kicker">Stack</span>
      <h2>Competenze tecniche</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group glass glass-hover" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item, i) => (
                <li key={item.name}>
                  <div className="skill-row">
                    <span>{item.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: visible ? `${item.level}%` : '0%',
                        transitionDelay: visible ? `${i * 80}ms` : '0ms',
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
