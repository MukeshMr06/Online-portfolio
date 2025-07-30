import React from 'react'

const Navebar = () => {
  return (
    <div className='scroll-smooth px-6 sticky top-0 z-50 '>
      <div className='navebar bg-gray-400 text-black mt-4 items-center mx-2 md:mx-10 '>
        <div className='container py-2 flex justify-between items-center px-1 md:px-4'>
          <h1 className='text-2xl font-bold cursor-pointer'>Mukesh</h1>

          <div className='space-x-6 md:text-2xl'>
            <a href="#home" className='relative group hover:text-white'>Home
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#about" className='relative group hover:text-white'>About
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#project" className='relative group hover:text-white'>Project
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#skills" className='relative group hover:text-white'>Skills
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#contact" className='relative group hover:text-white'>Contact
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Navebar