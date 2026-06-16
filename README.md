# Ananya Darna — Developer Portfolio

A recruiter-focused developer portfolio built with React, Vite, and custom CSS, featuring interactive animations, responsive design, and a fully handcrafted user experience.

🌐 **Live Demo:** [Visit Portfolio](https://ananya-portfolio-three-mu.vercel.app/)

💼 Open to Software Developer, Frontend, and Full Stack Opportunities

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌙 Dark / Light mode | Smooth theme switching with CSS variables |
| ⚡ Particle background | Interactive animated canvas effect |
| 🖱️ Custom cursor | Glow dot + trailing ring |
| 📊 Scroll progress bar | Top page reading indicator |
| ⌨️ Typing animation | Dynamic hero section roles |
| 🧠 Skill cards | Filterable skills with animated progress bars (includes Tailwind, FastAPI, Docker, etc.) |
| 💼 Project cards | Live demo + GitHub repository links (includes SmartQR Dine, Nexus, etc.) |
| 🌐 Open Source section | Dedicated showcase of GSSoC'26 & NSoC'26 contributions with direct PR links |
| 🎖️ Credentials showcase | Restructured Achievements & Certifications section with visual GSSoC and NSoC badges |
| 📬 Contact form | Controlled React form with success state |
| 📱 Fully responsive | Optimized for mobile, tablet, desktop |
| 🚀 Deploy-ready | Vercel / Netlify / GitHub Pages |

---

## 🎯 Purpose

This portfolio was built to present my technical skills, open-source contributions, projects, and credentials in a visually strong and professional way for recruiters, hiring managers, and collaborators.

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| React 18 | Component-based UI |
| Vite | Fast development & build tool |
| JavaScript / Python / Java | Programming Languages |
| Node.js / Express.js / FastAPI | Backend APIs & Frameworks |
| MongoDB / MySQL / Firebase / Redis | Database systems |
| Socket.io / WebSockets | Real-time features |
| CSS3 / Tailwind CSS | Responsive styling |
| Docker | Containerization |

---

## 🗂 Project Structure

```bash
portfolio/
├── public/
│   ├── ananya_resume.pdf
│   ├── profile.jpg
│   ├── badges/                 ← GSSoC & NSoC badges
│   │   ├── gssoc_rising_star.png
│   │   ├── gssoc_contributor.png
│   │   └── nsoc_tech_contributor.png
│   └── project/                ← Project preview mockups
│       ├── smartqr.png
│       ├── nexus.png
│       ├── trashmorph.png
│       └── laundry.png
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
    │   ├── OpenSource.jsx      ← Open source contributions component
    │   ├── Experience.jsx      ← Achievements & Certifications component
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
    │   ├── opensource.js       ← Open source contributions data
    │   └── achievements.js     ← Achievements & badges data
    └── styles/
        ├── global.css
        ├── Navbar.css
        ├── Hero.css
        ├── About.css
        ├── Skills.css
        ├── Projects.css
        ├── OpenSource.css      ← Open source styles
        ├── Experience.css      ← Achievements styles
        ├── Contact.css
        └── Footer.css
```

---

## 🚀 Run Locally

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

## 🌐 Deployment

Hosted on **Vercel**  


---
## 📄 Resume

Included in repository: `public/ananya_resume.pdf`

---

## 👩‍💻 Author

**Ananya Darna**  
**GitHub:** [ananyadarna](https://github.com/ananyadarna)  
**LinkedIn:** [ananyadarna](https://linkedin.com/in/ananyadarna)  
Open to software developer internships, full stack, and frontend roles.

---
## 📄 License

MIT — Free to use and modify for personal portfolios.

---

Made with 💙 by Ananya Darna
