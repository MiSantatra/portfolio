const Timeline = () => {
  const education = [
    { institution: 'MCCI Business School', degree: 'Licence Professionnelle', suite:"Concepteur de systèmes d'information ", period: '2022 - 2024' },
    { institution: 'Institut Supérieur Polytechnique de Madagascar', degree: ' Master en Electronique, Système Informatique ', suite: 'et Intelligence Artificielle', period: '2022 - 2024' },
    { institution: 'Institut Supérieur Polytechnique de Madagascar', degree: 'Licence en Electronique, Système Informatique ', suite: 'et Intelligence Artificielle', period: '2018 - 2022' },
    { institution: 'Lycée Andrianampoinimerina', degree: 'Baccalauréat Scientifique', period: '2017 - 2018' },
  ];
  const experience = [
    { company: 'Bolzano Group ( A Vivea Business Park Maurice)', role: 'Stagiaire Développeur', tech: 'Symfony API plateform, T-SQL', period: '2018 – 2024' },
    { company: 'Konecta ( Antananarivo, Madagascar)', role: 'Stagiaire Développeur', tech: 'Laravel', period: '2016 – 2018' },
    { company: '3WRE (France à distance)', role: 'Développeur web', tech: 'Symfony, Docker, HTML, CSS', period: '2014 – 2016' },
    { company: 'MahayTech ( Antananarivo, Madagascar)', role: 'Stagiaire Développeur', tech: 'Symfony, HTML, CSS', period: '2014 – 2016' },
  ];

  return (
    <section id="timeline" className="py-24 bg-white dark:bg-gray-800 animate-fadeIn font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-scaleIn"
        >
          Mon <span className="text-primary">Parcours</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-scaleIn"
            style={{ animationDelay: '0.1s' }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7l-9-5 9-5z"/>
              </svg>
              Éducation
            </h3>
            <ul className="space-y-4">
              {education.map((edu, index) => (
                <li
                  key={index}
                  className="group flex justify-between items-start bg-white dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <p className="font-bold">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.degree}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.suite}</p>
                  </div>
                  <span className="bg-primary text-white text-sm py-1 px-3 rounded-full group-hover:scale-110 transition-transform duration-300">{edu.period}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-scaleIn"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 7v6a6 6 0 006 6 6 6 0 006-6V7"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16"/>
              </svg>
              Expérience Professionnelle
            </h3>
            <ul className="space-y-4">
              {experience.map((exp, index) => (
                <li
                  key={index}
                  className="group flex justify-between items-start bg-white dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 animate-fadeIn font-semibold"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <p className="font-medium font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{exp.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{exp.tech}</p>
                  </div>
                  <span className="bg-primary text-white text-sm py-1 px-3 rounded-full group-hover:scale-110 transition-transform duration-300">{exp.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;