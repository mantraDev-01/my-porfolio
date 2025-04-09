import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactForm from './components/ContactMe'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className={'bg-[#121212]'}>
     <Navbar />
     <Hero />
     <AboutMe />
     <Projects />
     <Skills />
     <ContactForm />
     <Footer />
    </div>
  )
}

export default App
