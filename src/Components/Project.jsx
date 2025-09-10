import React from 'react'
import project from '../data/project.json'

const Project = () => {
    return (
        <div id='project' className='scroll-mt-20 project py-10'>
            <h1 className='text-5xl text-center py-10 hover:text-red-400 duration-500'>Project</h1>
            <div className='p-3'>
                {
                    project.map((data, index) => (
                        <div className={` justify-around gap-4 mt-4  items-center ${index % 2 == 0 ? 'flex-row-reverse' : 'flex-row'} md:flex  gap-10 mb-16`} key={data.id}>
                            <div className='w-[400px] h-[250px]  relative flex justify-center items-center group md:w-[600px] md:h-[250px]'>
                                <a href={data.link} target='_blank' rel='noreferrer' className='sm:w-full sm:h-full flex justify-center items-center md:w-full h-full'>
                                    <img src={`/${data.imageSrc}`} alt="" className='object-contain w-full h-full transition-all duration-300 hover:opacity-75' />
                                    <div className=''>
                                        <p className='text-white text-lg'></p>
                                    </div>
                                </a>
                            </div>

                            <div className='w-90 flex flex-col gap-4'>
                                <h1 className='text-2xl md:text-3xl'>{data.title}</h1>
                                <p className='md:block'>{data.para}</p>
                                <p className='text-sm text-red-400 md:text-xl'>{data.language}</p>
                                <ul>
                                    <li className='flex gap-3'>
                                        <a href={data.link} target='_blank' rel='noreferrer'
                                            className='p-1 hover:bg-orange-500 text-white cursor-pointer'>Live site</a>
                                        <a href={data.git} target='_blank' rel='noreferrer'
                                            className='p-1 hover:bg-orange-400 text-white cursor-pointer'>Git hub</a>
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