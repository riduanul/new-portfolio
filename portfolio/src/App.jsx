import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import Certification from './components/Certification'
import Volunteer from './components/Volunteer'
function App() {

  return (
  
      <div className='bg-[#0d1224]'>
        <Navbar />
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Project/>
        <Certification/>
        <Volunteer/>
        <Blogs/>
        <Contact/>
        <Footer/>
      </div>
      

  )
}

export default App
