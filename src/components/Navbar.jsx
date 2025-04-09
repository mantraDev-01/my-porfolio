import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className={' h-20 flex items-center justify-center'}>
        
      <ul className={'flex flex-row justify-center items-center bg-gray-800 px-5 py-2 space-x-5 rounded-xl font-semibold sm:text-sm text-[.5rem] fixed'}>
        <Link to="home" smooth={true} duration={500} className={'cursor-pointer'}>Home</Link>
        <Link to="aboutMe" smooth={true} duration={500} className={'cursor-pointer'}>About Me</Link>
        <Link to="projects" smooth={true} duration={500} className={'cursor-pointer'}>Projects</Link>
        <Link to="skills" smooth={true} duration={500} className={'cursor-pointer'}>Skills</Link>
        <Link to="contact" smooth={true} duration={500} className={'cursor-pointer'}>Contact Me</Link>
      
      </ul>
    </div>
  )
}

export default Navbar
