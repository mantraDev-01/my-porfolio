import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className={'flex justify-center items-center flex-col space-y-20 min-h-screen '} >

        <div className={' h-15 w-30 border-b-1 border-[#ffAA00] items-center justify-center flex text-xl font-semibold text-[#ffAA00]'}>
          Projects
        </div>

        <div className={'flex flex-col lg:flex-row px-10 space-x-10 space-y-20'}>

          <div className={'w-full bg-radial-[at_25%_25%] from-gray-700 to-zinc-900 to-75% text-gray-400 p-7 rounded-xl space-y-5'}>

            <div className={'w-full'}>
                <img src={'/expense-tracker.png'} className={'rounded-xl'} />
            </div>

            <h1 className={'text-center text-lg font-bold my-4'}>Expense tracker</h1>

              <div>
                <p>Manage your money with ease — my Expense Tracker offers a clean, intuitive interface and lightning-fast data entry, so you can stay on top of your finances without the hassle.</p>
              </div>

              <div className={'flex items-center justify-center flex-wrap w-full space-x-1 text-[.8rem] my-2 text-[#ffAA00] font-mono font-semibold space-y-1'}>
              
              <p className={'px-2 '}>Full-Stack</p>
              <p className={'px-2 '}>Reactjs</p>
              <p className={'px-2 '}>MUI</p>
              <p className={'px-2 '}>Nodejs</p>
              <p className={'px-2 '}>Tailwind</p>
              <p className={'px-2 '}>Express</p>
              <p className={'px-2 '}>Mongodb</p>
              <p className={'px-2 '}>Jwt</p>
              
            </div>

          </div>

          <div className={'w-full bg-radial-[at_25%_25%] from-gray-700 to-zinc-900 to-75% text-gray-400 p-7 rounded-xl'}>

            <div className={'w-full'}>
                <img src={'/billiard-income-tracker.png'} className={'rounded-xl'} />
            </div>

            <h1 className={'text-center text-lg font-bold my-4'}>Billiard Income Tracker</h1>
            

              <div className={'my-3'}>
                <p>Billiard Income Tracker is a web-based system designed to monitor and manage daily and monthly income from hourly rentals, game-based fees, and custom pricing for a multi-table billiard hall.</p>
              </div>

              <div className={'flex items-center justify-center flex-wrap w-full space-x-1 text-[.8rem] my-2 text-[#ffAA00] font-mono font-semibold space-y-1'}>
              
              <p className={'px-2 '}>Full-Stack</p>
              <p className={'px-2 '}>Tailwind</p>
              <p className={'px-2 '}>Reactjs</p>
              <p className={'px-2 '}>Nodejs</p>
              <p className={'px-2 '}>Express</p>
              <p className={'px-2 '}>Mongodb</p>
              <p className={'px-2 '}>Rechart</p>

            </div>

          </div>

          <div className={'w-full bg-radial-[at_25%_25%] from-gray-700 to-zinc-900 to-75% text-gray-400 p-7 rounded-xl'}>

            <div className={'w-full'}>
                <img src={'/coffee-ordering-system.png'} className={'rounded-xl'} />
            </div>

            <h1 className={'text-center text-lg font-bold my-4'}>Coffee Ordering System</h1>

              <div className={'my-3'}>
                <p>Skip the lines and order with ease — our Coffee Ordering System delivers a smooth, intuitive experience where users can place orders, track statuses in real-time, and enjoy their brew without the wait.</p>
              </div>

              <div className={'flex items-center justify-center flex-wrap w-full space-x-1 text-[.8rem] my-2 text-[#ffAA00] font-mono font-semibold space-y-1'}>
              
              <p className={'px-2 '}>Full-Stack</p>
                <p className={'px-2 '}>Nodejs</p>
                <p className={'px-2 '}>Reactjs</p>
                <p className={'px-2 '}>Jwt</p>
                <p className={'px-2 '}>Express</p>
                <p className={'px-2 '}>Mongodb</p>
              

              </div>

              

          </div>

        </div>

      
          

    </div>
  )
}

export default Projects
