import React from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {


  useEffect(() => {
    
    gsap.fromTo(
      '.about',
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  
    
    gsap.utils.toArray('.about-me-pl').forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  
   
    gsap.utils.toArray('.about-me-pr').forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);
  
  


      

      

  return (
    <div id='aboutMe' className={'min-h-screen flex justify-center items-center flex-col space-y-10'}>

      <div className={'about h-15 w-30 border-b-1 border-[#ffAA00] items-center justify-center flex text-xl font-semibold text-[#ffAA00]'}>
        About Me
      </div>

        <div className={'text-gray-400 px-15 md:px-65 lg:px-85 space-y-5'}>
        <p className={'about-me-pl'}>Hi, I’m Roj Justiniani Villacampa, a passionate Full-Stack Web Developer with a love for building intuitive,
         scalable, and user-centered applications.</p>

          <p className={'about-me-pr'}>I’m always excited about solving real-world problems through technology and continuously improving my skills in both front-end and back-end development.</p>
           <p className={'about-me-pl'}>Whether it’s crafting a smooth user interface with React or building a powerful backend with Node.js,
            I thrive on learning new technologies and pushing the boundaries of what’s possible.</p>
        </div>

        <DotLottieReact
      src="/animation1.json"
      loop
      autoplay
    />

    </div>
  )
}

export default AboutMe
