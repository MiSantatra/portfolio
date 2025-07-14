/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#a855f7',
        'neutral-50': '#f8fafc',
        'neutral-800': '#1e293b',
        'neutral-600': '#475569',
        'neutral-400': '#94a3b8',
        'neutral-100': '#e2e8f0',
        accent: '#facc15',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        fillBar: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        underline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        parallax: {
          '0%': { backgroundPosition: 'center 0' },
          '100%': { backgroundPosition: 'center 100px' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        scaleIn: 'scaleIn 0.6s ease-out forwards',
        slideIn: 'slideIn 0.5s ease-out forwards',
        bounce: 'bounce 1s ease-in-out',
        fillBar: 'fillBar 1.2s ease-out forwards',
        underline: 'underline 0.3s ease-out forwards',
        parallax: 'parallax 10s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.9), rgba(168, 85, 247, 0.9)), url("https://source.unsplash.com/1600x900?abstract")',
      },
    },
  },
  plugins: [],
};