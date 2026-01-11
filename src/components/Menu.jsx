import React, { useState } from 'react'

export default function Menu({ onSectionChange }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('info')

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId)
    setOpen(false) // Close menu after selection
    if (onSectionChange) {
      onSectionChange(sectionId)
    }
  }

  return (
    <>
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className={`menu-button ${open ? 'open' : ''}`}
        onClick={() => setOpen((s) => !s)}
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>

      {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}

      <aside className={`side-menu ${open ? 'open' : ''}`} role="navigation" aria-hidden={!open}>
        <nav className="side-nav">
          <a
            href="#info"
            className={activeSection === 'info' ? 'active' : ''}
            onClick={() => handleSectionClick('info')}
          >
            Info
          </a>
          <hr />
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleSectionClick('about')}
          >
            About
          </a>
          <hr />
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleSectionClick('projects')}
          >
            Projects
          </a>
          <hr />
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleSectionClick('contact')}
          >
            Contact
          </a>
        </nav>
      </aside>
    </>
  )
}
