import React from 'react'

const Navebar = () => {
  return (
    <div className='bg-black text-white px-2 sticky top-0 z-10 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Mukesh</h1>
            <div className='space-x-6 md:text-2xl'>
             
                <a href="#home" className='relative group hover:text-gray-400'>Home
                  <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                 <a href="#about" className='relative group hover:text-gray-400'>About
                  <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                 <a href="#project" className='relative group hover:text-gray-400'>Project
                  <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#skills" className='relative group hover:text-gray-400'>Skills
                  <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
                 <a href="#contact" className='relative group hover:text-gray-400'>Contact
                  <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-500 transition-all duration-300 group-hover:w-full'></span>
                </a>

            </div>
        </div>
    </div>
  )
}

export default Navebar