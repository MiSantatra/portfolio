
const Projects = () => {
  const projects = [
    {
      title: 'Booking Room',
      description: 'Plateforme de réservation de salles avec une interface utilisateur intuitive pour une entreprise ou une école.',
      github : 'https://github.com/MiSantatra/StudyBookingRoom',
      image: '/images/book.PNG',
      link: 'https://magnificent-cactus-976fc2.netlify.app/',
    },
    {
      title: 'Tasky',
      description: 'Une application de "to-do list" avancée, avec gestion des priorités, filtres par statut (à faire / en cours / terminé), et un tableau de bord de statistiques.',
      github :'https://github.com/MiSantatra/tasky',
      image: '/images/tasky.PNG',
      link: 'https://tasky-gh4z.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-scaleIn"
        >
          Projets
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 group-hover:opacity-90 transition-all duration-500" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
                <p><a href={project.github} className="mb-4 text-gray-600 dark:text-gray-400">{project.github}</a></p>
                <a href={project.link} className="text-primary font-medium hover:underline hover:scale-105 transition-all duration-300">Voir le projet →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;