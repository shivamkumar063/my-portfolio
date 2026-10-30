# Shivam Kumar — Personal Portfolio

A fast, responsive, and accessible personal portfolio website built with **React 19**, **Tailwind CSS v4**, and **Vite 8**. Engineered following modern web standards with dark mode synchronization, interactive project filtering, and form validation.

---

## 🌟 Highlights & Features

- **Theme Mode Synchronization**:
  - Full support for **Light**, **Dark**, and **System** color schemes.
  - Aligns with the `<meta name="color-scheme">` specification with zero flash of unstyled content (FOUC).
  - Multi-tab synchronization via `window.storage` events.
- **Hero & Live Engineering Snapshot**:
  - Interactive terminal manifest previewing core competencies and philosophy.
  - One-click copy email button with instant feedback.
  - Live availability status indicator.
- **Technical Skills Matrix**:
  - Interactive category filtering (Frontend, Backend, Cloud & DevOps, Architecture).
  - Proficiency indicators and architecture philosophy pillars.
- **Project Showcase**:
  - Instant live keyword search and category filters.
  - Performance benchmark badges.
  - Detailed architecture modal inspects deep engineering milestones and full tech stacks.
  - Features projects including the *Money Tracker*, *Nexus Cloud Engine*, *DevPulse*, and *Aether AI Studio*.
- **Career Timeline & Milestones**:
  - Chronological journey documenting roles, achievements, and impact.
- **Modern Contact Section**:
  - Non-intrusive validation using native `:user-invalid` and `:user-valid` CSS selectors (no premature error states on page load or initial typing).
  - Automated `aria-invalid` and `aria-describedby` accessibility synchronization.
  - Celebratory confetti burst on successful message dispatch.
- **Fully Responsive & Clean**:
  - Glassmorphic panels, subtle gradients, and typography using *Plus Jakarta Sans* and *JetBrains Mono*.

---

## 🚀 Getting Started

### 1. Installation

```bash
# Navigate to the portfolio directory
cd "C:\Users\shivam kumar\.gemini\antigravity\scratch\portfolio"

# Install dependencies
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Linting

```bash
# Lint code
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
portfolio/
├── index.html                 # Entry HTML with FOUC prevention & meta color-scheme
├── package.json               # Dependencies (React 19, Tailwind v4, Vite 8, Lucide)
├── vite.config.js             # Vite configuration with @tailwindcss/vite plugin
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Core layout assembler
│   ├── index.css              # Tailwind v4, :user-invalid form rules & glassmorphism
│   ├── data/
│   │   └── portfolioData.js   # Centralized portfolio data (profile, projects, skills, history)
│   └── components/
│       ├── Navbar.jsx         # Sticky glass navigation & mobile menu
│       ├── Hero.jsx           # Hero headline, copy email CTA, code manifest card
│       ├── SkillsSection.jsx  # Categorized skills grid & engineering pillars
│       ├── ProjectsSection.jsx# Filterable & searchable project grid
│       ├── ProjectModal.jsx   # Deep dive architecture modal dialog
│       ├── ExperienceTimeline.jsx # Career history & education
│       ├── TestimonialsSection.jsx# Recommendations from engineering leads
│       ├── ContactSection.jsx # Accessible contact form with canvas confetti
│       ├── ThemeToggle.jsx    # Light / Dark / System mode switch
│       ├── Icons.jsx          # SVG brand icons (GitHub, LinkedIn, Twitter/X)
│       └── Footer.jsx         # Footer with back-to-top & copyright
```

---

## 🎨 Customization

To personalize the details, edit [`src/data/portfolioData.js`](file:///C:/Users/shivam%20kumar/.gemini/antigravity/scratch/portfolio/src/data/portfolioData.js):
- Update `profile.name`, `profile.bio`, `profile.email`, and social links.
- Add or modify items in `projects`, `skills`, or `experiences`.

---

## 📜 Standards & Compliance

- **CSS & Layout**: Modern CSS nesting, `:has()`, `:user-invalid`, and CSS variables.
- **Accessibility**: Semantic HTML5 landmark tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`), WCAG contrast guidelines, ARIA labels, and keyboard navigation.
- **Performance**: Zero heavy external component UI libraries; sub-100kb gzipped production bundle.
