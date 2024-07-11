import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../pages/header'
import Skills from '../../pages/skills'
import Experience from '../../pages/experience'
import About from '../../pages/about'
import Project from '../../pages/project'
import Contact from '../../pages/contact'

function Home() {
  return (
    <div>
      <Header/>
      <Skills/>
      <Experience/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home