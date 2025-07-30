import React from 'react'
import skills from '../data/skills.json'

const Skills = () => {
    return (

        <div className='bg-black text-white' >
            <h1 className=' text-5xl text-center mb-6 mt-8'>Skills</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    skills.map((data) => (
                        <div key={data.id} className='mx-10 flex flex-col gap-2 p-2 justify-center mt-6 items-center
                         bg-black border border-amber-400 transform transistion-transfrom duration-300 
                         hover:-translate-y-[4px]'>
                            <img src={`/${data.imageSrc}`} alt="" className='w-[100px]'/>
                            <h1>{data.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Skills