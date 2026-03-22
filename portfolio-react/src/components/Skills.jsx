import { FaCode, FaLayerGroup, FaDatabase, FaWrench, FaBrain } from 'react-icons/fa'

function Skills() {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Languages',
      skills: ['C#', 'C++', 'Python', 'JavaScript', 'SQL']
    },
    {
      icon: <FaLayerGroup />,
      title: 'Frameworks & Tools',
      skills: ['ASP.NET Core', '.NET 8', 'Entity Framework Core', 'React', 'FastAPI']
    },
    {
      icon: <FaDatabase />,
      title: 'Databases',
      skills: ['MS SQL Server', 'MySQL', 'SSMS']
    },
    {
      icon: <FaWrench />,
      title: 'Tools & Platforms',
      skills: ['Visual Studio', 'VS Code', 'GitHub', 'Postman', 'AWS']
    },
    {
      icon: <FaBrain />,
      title: 'Core Concepts',
      skills: ['OOP', 'Data Structures', 'Algorithms', 'Software Testing', 'AWS Cloud', 'Design Patterns', 'SOLID Principles', 'TDD']
    }
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-darker p-6 rounded-2xl border-2 border-transparent hover:border-primary transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl text-primary">{category.icon}</span>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-dark border border-primary rounded-full text-sm hover:bg-primary hover:text-dark transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
