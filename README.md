# Ananya Darna — Developer Portfolio

A premium, recruiter-focused developer portfolio built with **React + Vite** and pure CSS.  
Zero UI libraries — every pixel is hand-crafted.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌙 Dark / Light mode | Smooth theme switching with CSS variables |
| ⚡ Particle background | Interactive animated canvas effect |
| 🖱️ Custom cursor | Glow dot + trailing ring |
| 📊 Scroll progress bar | Top page reading indicator |
| ⌨️ Typing animation | Dynamic hero section roles |
| 🧠 Skill cards | Filterable skills with animated progress bars |
| 💼 Project cards | Live demo + GitHub repository links |
| 📬 Contact form | Controlled React form with success state |
| 📱 Fully responsive | Optimized for mobile, tablet, desktop |
| 🚀 Deploy-ready | Vercel / Netlify / GitHub Pages |

---

## 🗂 Project Structure

```bash
portfolio/
├── public/
│   ├── ananya_resume.pdf
│   └── profile.jpg
├── index.html                  ← Vite entry point
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx                ← ReactDOM.createRoot
    ├── App.jsx                 ← Root layout + hooks
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── Experience.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── hooks/
    │   ├── useTheme.js
    │   ├── useCursor.js
    │   ├── useScrollProgress.js
    │   └── useReveal.js
    ├── data/
    │   ├── skills.js
    │   ├── projects.js
    │   └── achievements.js
    └── styles/
        ├── global.css
        ├── Navbar.css
        ├── Hero.css
        ├── About.css
        ├── Skills.css
        ├── Projects.css
        ├── Experience.css
        ├── Contact.css
        └── Footer.css
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Deploy

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```


### Netlify
```bash
npm run build
# Upload the /dist folder
```

### GitHub Pages
```bash
npm run build
# Deploy /dist contents to gh-pages branch
```

---


## 🛠 Tech Stack

| Tech | Role |
|---|---|
| React 18 | UI components & state |
| Vite 5 | Dev server & bundler |
| Pure CSS | Styling, animations, responsive |
| Canvas API | Particle background |
| IntersectionObserver | Scroll-reveal animations |
| Google Fonts | Syne + Inter + JetBrains Mono |

---

## 📄 License

MIT — Free to use and modify for personal portfolios.

---

Made with 💙 by Ananya Darna
