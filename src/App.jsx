
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import About from './sections/About'
import Home from './sections/Home'
import ProjectsSection from './sections/ProjectsSection'
import { Skill } from './sections/Skill'

const App = () => {
  return (
    <div className='bg-black text-white w-full h-screen'>
      <CustomCursor />
      <Header />
      <Home />
      <About />
      <Skill />
      <ProjectsSection />
    </div>
  )
}

export default App