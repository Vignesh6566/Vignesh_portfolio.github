import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Footer({ onSectionChange }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="footer-quote"
        >
          <h3>Learn. Build. Repeat.</h3>
          <p>Thanks for visiting my portfolio Designed & Developed by Vignesh with Love ♥</p>
        </motion.div>
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="mouse-follower"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 20px rgba(0,255,136,0.5)',
          }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.button>
      )}
    </footer>
  )
}
