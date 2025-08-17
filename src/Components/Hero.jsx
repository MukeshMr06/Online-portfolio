import React from 'react'
import Heroimage from '../assets/MUKESH.jpg'
import Typeeffect from './Typeeffect'

const Hero = () => {
    return (

        <div id='home' className='hero scroll-mt-24 bg-black text-white text-center py-16'>
            <div className=' grid grid-cols-1 md:grid-cols-2 md:mx-10 md:items-center '>

                <div className='flex justify-center'>
                    <img src={Heroimage} alt="" className='mb-8 w-[320px] h-[320px] rounded-xl' />
                </div>
                <div className='text-center flex flex-col gap-2 md:text-left'>
                    <h1 className='text-4xl font-bold'>
                        I'm <span className='text'></span>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400
                           to-blue-500'><Typeeffect /></span>
                    </h1>
                    <p className='text-gray-300  md:text-lg'>Enthusiastic Frontend Developer fresher with skills in HTML, CSS, Tailwind CSS, JavaScript, and React.
                        Proficient in using Git/GitHub for version control and deploying projects on Firebase and Vercel.
                        Passionate about creating responsive, user-friendly, and efficient web applications.
                    </p>
                    <div className='mt-6'>
                        <a href="/Mukesh-Resume.pdf" download>
                            <button className='bg-red-400 rounded cursor-pointer p-1 text-2xl font-semibold'>Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero