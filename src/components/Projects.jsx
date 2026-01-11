import React, { useState } from 'react'
import projectsData from '../data/projects.json'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="projects container">
      <h3>Selected Projects</h3>
      <div className="project-list">
        {projectsData.map((p) => (
          <article key={p.id} className="project">
            <h4>{p.title}</h4>
            <p>{p.summary}</p>
            <div className="project-actions">
              <button onClick={() => setSelected(p)}>Details</button>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
