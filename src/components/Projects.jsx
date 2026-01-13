import React, { useState } from 'react'
import { motion } from 'framer-motion'
import projectsData from '../data/projects.json'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section id="projects" className="projects container reveal">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Real-world applications I've built
      </motion.p>
      <motion.div 
        className="project-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectsData.map((p) => (
          <motion.article
            key={p.id}
            className="project"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={p.image}
              alt={p.title}
              className="project-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <h4>{p.title}</h4>
            <p>{p.summary}</p>
            <div className="project-tech">
              {p.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="project-actions">
              <motion.button
                onClick={() => setSelected(p)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Details
              </motion.button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
