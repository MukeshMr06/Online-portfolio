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
                    <p className='text-gray-300  md:text-lg'>Enthusiastic FullStack Developer (Fresher) with hands-on experience in React.js, Node.js, Express.js, SQL, HTML, CSS, Tailwind CSS, and JavaScript. Proficient in Git/GitHub for version control and deploying full-stack projects on Vercel and aaPanel.
                         Experienced in building real-time applications with JWT authentication, API integration, WebSocket live data, and responsive user interfaces. Passionate about delivering efficient, user-friendly, and high-quality web solutions.
                    </p>
                    <div className='mt-6'>
                        <a href="/Mukesh_Resume.pdf" download>
                            <button className='bg-red-400 rounded cursor-pointer px-2 py-1 text-2xl font-semibold'>Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero     