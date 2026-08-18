import Navbar from './components/header/Navbar'
import Hero from './components/hero/Hero'
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import ProjectsSection from "./components/projects/ProjectsSection";


import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero id="home" />
      <About id="about" />
      <Education id="education" />
      <Experience id="experience" />
      <ProjectsSection id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
    </>
  )
}

export default App
