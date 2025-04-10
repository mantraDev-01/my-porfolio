import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {FaFacebook, FaInstagram, FaDiscord} from 'react-icons/fa'

const Hero = () => {
    return (
      <section id="home" className="min-h-130 flex mt-10 justify-center text-gray-800 py-30 px-3 sm:flex-row flex-col ">
        <div className="text-center space-y-2 pl-10">
          <p className="text-lg sm:text-2xl font-NotoSerif tracking-wide">HELLO! I'M</p>
          <h1 className="text-4xl sm:text-[3rem] font-bold">Roj Justiniani Villacampa</h1>
          <p className="text-xl text-gray-600">Full-Stack Web Developer</p>

          <div className={'flex flex-col'}>

          <div className={' flex justify-center items-center space-x-4'}>
            <a className={'text-2xl'} href="https://www.facebook.com/roj.justiniani.90/"><FaFacebook /></a>
            <a className={'text-2xl'} href="https://www.instagram.com/rojjj_dev/"><FaInstagram /></a>
            <a className={'text-2xl'} href="https://discord.com/users/eye_tea."><FaDiscord /></a>

          
          </div>

          <div className={'flex items-center justify-center my-5'}>
              <a
            href="/my-CV-resume.pdf"
            download
            className="bg-gray-900 text-gray-400 font-semibold px-4 py-2 rounded-lg w-[50%] hover:bg-blue-900 transition  "
          >
          Download CV
          </a>
          </div>

          

          </div>

        </div>

        
        <div className={'h-70 '}>
        <DotLottieReact
      src="/animation2.json"
      loop
      autoplay
    />
        </div>
      </section>
    );
  };
  

export default Hero
