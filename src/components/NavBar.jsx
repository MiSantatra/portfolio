import { useState, useEffect } from 'react';


const NavBar = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  const navItems = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#timeline', label: 'Parcours' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <nav className="fixed w-full z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 animate-slideIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300">MonPortfolio</a>
        <div className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-base font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-primary transform scale-x-0 group-hover:animate-underline origin-left"></span>
            </a>
          ))}
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-300"
        >
          {isDark ? (
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M15.66 15.66l2.12 2.12M1 12h3M18 12h3M4.22 19.78l2.12-2.12M15.66 8.34l2.12-2.12"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;