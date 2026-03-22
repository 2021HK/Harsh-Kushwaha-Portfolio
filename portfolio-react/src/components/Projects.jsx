import { FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa'

function Projects() {
  const projects = [
    {
      title: 'Hotel 360 Management System',
      description: 'Production hotel management system with billing, GST calculations, POS and restaurant modules',
      tech: ['ASP.NET Core', 'SQL Server', 'REST API'],
      gradient: 'from-purple-600 to-purple-900',
      link: '#',
      icon: <FaBriefcase />
    },
    {
      title: 'Appointment Booking System',
      description: 'Full-featured appointment scheduling system with real-time booking management and notifications',
      tech: ['ASP.NET Core', 'SQL Server', 'MVC'],
      gradient: 'from-pink-500 to-red-600',
      link: 'https://github.com/2021HK/AppointmentBookingSystem',
      icon: <FaExternalLinkAlt />
    },
    {
      title: 'UserWorld API Project',
      description: 'RESTful API with authentication, authorization, and complete CRUD operations',
      tech: ['ASP.NET Core', 'Web API', 'JWT'],
      gradient: 'from-blue-400 to-cyan-400',
      link: 'https://github.com/2021HK/UserWorldAPI-Project',
      icon: <FaExternalLinkAlt />
    },
    {
      title: 'Speech Pattern Analyzer',
      description: 'AI-based system analyzing voice recordings for cognitive health insights using signal processing',
      tech: ['Python', 'FastAPI', 'Librosa'],
      gradient: 'from-orange-400 to-yellow-400',
      link: 'https://github.com/2021HK/speech-pattern-analyzer',
      icon: <FaExternalLinkAlt />
    }
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg hover:shadow-2xl hover:shadow-primary/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
              
              <div className="absolute inset-0 bg-dark/80 group-hover:bg-dark/95 transition-all flex flex-col justify-end p-6">
                <h4 className="text-2xl font-bold mb-2 text-primary">{project.title}</h4>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary text-dark text-xs font-semibold rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-dark hover:bg-primary transition-all hover:scale-110"
                >
                  {project.icon}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/2021HK" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-dark font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all hover:-translate-y-1"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
