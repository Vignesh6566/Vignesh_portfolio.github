import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const [particles, setParticles] = useState([])
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }))
    setParticles(newParticles)
  }, [])

  const roles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Tech Innovator"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4
      }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 140, damping: 18 }
    }
  }

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.8 }
    }
  }

  return (
    <section id="info" className="hero reveal">
      
      <div className="hero-particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="hero-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="hero-background"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-shape bg-shape-1"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="bg-shape bg-shape-2"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="container hero-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.h2 className="hero-subtitle" variants={itemVariants}>
          Hello, I'm
        </motion.h2>

        <motion.h1 className="hero-name" variants={itemVariants}>
          VIGNESH NATARAJAN
        </motion.h1>

        <motion.h2 className="hero-title" variants={itemVariants}>
          {roles[0]}
        </motion.h2>

        <motion.p className="hero-sub" variants={itemVariants}>
          I build modern, scalable applications with clean UI and efficient system architecture.
          Passionate about leveraging emerging technologies, especially AI, to turn ideas into
          real-world solutions.
        </motion.p>

        <motion.div className="hero-ctas" variants={itemVariants}>
          <motion.a
            className="btn primary"
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>

          <motion.a
            className="btn"
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

    </section>
  )
}
