# Portfolio

Un portfolio personnel construit avec React, Tailwind CSS, et Vite, présentant mes compétences, projets, et expériences.

## Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

## Installation
1. Clonez le dépôt ou créez un dossier avec les fichiers fournis :
   ```bash
   git clone <votre-dépôt> ou mkdir portfolio && cd portfolio
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
4. Ouvrez `http://localhost:5173` dans votre navigateur.

## Construire pour la production
```bash
npm run build
```
Les fichiers générés seront dans le dossier `dist`.

## Déploiement
Déployez le dossier `dist` sur une plateforme comme Netlify, Vercel, ou GitHub Pages.

## Personnalisation
- Remplacez les images Unsplash dans `src/components` par vos propres images dans `src/assets/images`.
- Mettez à jour les données dans `Skills.jsx`, `Timeline.jsx`, et `Projects.jsx` avec vos informations.
- Ajoutez des liens réels pour les réseaux sociaux dans `About.jsx` et `Footer.jsx`.

## Structure du projet
```
portfolio/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Timeline.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```