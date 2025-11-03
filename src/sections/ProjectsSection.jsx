
import { useEffect, useMemo, useRef, useState } from 'react'
import img1 from '../assets/img1.JPG'
import img2 from '../assets/img2.JPG'
import img3 from '../assets/img3.JPG'
import photo1 from '../assets/photo1.JPG'
import photo2 from '../assets/photo2.PNG'
import photo3 from '../assets/photo3.png'

import Calculator from '../assets/Calculator.png'


import { useMotionValueEvent, useScroll} from 'motion/react'
import { motion, AnimatePresence } from 'motion/react'
import { h3 } from 'motion/react-client'

const useIsMobile = (query  ="(max-width: 639px)") => {
  const [isMobile, setIsMobile] =useState(
    typeof window !== 'undefined' && window.matchMedia(query).matches
    /*ye jo h vo server side rendring me error through se bachayega aur 
      hame boolean value return karega*/
    
  )

  useEffect(() => {
    if (typeof window === 'undefined') return {/*ye bhi server side rendering ke liye hai*/}
    const mql = window.matchMedia(query) /*mql means media query list  cheak view port ka resize */
    const handler = (e) => setIsMobile(e.matches) /*jab bhi view port resize hoga to ye handler call hoga aur isMobile state ko update karega*/
    // console.log(mql)
    // console.log(handler)
    mql.addEventListener('change', handler)
    setIsMobile(mql.matches) /*initial value set karne ke liye*/
    return () => mql.removeEventListener('change', handler)
  }, [query])
  return isMobile
}


const ProjectsSection = () => {
  const isMobile = useIsMobile()
  const sceneRef = useRef(null)

  const projects = useMemo(
    () => [
      {
        title: "nk studio",
        link: "https://www.nk.studio/",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1, // use mobile or desktop image
      },
      {
        title: "Gamily",
        link: "https://gamilyapp.com/",
        bgColor: "#3884d3",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "Hungry Tiger",
        link: "https://www.eathungrytiger.com/",
        bgColor: "#dc9317",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile] // re-run only when `isMobile` changes
  );


  const {scrollYProgress} = useScroll(    // ye hame scroll ki progress dega 0 to 1 ke beech me
    {
      target: sceneRef,
      offset: ["start start", "end end"]
    }
  )

  const threshold = projects.map((_, index) => (index + 1) / projects.length) // [0.33, 0.66, 1] kitna scroll karna hai har project ke liye

  
  const [activeIndex, setActiveIndex] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = threshold.findIndex((t) => v < t)
    setActiveIndex(idx === -1 ? threshold.length -1 : idx)
  })

  const activeProject = projects[activeIndex]

  return (
    <section id="projects" ref={sceneRef} className="relative text-white "
    style={{
      height:`${projects.length*80}vh`,
      backgroundColor: activeProject.bgColor,
      transition : "background-color 400ms ease"
    }}
    >
      

    <div className=' sticky top-0 h-screen flex flex-col items-center justify-center'> 
      <h2 className={`text-3xl font-semibold z-10 text-center ${isMobile ? "mt-4" : "mt-5"}`}>
        My projects
      </h2>

    <div className={`relative w-full flex flex-1 items-center justify-center ${
      isMobile ? "-mt-4" : "mt-20"
    }`}>
      {projects.map((project, idx) => (
        <div key={project.title} className={`absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10"}`} 
        style={{width: "85%",maxWidth:"1200px"}} 
      >
      <AnimatePresence mode='wait'>
        {activeIndex === idx && (
          <motion.h3 key={project.title} 
          initial={{opacity:0, y:-30}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:30}}
          transition={{duration:0.5, ease:"easeOut"}}
          className={`block text-left text-[clamp(1rem,4vw,3rem)] text-white absolute sm:-top-20 sm:left-10 lg:left-12 sm:mb-0
            italic font-semibold ${isMobile ? "-mt-10" : ""}`
          }
          style={{zIndex:5,
            textAlign: "left"
          }}

          >{project.title}</motion.h3>
        )}
      </AnimatePresence>


        <div className={
  `relative w-full overflow-hidden bg-black/20 shadow-2xl " +
  "md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] " +
  (isMobile ? "mb-6 rounded-lg" : "mb-0 sm:mb-12 rounded-xl")
}
  h-[70vh] sm:h-[70vh]`}
  style={{zIndex: 10, transition: "box-shadow 250ms ease"}}
>
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
    style={{
      position: "relative",
      zIndex: 10,
      filter: "drop-shadow(0,16px 40px rgba(0,0,0,0.65))",
      transition: "filter 200ms ease"
    }}
    loading="lazy"
  />
  <div className="pointer-events-none absolute inset-0"
    style={{
      zIndex: 11,
      background: "linear-gradient(180deg, rgba(0,0,0,0.12) 0% , rgba(0,0,0,0.40) 40%)"
    }}
  />

</div>

<div className={`absolute  ${isMobile ? "bottom-10": "bottom-5"} `}>
      <a className='px-5 py-2 mt-2 font-bold rounded-lg bg-white text-black hover:bg-gray-100 transition-all' aria-label={`view project ${project.title}`} href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
    </div>

        </div>
      ))}
    </div>
    
    </div>
    </section>
  )
}

export default ProjectsSection