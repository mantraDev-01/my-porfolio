import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactForm from './components/ContactMe'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {
  
  return (
    <div className={'bg-[#121212] flex justify-center'}>
      <div className={'sm:w-[80%] w-screen'}> 
        <Hero />
     <AboutMe />
     <Experience />
     <Projects />
     <Skills />
     <ContactForm />
     <Footer />
      </div>
  
     
    </div>
  )
}

export default App
