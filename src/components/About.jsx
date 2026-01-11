import React from 'react'

export default function About() {
  return (
    <section id="about" className="about container">
      <h3>About Me</h3>
      <p>
        I am a motivated developer with a strong interest in full-stack development and data-driven applications. I enjoy taking ideas from concept to working prototypes and learning new tools along the way. When I work on projects, I focus on clarity, simple design, and usability.
      </p>
      <p>
        Beyond coding, I like exploring emerging tech, contributing to problem-solving activities, and enhancing my development skills through hands-on projects and collaborations.
      </p>
      <div className="project-highlights">
        <h4>Project Highlights:</h4>
        <ul>
          <li><strong>Heart Disease Prediction</strong> — A predictive tool that provides risk awareness based on health inputs.</li>
          <li><strong>StartupKart</strong> — A discovery platform to explore and share startup-focused resources.</li>
        </ul>
      </div>
    </section>
  )
}
