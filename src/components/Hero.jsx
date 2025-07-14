const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center text-white pt-20 animate-parallax"
  >
    <div className="text-center px-4 sm:px-6 lg:px-8">
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn text-gray-800 dark:text-gray-100"
        style={{ animationDelay: '0.2s' }}
      >
        Bonjour, je suis <span className="text-yellow-300 font-bold">Miha</span>
      </h1>
      <p
        className="text-lg sm:text-xl lg:text-2xl font-medium mb-8 max-w-2xl mx-auto animate-fadeIn font-semibold"
        style={{ animationDelay: '0.4s' }}
      >
        Avec une passion pour le web, je développe des interfaces performantes et attrayantes, un aperçu de mon expertise à découvrir dans ce portfolio.
      </p>
      <a
        href="#projects"
        className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 animate-bounce"
        style={{ animationDelay: '0.6s' }}
      >
        Découvrir mes projets
      </a>
    </div>
  </section>
);

export default Hero;