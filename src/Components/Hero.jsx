import React from 'react'
import Heroimage from '../assets/MUKESH.jpg'
import Typeeffect from './Typeeffect'

const Hero = () => {
    return (

        <div id='home' className='hero scroll-mt-24 bg-black text-white text-center py-16'>
            <div className='max-w-6xl mx-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6'>

                <div className='flex justify-center'>
                    <img src={Heroimage} alt="" className='mb-8 w-60 h-64 rounded-full  object-cover
                       animate-bounce'/>
                </div>
                <div className='text-center flex flex-col gap-2 md:text-left'>
                    <h1 className='text-4xl font-bold'>
                        I'm <span className='text'></span>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400
                           to-blue-500'><Typeeffect /></span>
                    </h1>
                    <p className='text-gray-300  md:text-lg'>I specialize in building modern and responsive web applications.
                        Passionate MERN Stack Developer with hands-on experience in building dynamic,
                        responsive web applications using MongoDB, Express.js, React, and Node.js. Skilled in creating RESTful APIs. Strong understanding of
                        frontend/backend development, version control, and deployment workflows.
                    </p>
                    <div className='mt-6'>
                        <a href="/MUKESH.pdf" download>
                            <button className='bg-red-400 rounded cursor-pointer p-1 text-2xl font-semibold'>Resume</button>
                   </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero