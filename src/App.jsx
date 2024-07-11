import React from 'react'
import Scroll from './Scroll'
import Navbar from './components/navbar'
import About from './pages/about'
import Contact from './pages/contact'
import Skills from './pages/skills'
import Project from './pages/project'
import Footer from './components/footer'
import Home from './layout/home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
    <Router>
    <Scroll/>
    <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="skills" element={<Skills/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='project' element={<Project/>}/>
              <Route path='error' element={<Error/>}/>
            </Routes>
    <Footer/>
    </Router>


    </div>
  )
}

export default App