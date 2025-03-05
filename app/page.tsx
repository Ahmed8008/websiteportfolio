import Intro from "./components/Intro";
import SectionDivider from "./components/SectionDivider";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/expericence";
import Myprojects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    
    
   
    <About />
    <div>
    <h2 className='text-3xl font-medium capitalize mb-8'>
               My projects
            </h2> 
    </div>
    <Myprojects />
    <div></div>
    <Skills />
    
    </main>
  )
}