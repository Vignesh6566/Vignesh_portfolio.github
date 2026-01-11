import React, { useState } from 'react'
import './App.css'
import './styles/global.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Menu from './components/Menu.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('info')

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId)
    // Scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Menu onSectionChange={handleSectionChange} />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
