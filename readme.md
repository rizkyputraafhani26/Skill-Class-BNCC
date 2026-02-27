# LogicLens

**Logic Meets Lens** — A modern, responsive portfolio showcasing my journey as a Computer Science student, developer, and photographer.

---

## About the Project

**LogicLens** is a personal portfolio built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. It demonstrates my approach to web development: combining robust programming logic with thoughtful UI/UX design principles. The project features a component-based architecture, CSS custom properties for theming, and smooth interactions that reflect my philosophy of bridging technical depth with visual elegance.

Whether you're exploring my project gallery or learning about my background, this portfolio is designed to deliver a polished, performant experience across all devices.

---

## Key Features

- **🎨 Theme Switching** — Dark and light mode toggle with localStorage persistence
- **📱 Responsive Design** — Mobile-first approach with seamless adaptation across devices
- **⚡ Smooth Navigation** — Scroll-aware header with smooth anchor link transitions
- **🎯 Component-Based Architecture** — Modular, maintainable CSS with custom properties
- **🖼️ Project Showcase** — Gallery featuring:
  - Java Calculator — A functional calculator demonstrating OOP principles
  - Python To-Do List — Task management app built with Python
  - Editorial Blog Template — Design-focused blog layout
- **♿ Accessibility** — Semantic HTML, ARIA labels, and keyboard navigation support

---

## Local Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Git installed on your machine

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LukasMystic/logicLens.git
   cd logicLens
   ```

2. **Open in your browser:**
   - Simply double-click `index.html` in the project folder, or
   - Use a local server for better performance:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if http-server is installed)
     http-server
     ```
   - Navigate to `http://localhost:8000` in your browser

3. **Explore the portfolio:**
   - Toggle between dark and light themes using the moon/sun icon
   - Use the responsive mobile menu on smaller screens
   - Click navigation links for smooth scrolling

---

## Project Structure

```
logicLens/
├── index.html              # Main HTML file
├── script.js               # Vanilla JavaScript (menu, theme, scroll behavior)
├── style.css               # CSS with custom properties and responsive design
├── readme.md               # This file
└── assets/
    ├── putra0.jpeg         # Portfolio image
    ├── project-1/          # Java Calculator project files
    ├── project-2/          # Python To-Do List project files
    └── project-3/          # Editorial Blog Template files
```

### CSS Architecture
- **Global Variables:** Color palette, fonts, spacing defined in `:root`
- **Component Classes:** `.header`, `.nav`, `.hero`, `.about`, `.projects`, etc.
- **Utilities:** Reusable button styles (`.btn-primary`, `.btn-secondary`)
- **Responsive Breakpoints:** Mobile-first design adapts seamlessly to larger screens

### JavaScript Modules
- **Hamburger Menu Logic:** Mobile navigation toggle with aria-attributes
- **Theme Toggle:** Dark/light mode switching with localStorage
- **Scroll-Aware Header:** Dynamic header styling based on scroll position
- **Smooth Scrolling:** Anchor link navigation with `scrollIntoView` behavior

---

## Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and accessibility |
| **CSS3** | Layout, theming, and responsive design |
| **Vanilla JavaScript** | Interactivity without dependencies |
| **Font Awesome** | Icon library for UI elements |
| **Google Fonts** | Typography (Inter font family) |

---

## Contact & Socials

Feel free to connect with me on professional platforms:

- **GitHub:** [@rizkyputraafhani26](https://https://github.com/rizkyputraafhani26)
- **LinkedIn:** [Rizky Putra Afhani](https://www.linkedin.com/in/rizkyputraafhani/)
- **Email:** [putraafhani26@gmail.com]

I'm always open to discussing web development, design systems, and creative projects. Let's build something great together!

---

## License

This project is open source and available under the MIT License. Feel free to fork, modify, and use it as inspiration for your own portfolio.

---

**Made with ❤️ by Rizky Putra Afhani** | 2nd Semester, Computer Science Student
