import React from 'react'
import Navebar from './Components/Navebar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Project from './Components/Project'

const App = () => {
  return (
    <div>
      <Navebar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  )
}

export default App