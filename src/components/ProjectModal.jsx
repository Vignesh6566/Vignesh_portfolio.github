import React from 'react'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  const detailsArray = project.details ? project.details.split('\n\n').filter(item => item.trim()) : []

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h4>{project.title}</h4>
        <p className="modal-summary">{project.summary}</p>
        {detailsArray.length > 0 && (
          <div className="modal-details">
            <ul>
              {detailsArray.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
