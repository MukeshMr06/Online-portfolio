import React from 'react'
import project from '../data/project.json'

const Project = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mt-5'>Project</h1>
                <div className='mx-10'>
                    {
                        project.map((data, index) => (
                            <div className={`mt-10 flex justify-around gap-10  items-center ${index % 2 == 0 ? 'flex-row-reverse' : 'flex-row'}`} key={data.id}>
                                <div className='w-[700px] h-[250px] relative flex justify-center items-center group md:w-[500px] md:h-[250px]'>
                                    <a href={data.link} target='_blank' rel='noreferrer'  className='w-full h-full flex justify-center items-center'>
                                        <img src={`/${data.imageSrc}`} alt="" className='object-contain w-full h-full transition-all duration-300' />
                                        <div className=''>
                                            <p className='text-white text-lg'></p>
                                        </div>
                                    </a>
                                </div>

                                <div className='w-90 flex flex-col gap-2'>
                                    <h1 className='md:text-3xl'>{data.title}</h1>
                                    <p className='hidden md:block'>{data.para}</p>
                                    <p className='text-sm md:bg-gray-500 md:text-xl w-fit text-white rounded'>{data.language}</p>
                                    <ul>
                                        <li className='flex gap-3'>
                                            <a href={data.link} target='_blank' rel='noreferrer'
                                            className=' hover:text-green-400 cursor-pointer'>Live site</a>
                                            <a href={data.git} target='_blank' rel='noreferrer'
                                            className='hover:text-green-400 cursor-pointer'>Git hub</a>   
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    )
}

export default Project