import React from 'react'
import skills from '../data/skills.json'

const Skills = () => {
    return (

        <div id='skills' className='skills scroll-mt-20 bg-[#141413] mt-10 py-6 text-white' >
            <h1 className=' text-5xl text-center mb-6 mt-8'>Skills</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    skills.map((data) => (
                        <div key={data.id} className='w-40 h-40 mx-10 flex flex-col gap-2 p-2 justify-center mt-6 items-center
                         bg-black border border-amber-400 transform transistion-transfrom duration-300 
                         hover:-translate-y-[4px] md:mx-30'>
                         <div>
                            <img src={`/${data.imageSrc}`} alt="" className='w-[100px]'/>
                            <h1 className='text-center mt-2 text-sm'>{data.title}</h1>
                         </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Skills