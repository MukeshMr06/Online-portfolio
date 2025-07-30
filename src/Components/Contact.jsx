import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";

const Contact = () => {
    return (
        <div id='contact' className='contact scroll-mt-20 py-10'>
            <h1 className='text-center text-5xl'>Contact</h1>
            <div className='text-center  gap-4'>
                <h2 className='text-2xl mt-6'>Let's Talk</h2>
                <p className='w-1/2 mx-auto mt-6'>Thanks for stopping by i really appreciate your time.
                    If you'd like to connect, collaborate, or just say hello, I'm all ears.
                    Don't hesitate to reach out'd love to hear from you!</p>
            </div>
            <div className='flex justify-center gap-5 mt-5'>
                <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                    <LuInstagram size={35} className='hover:text-green-400' />
                </a>

                 <a href='https://mail.google.com/mail/u/0/#inbox' target='_blank' rel='noreferrer'>
                    <MdOutlineMail size={35} className='hover:text-green-400' />
                </a>
                 <a href='https://www.linkedin.com/feed/' target='_blank' rel='noreferrer'>
                    <FaLinkedinIn size={35} className='hover:text-green-400' />
                </a>
                <a href='https://github.com/' target='_blank' rel='noreferrer'>
                    <VscGithubAlt size={35} className='hover:text-green-400' />
                </a>
            </div>
        </div>
    )
}

export default Contact