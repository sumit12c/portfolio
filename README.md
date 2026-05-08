
# Sumit Patel - Creative Developer Portfolio 🚀

A premium, interactive personal portfolio website showcasing creative development expertise, innovative projects, and technical skills. Built with cutting-edge technologies featuring smooth animations, 3D backgrounds, and a seamless user experience.

[![Open Site](https://img.shields.io/badge/Open%20Site-thesumitpatel.netlify.app-blue?style=for-the-badge)](https://thesumitpatel.netlify.app)

## ✨ Features

- **Smooth GSAP Animations** - Professional scroll-triggered animations and transitions
- **3D Background Effects** - Dynamic 3D scenes using Three.js for visual impact
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop views
- **Interactive Tech Stack** - Bursting circular animation of skills with responsive positioning
- **Project Showcase** - Clickable project cards that link to live demos
- **Contact Form** - Direct Gmail integration with pre-filled messages
- **Modern UI/UX** - Glass-morphism effects, gradient accents, and smooth micro-interactions
- **Performance Optimized** - Fast loading with Vite build tool
- **SEO Ready** - Meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React** - UI library for component-based architecture
- **TypeScript** - Type-safe JavaScript for better code quality
- **Vite** - Ultra-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Animation library for smooth transitions and gestures
- **GSAP (GreenSock Animation Platform)** - Professional animation library with ScrollTrigger
- **Three.js** - 3D graphics library for WebGL scenes
- **Lucide React** - Beautiful, consistent icon library

### Build & Development
- **ESLint** - Code linting for consistency
- **PostCSS** - CSS transformations
- **Tailwind CSS Vite Plugin** - Optimized Tailwind integration

### Performance & Tools
- **npm** - Package manager
- **Git** - Version control

## 📋 Project Sections

1. **Hero Section** - Eye-catching introduction with parallax scrolling
2. **About** - Professional background and expertise overview
3. **Experience** - Career highlights and professional journey
4. **Skills & Services** - Core competencies and service offerings
5. **Tech Stack (My Arsenal)** - Animated circular display of technical skills
6. **Featured Projects** - Showcase of key projects with live links:
   - **Resqverse** - Gamified disaster preparedness platform
   - **Kracit** - AI-powered mock interview simulator
   - **File Transfer App** - Secure wireless file sharing
   - **Portfolio Website** - This project
7. **Testimonials** - Client feedback and reviews
8. **Contact** - Direct Gmail contact with confirmation dialog
9. **Footer** - Social links and navigation

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ (with npm)
- **Git** for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sumit12c/sumit-patel---portfolio.git
   cd sumit-patel---portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```
   Add your configuration if needed for API keys.

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

## 🎨 Design Highlights

- **Color Scheme**: Dark theme with cyan, purple, and orange accents
- **Typography**: Modern serif and sans-serif font combinations
- **Animations**: Smooth entrance animations, scroll-triggered effects, and micro-interactions
- **Responsive Breakpoints**: Optimized for mobile (sm), tablet (md), and desktop (xl)
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## 📱 Contact Form

The contact form integrates with Gmail Web to allow users to:
1. Fill in name, email, and message
2. Click "Send Message"
3. Confirmation dialog appears
4. Click "Proceed" to open Gmail with pre-filled message
5. Review and send directly from Gmail

**No backend required** - Uses Gmail's web compose feature for instant delivery.

## 🔧 Customization

### Personal Information
- Update name and bio in `Hero.tsx`
- Modify social links in `Contact.tsx` and `Footer.tsx`
- Change email in `Contact.tsx` (recipient email for contact form)

### Project Links
- Edit project URLs in `Projects.tsx`
- Update project images in `/images` folder

### Tech Stack
- Modify skills in `TechStack.tsx`
- Adjust animation timings as needed

### Styling
- Tailwind CSS configuration in `tailwind.config.js`
- Global styles in `index.css`
- Component-level styling with inline Tailwind classes

## 📂 Project Structure

```
src/
├── components/
│   ├── About.tsx              # About section
│   ├── Contact.tsx            # Contact form with Gmail integration
│   ├── Experience.tsx         # Work experience section
│   ├── FloatingShapes.tsx     # Animated background shapes
│   ├── Footer.tsx             # Footer with links
│   ├── Hero.tsx               # Hero section with intro
│   ├── Loader.tsx             # Loading animation
│   ├── MouseGlow.tsx          # Mouse tracking glow effect
│   ├── Navbar.tsx             # Navigation header
│   ├── ParallaxSection.tsx    # Parallax scrolling section
│   ├── Projects.tsx           # Project showcase
│   ├── Scene3D.tsx            # 3D background scene
│   ├── Skills.tsx             # Skills section
│   ├── Stats.tsx              # Statistics display
│   ├── TechStack.tsx          # Bursting tech icons animation
│   └── Testimonial.tsx        # Client testimonials
├── App.tsx                    # Main application component
├── index.css                  # Global styles
├── main.tsx                   # Application entry point
└── vite.config.ts             # Vite configuration

public/
├── images/                    # Project images and assets
│   └── meimg.jpg             # Hero section portrait
```

## 🚀 Performance Optimization

- **Lazy Loading** - Components load on scroll visibility
- **Code Splitting** - Vite automatically optimizes bundle
- **Image Optimization** - Responsive images with proper sizing
- **CSS Minification** - Tailwind CSS purges unused styles
- **Animation Optimization** - GPU-accelerated transforms with GSAP

## 📄 License

This project is open source and available under the MIT License. Feel free to use it as a template for your own portfolio!

## 👨‍💻 About the Author

**Sumit Patel** - Creative Developer specializing in:
- Interactive Web Experiences
- Generative Design & Creative Coding
- Full Stack Development
- AI/ML Integration

## 🙏 Credits

- **Animations**: GSAP & Framer Motion
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## 📞 Support

For questions or suggestions about this portfolio:
- Open an issue on GitHub
- Contact via email: patelsumit86112@gmail.com

---

**Made with ❤️ by Sumit Patel**
