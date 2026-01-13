import React, { useState, useEffect } from 'react'
import './App.css'
import './styles/global.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import AutoReveal from './components/AutoReveal.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('info')
  const [showResume, setShowResume] = useState(false)

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId)
    // Scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const sections = ['info', 'about', 'skills', 'projects', 'contact']
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleResumeClick = () => {
    setShowResume(true)
  }

  const closeResume = () => {
    setShowResume(false)
  }

  return (
    <div className="app">
      <Navbar onSectionChange={handleSectionChange} onResumeClick={handleResumeClick} activeSection={activeSection} />
      <AutoReveal />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
      <Footer onSectionChange={handleSectionChange} />
      {showResume && (
        <div className="resume-modal">
          <div className="resume-content">
            <button className="resume-close" onClick={closeResume}>×</button>
            <img src="/resume.jpg" alt="Resume" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
