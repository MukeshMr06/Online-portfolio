import React from 'react'
import Education from './Education'

const Custom = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>)

const senior = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
</svg>
)

const high = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
</svg>
)

const About = () => {
  return (
    <div id='about' className='scroll-mt-20 about  bg-[#141413] text-white py-7'>

      <h1 className='text-center text-2xl hover:text-red-400 duration-300  md:text-5xl'>About</h1>

     <div className="flex flex-col items-center text-center sm:mx-6 md:flex-row md:text-left md:items-center md:justify-around mt-6 p-4 rounded-lg shadow-md">
  <p className="text-base sm:text-lg md:w-1/2 md:text-2xl leading-relaxed">
    I am a Frontend Developer with hands-on experience in HTML, CSS, JavaScript, and React.
    I specialize in building responsive, user-friendly web interfaces and have strong version control skills using Git and GitHub.
    I'm passionate about creating clean, efficient code and continuously learning modern frontend tools and best practices.
  </p>
  
  <img
    src="/about.gif" 
    alt="About me" className="mt-4 mb-6 md:mb-0 md:mt-0 md:h-[420px] rounded-lg shadow-lg"
  />
</div>

      <h1 className='text-center text-5xl hover:text-red-400 duration-300 '>Education</h1>

      <div className='flex flex-col text-sm gap-4 items-center mt-12 md:flex-row justify-center md:gap-10'>
        <Education College="St. Joseph's College (Autonomous)" degree="B.Sc in Computer Science" year="June 2021 - May 2024" icon={Custom} />
        <Education College="E.R.Higher Secondary School" degree="Senior Secondary School" year="June 2019 - April 2021" icon={senior} />
        <Education College="Sri Vignesh Vidayalya (CBSE)" degree="Secondary School" year="June 2018- March 2019" icon={high} />
      </div>
    </div>
  )
}

export default About