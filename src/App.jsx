import Hero from './components/Hero'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
