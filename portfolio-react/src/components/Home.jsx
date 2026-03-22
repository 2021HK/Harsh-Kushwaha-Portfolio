import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

function Home() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['.NET Developer', 'Backend Engineer', 'Software Developer', 'Problem Solver'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    })

    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2">Hello, I'm</h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              Harsh Kushwaha
            </h1>
            <h3 className="text-3xl font-bold mb-6">
              And I'm a <span ref={typedRef} className="text-primary"></span>
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Aspiring Software Developer with a strong foundation in C#, ASP.NET Core, and modern web technologies. 
              Quick learner with hands-on experience building backend applications. Eager to contribute to real-world 
              projects and grow in a professional development environment.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mb-8">
              <a href="https://www.linkedin.com/in/harsh-kushwaha" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-dark transition-all hover:scale-110">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/2021HK" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-dark transition-all hover:scale-110">
                <FaGithub size={20} />
              </a>
              <a href="mailto:kushwahaharsh2003@gmail.com"
                className="w-12 h-12 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-dark transition-all hover:scale-110">
                <FaEnvelope size={20} />
              </a>
              <a href="tel:+917879820077"
                className="w-12 h-12 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-dark transition-all hover:scale-110">
                <FaPhone size={20} />
              </a>
            </div>

            <a href="#contact" className="inline-block px-8 py-3 bg-primary text-dark font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all hover:-translate-y-1">
              Get In Touch
            </a>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary shadow-lg shadow-primary/50 overflow-hidden animate-float">
              <img src="/img/DSC_6210.jpg" alt="Harsh Kushwaha" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
