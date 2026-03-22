function Experience() {
  const experiences = [
    {
      title: 'Junior Software Engineer',
      company: 'COGWAVE SOFTWARE TECHNOLOGIES PVT LTD',
      period: 'Dec 2025 - Present',
      responsibilities: [
        'Working on "Hotel 360", a production hotel management system',
        'Learning SQL query optimization for billing, GST, and room management modules',
        'Gaining experience in application deployment and configuration',
        'Understanding real-time production systems and debugging techniques'
      ]
    },
    {
      title: '.NET Developer Intern',
      company: 'Cloudiofy',
      period: 'June 2025 - Nov 2025',
      responsibilities: [
        'Developed backend modules using ASP.NET Core MVC and SQL Server',
        'Built User Management System with authentication and authorization',
        'Integrated REST APIs and tested endpoints using Postman',
        'Collaborated in agile team environment using GitHub'
      ]
    }
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-dark p-6 rounded-2xl border-l-4 border-primary hover:translate-x-2 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                <span className="text-sm bg-darker px-4 py-1 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg text-secondary mb-4">{exp.company}</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-primary mt-1">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
