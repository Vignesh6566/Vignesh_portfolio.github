import React, { useState } from 'react'

export default function Contact() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDetails = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-toggle" onClick={toggleDetails} style={{ cursor: 'pointer' }}>
        <h3>Contact</h3>
        <span className="toggle-icon">{isExpanded ? '−' : '+'}</span>
      </div>
      {isExpanded && (
        <div className="contact-details">
          <p>Feel free to reach out for collaboration, opportunities, or tech discussions. I'm always open to connecting and learning.</p>
          <div className="contact-info">
            <p><strong>📩 Email:</strong> <a href="mailto:vigneshnavaneethan342@gmail.com">vigneshnavaneethan342@gmail.com</a></p>
            <p><strong>🔗 LinkedIn:</strong> <a href="https://linkedin.com/in/vignesh-natarajan-554434289" target="_blank" rel="noopener noreferrer">linkedin.com/in/vignesh-natarajan-554434289</a></p>
            <p><strong>🔗 GitHub:</strong> <a href="https://github.com/Vignesh6566" target="_blank" rel="noopener noreferrer">github.com/Vignesh6566</a></p>
            <p><strong>📱 Phone:</strong> <a href="tel:+919345576552">+91 9345576552</a></p>
          </div>
        </div>
      )}
    </section>
  )
}
