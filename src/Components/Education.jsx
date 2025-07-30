import React from 'react'

const Education = ({College,degree,year,icon}) => {
  return (
    <>
    <div className='bg-white text-black w-80 h-40 font-semibold text-center p-3 flex flex-col gap-2
         transform transistion-transfrom duration-300 hover:-translate-y-[4px]'>
       
          <div className='flex justify-center'>
           {icon}
          </div >

          <h1>{College}</h1>
          <p>{degree}</p>
          <p>{year}</p>
     
        </div>
    </>
  )
}

export default Education