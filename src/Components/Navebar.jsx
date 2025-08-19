import React, { useState } from 'react'
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Navebar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='scroll-smooth px-6 sticky top-0 z-50 '>
      <div className='navebar bg-gray-400 text-black mt-4 items-center w-full  '>
        <div className='container py-2 flex justify-between items-center px-1 md:px-4'>
          <h1 className='text-2xl font-bold cursor-pointer'>Mukesh</h1>

          <div className='space-x-6 hidden md:text-2xl md:block'>
            <a href="#home" className='relative group hover:text-white'>Home
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#about" className='relative group  hover:text-white'>About
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#project" className='relative group  hover:text-white'>Project
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#skills" className='relative group  hover:text-white'>Skills
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#contact" className='relative group  hover:text-white'>Contact
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
          </div>
        
          <div className='md:hidden'>
            {open ? (
              <RiCloseLine onClick={() => setOpen(false)} className='text-3xl cursor-pointer' />
            ) : (< RiMenu3Fill onClick={() => setOpen(true)} className='text-3xl cursor-pointer' />)
            }

          </div>

          {/* Mobile view */}

          <div className={`fixed top-0 right-0 w-[300px] h-screen bg-black flex flex-col
  text-white items-center space-y-6 py-6 text-xl md:hidden transform transition-transform duration-500 ease-in-out
  ${open ? "translate-x-0" : "translate-x-full"}`}>
            <button><RiCloseLine onClick={() => setOpen(false)} className='cursor-pointer absolute top-6 right-4' /></button>
            <a href="#home" className='hover:text-gray-300' onClick={() => setOpen(false)}>Home</a>
            <a href="#about" className='hover:text-gray-300' onClick={() => setOpen(false)}>About</a>
            <a href="#project" className='hover:text-gray-300' onClick={() => setOpen(false)}>Project</a>
            <a href="#skills" className='hover:text-gray-300' onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" className='hover:text-gray-300' onClick={() => setOpen(false)}>Contact</a>
          </div>
          
        </div>
      </div>
    </div>


  )
}

export default Navebar