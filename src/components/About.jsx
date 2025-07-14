const About = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/github.svg',
      href: 'https://github.com/MiSantatra', 
    },
    {
      name: 'LinkedIn',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/linkedin.svg',
      href: 'https://linkedin.com/in/miharimbola-ramanantsoa', 
    },
    {
      name: 'E-mail',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/maildotru.svg',
      href: '#contact',
    },
  ];

  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-800 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-scaleIn font-sans"
        >
          À propos
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className="flex justify-center animate-scaleIn"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative group">
              <img
                src="/images/photo.jpg"
                alt="Photo de Santatra"
                className="rounded-2xl w-72 h-72 object-cover shadow-xl group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300"
              />
              <div className="absolute left-[-48px] top-1/2 transform -translate-y-1/2 space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-label={`Lien vers mon profil ${link.name}`}
                    className="block w-10 h-10 bg-primary text-white flex items-center justify-center rounded-lg hover:bg-primary/80 hover:scale-110 hover:rotate-6 transition-all duration-300 animate-bounce"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <img
                      src={link.icon}
                      alt={`${link.name} icon`}
                      className="w-6 h-6 invert dark:invert-0"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            className="animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            <p className="text-primary text-sm uppercase font-bold mb-3 font-sans">Salut !</p>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-sans">Développeur Web</h3>
            <p className="mb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium font-sans">
              Développeur web junior, je combine créativité et compétences techniques pour créer des sites dynamiques et rejoindre une équipe innovante.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium font-sans">
              <div><strong>Nom :</strong> RAMANANTSOA Miharimbola Santatra</div>
              <div><strong>Email :</strong> miharimbola.ramanantsoa@email.com</div>
              <div><strong>Téléphone :</strong> +230 5494 0870</div>
              <div><strong>Adresse :</strong> N°1, 5th Floor, Sujata Court, Victoria Avenue, Quatre-Bornes</div>
            </div>
            <div className="mt-6 space-x-4">
              <a
                href="/images/cv.pdf" 
                download
                className="inline-block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 font-semibold font-sans"
              >
                Télécharger mon CV
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/80 hover:scale-105 transition-all duration-300 font-semibold font-sans"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;