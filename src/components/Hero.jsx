import React from 'react'

export default function Hero() {
  return (
    <section id="info" className="hero">
      <div className="container hero-center">
        <h2 className="hero-title">Vignesh Portfolio</h2>
        <p className="hero-sub">
          Hi, I'm Vignesh — an aspiring software developer passionate about building impactful digital solutions. I enjoy working on real-world projects, exploring technologies, and continuously learning to improve my craft. My personal projects reflect my interest in combining problem-solving with clean, user-focused implementation.
        </p>
        <div className="hero-ctas">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
