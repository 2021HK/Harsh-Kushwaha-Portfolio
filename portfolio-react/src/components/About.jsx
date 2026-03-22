function About() {
  const stats = [
    { value: '7.80', label: 'CGPA' },
    { value: '5+', label: 'Major Projects' },
    { value: '1+', label: 'Year Experience' },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="/img/DSC_6210.jpg" 
              alt="About Harsh Kushwaha" 
              className="w-full max-w-xs mx-auto rounded-2xl shadow-lg shadow-primary/20"
            />
          </div>

          <div class="flex-1">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
              About <span className="text-primary">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Software Developer & Problem Solver
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a B.Tech student in Mathematics & Computing at MITS Gwalior with a 7.80 CGPA, 
              passionate about building scalable software solutions. Currently working as a Junior 
              Software Engineer at COGWAVE SOFTWARE TECHNOLOGIES, where I'm gaining hands-on experience 
              with production-level hotel management systems.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My expertise lies in backend development with ASP.NET Core, Entity Framework Core, 
              and SQL Server. I've built multiple projects including REST APIs, management systems, 
              and AI-based applications. I'm a quick learner, eager to contribute to real-world projects, 
              and constantly expanding my skillset with modern technologies and best practices.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-dark p-4 rounded-lg text-center border-2 border-primary hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
                >
                  <h4 className="text-3xl font-bold text-primary">{stat.value}</h4>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
