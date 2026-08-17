import Navbar from './components/header/Navbar'
import Hero from './components/hero/Hero'
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';


import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
    </>
  )
}

export default App
