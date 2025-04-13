import React from 'react'

const Skills = () => {
  return (
    <div className="flex flex-col items-center space-y-10 my-50">
      <div className="about h-15 w-30 border-b border-[#ffAA00] flex items-center justify-center text-xl font-semibold text-[#ffAA00]">
        Skills
      </div>

      <div id='skills' className="min-h-150 flex flex-wrap justify-center gap-8 px-4 md:px-40 lg:px-90 sm:px-30 w-full">
        
        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/react.jpg" alt="React" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">REACT.JS</h1>
        </div>

       
        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/nodejs.jpg" alt="Node.js" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">NODE.JS</h1>
        </div>

        
        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/express.jpg" alt="Express.js" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">EXPRESS.JS</h1>
        </div>

        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/mongodb.jpg" alt="MongoDB" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">MONGODB</h1>
        </div>

        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/tailwind.jpg" alt="Tailwind" className="w-full h-20 object-cover rounded" />
          <h1 className=" font-semibold">TAILWIND</h1>
        </div>

        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/js.jpg" alt="Javascript" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">JAVASCRIPT</h1>
        </div>

        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/html1.jpg" alt="Html" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">HTML</h1>
        </div>

        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/css3.jpg" alt="Css" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">CSS</h1>
        </div>

        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/postman.jpg" alt="Postman" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">POSTMAN</h1>
        </div>

        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/php.jpg" alt="Php" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">PHP</h1>
        </div>

        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/mysql.jpg" alt="Mysql" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">MYSQL</h1>
        </div>

        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/Git.jpg" alt="Git" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">GIT</h1>
        </div>

        <div className="bg-white p-6 flex flex-col items-center sm:w-30 sm:h-38 w-25 h-33 shadow-md rounded-lg">
          <img src="/github.jpg" alt="Github" className="w-full h-24 object-cover rounded" />
          <h1 className="mt-4 font-semibold">GITHUB</h1>
        </div>

        
      </div>
    </div>
  )
}

export default Skills
