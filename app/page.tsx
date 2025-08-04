import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Hero from "./components/Hero" 
import Projects from "./components/Projects"
import Services from "./components/Service"

const Page = () => {
  return (
    <div className='pt-16'>
      <section id="home">
        <Hero/>
      </section>
      <section id="about">
        <AboutUs/>
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="contact">
      <Contact/>
      </section>
      
    </div>
  )
}

export default Page