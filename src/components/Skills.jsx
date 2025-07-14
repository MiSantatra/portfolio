const Skills = () => {
  const skillCategories = [
    {
      title: 'Langages',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a2 2 0 002 2h3l3 3V4l-3 3H5a2 2 0 00-2 2z"/>
        </svg>
      ),
      skills: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 80 },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 75 },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 70 },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 75 },
        { name: 'T-SQL', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" , level: 70 },
      ],
    },
    {
      title: 'Frameworks & Bibliothèques',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.341A8 8 0 1010.659 4.572 8 8 0 0019.428 15.34z"/>
        </svg>
      ),
      skills: [
        { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg', level: 65 },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 65 },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 65 },
      ],
    },
    {
      title: 'Outils & Technologies',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      ),
      skills: [
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 75 },
        { name: 'API REST', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/postman.svg', level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-scaleIn font-sans"
        >
          Compétences
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 font-sans">
                {category.icon}
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img src={skill.icon} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" alt={skill.name} />
                      <span className="font-medium font-sans">{skill.name}</span>
                    </div>
                    <span className="font-medium font-sans">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full animate-fillBar origin-left"
                      style={{ width: `${skill.level}%`, animationDelay: `${0.2 + skillIndex * 0.1}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;