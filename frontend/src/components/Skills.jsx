import React from 'react'

const Skills = () => {

  const frontend = ['Javascript', 'React', 'Vite', 'Tailwind CSS', 'React Native',];
  const backend = ['Node.js', 'Express.js','MongoDB','JWT','PHP', 'MySQL'];
  const developerTools = ['Git', 'Github', 'VS Code', 'Postman' ]

  return (
    <div className="flex flex-col items-center space-y-10 my-50">
      <div className="about h-15 w-30 border-b border-[#ffAA00] flex items-center justify-center text-xl font-semibold text-[#ffAA00]">
        Tech Stack
      </div>

      <div id='skills' className="min-h-85 w-[90%] sm:w-[80%] md:w-[60%] flex flex-col   bg-radial-[at_25%_25%] from-white-700 to-zinc-900 to-75% rounded-xl p-8 gap-6">
        
      <div className={'flex flex-col gap-3'}>

        <p className='font-bold text-white'>Frontend</p>

        <div className={'flex flex-row gap-3 text-gray-400 max-w-screen flex-wrap'}>
            {frontend.map((tech, i) => {
            return(
              <p key={i} className={'border-1 px-auto flex items-center justify-center px-4 rounded-lg'}>{tech}</p>
            )
          })}
        </div>
        
      </div>

      <div className={'flex flex-col gap-3'}>

        <p className='font-bold text-white'>Backend</p>

        <div className={'flex flex-row gap-3 text-gray-400 max-w-screen flex-wrap'}>
            {backend.map((tech, i) => {
            return(
              <p key={i} className={'border-1 px-auto flex items-center justify-center px-2 rounded-lg'}>{tech}</p>
            )
          })}
        </div>
        
      </div>

      <div className={'flex flex-col gap-3'}>

        <p className='font-bold text-white'>Developer Tools</p>

        <div className={'flex flex-row gap-3 text-gray-400 max-w-screen flex-wrap'}>
            {developerTools.map((tech, i) => {
            return(
              <p key={i} className={'border-1 px-auto flex items-center justify-center px-2 rounded-lg'}>{tech}</p>
            )
          })}
        </div>
        
      </div>

        
      </div>
    </div>
  )
}

export default Skills
