# Design System & Implementation Guide
## HTML, CSS & JavaScript Project with Scroll Animations

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Design Principles](#design-principles)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Animation System](#animation-system)
7. [Component Guidelines](#component-guidelines)
8. [Responsive Design](#responsive-design)
9. [Implementation Checklist](#implementation-checklist)

---

## 🎯 Project Overview

This design system provides a comprehensive guide for building a modern, animated website using vanilla HTML, CSS, and JavaScript. The system emphasizes smooth scroll animations, viewport-triggered reveals, and mobile-first responsive design.

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - Intersection Observer API for animations
- **No frameworks required** - Pure web standards

---

## 🎨 Design Principles

### 1. **Progressive Enhancement**
- Start with semantic HTML
- Layer on CSS for visual design
- Enhance with JavaScript animations
- Ensure graceful degradation

### 2. **Performance First**
- Lazy-load animations
- Use CSS transforms for smooth 60fps animations
- Minimize repaints and reflows
- Optimize for mobile devices

### 3. **Accessibility**
- Respect `prefers-reduced-motion`
- Maintain keyboard navigation
- Ensure sufficient color contrast
- Use semantic HTML elements

### 4. **Mobile-First Approach**
- Design for mobile screens first
- Progressive enhancement for larger screens
- Touch-friendly interactive elements
- Optimized for various viewport sizes

---

## 🎨 Color System

### Primary Colors
```css
:root {
  /* Brand Colors */
  --color-primary: #1876F4;
  --color-primary-dark: #0D5AC9;
  --color-primary-light: #4A94F7;
  
  /* Neutral Colors */
  --color-background: #FFFFFF;
  --color-background-alt: #F8F9FA;
  --color-surface: #FFFFFF;
  --color-surface-elevated: #FFFFFF;
  
  /* Text Colors */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-text-tertiary: #9CA3AF;
  --color-text-inverse: #FFFFFF;
  
  /* Accent Colors */
  --color-accent: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-success: #10B981;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #1876F4 0%, #0D5AC9 100%);
  --gradient-accent: linear-gradient(135deg, #10B981 0%, #059669 100%);
  --gradient-overlay: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
}
```

### Dark Mode Support
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #0F172A;
    --color-background-alt: #1E293B;
    --color-surface: #1E293B;
    --color-surface-elevated: #334155;
    --color-text-primary: #F1F5F9;
    --color-text-secondary: #CBD5E1;
    --color-text-tertiary: #94A3B8;
  }
}
```

---

## ✍️ Typography

### Font Stack
```css
:root {
  /* Font Families */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Fira Code', 'Courier New', monospace;
  
  /* Font Sizes - Mobile First */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */
  
  /* Font Weights */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  --leading-loose: 2;
}
```

### Responsive Typography
```css
/* Tablet and up */
@media (min-width: 768px) {
  :root {
    --text-3xl: 2.25rem;   /* 36px */
    --text-4xl: 3rem;      /* 48px */
    --text-5xl: 4rem;      /* 64px */
    --text-6xl: 5rem;      /* 80px */
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  :root {
    --text-5xl: 4.5rem;    /* 72px */
    --text-6xl: 6rem;      /* 96px */
  }
}
```

### Typography Classes
```css
.heading-1 {
  font-family: var(--font-heading);
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
}

.heading-2 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

.heading-3 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
}

.body-large {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
}

.body {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

.body-small {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}
```

---

## 📏 Spacing & Layout

### Spacing Scale
```css
:root {
  /* Spacing Scale (8px base) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  
  /* Container Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
  
  /* Border Radius */
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-2xl: 1.5rem;   /* 24px */
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### Container System
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 640px) {
  .container { max-width: var(--container-sm); }
}

@media (min-width: 768px) {
  .container { 
    max-width: var(--container-md);
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container { 
    max-width: var(--container-lg);
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}

@media (min-width: 1280px) {
  .container { max-width: var(--container-xl); }
}
```

---

## 🎬 Animation System

### Animation Variables
```css
:root {
  /* Animation Durations */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;
  
  /* Animation Easings */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Transition Properties */
  --transition-base: all var(--duration-normal) var(--ease-in-out);
  --transition-fast: all var(--duration-fast) var(--ease-in-out);
  --transition-slow: all var(--duration-slow) var(--ease-in-out);
}
```

### Scroll Animation Classes
```css
/* Base reveal animation setup */
.reveal-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--duration-slow) var(--ease-out),
              transform var(--duration-slow) var(--ease-out);
}

.reveal-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Animation Variants */
.reveal-fade {
  opacity: 0;
  transition: opacity var(--duration-slow) var(--ease-out);
}

.reveal-fade.is-visible {
  opacity: 1;
}

.reveal-up {
  opacity: 0;
  transform: translateY(50px);
}

.reveal-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-down {
  opacity: 0;
  transform: translateY(-50px);
}

.reveal-down.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(50px);
}

.reveal-left.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.reveal-right {
  opacity: 0;
  transform: translateX(-50px);
}

.reveal-right.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.9);
}

.reveal-scale.is-visible {
  opacity: 1;
  transform: scale(1);
}
```

### Stagger Animations
```css
.stagger-container > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--duration-normal) var(--ease-out),
              transform var(--duration-normal) var(--ease-out);
}

.stagger-container.is-visible > *:nth-child(1) { transition-delay: 0ms; }
.stagger-container.is-visible > *:nth-child(2) { transition-delay: 100ms; }
.stagger-container.is-visible > *:nth-child(3) { transition-delay: 200ms; }
.stagger-container.is-visible > *:nth-child(4) { transition-delay: 300ms; }
.stagger-container.is-visible > *:nth-child(5) { transition-delay: 400ms; }
.stagger-container.is-visible > *:nth-child(6) { transition-delay: 500ms; }

.stagger-container.is-visible > * {
  opacity: 1;
  transform: translateY(0);
}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .reveal-section,
  .reveal-fade,
  .reveal-up,
  .reveal-down,
  .reveal-left,
  .reveal-right,
  .reveal-scale {
    opacity: 1;
    transform: none;
  }
}
```

### Scroll Progress Bar
```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  transform-origin: 0%;
  transform: scaleX(0);
  z-index: 9999;
  transition: transform 0.1s ease-out;
}
```

---

## 🧩 Component Guidelines

### Button Component
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: 1;
  text-decoration: none;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: var(--transition-base);
  white-space: nowrap;
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}

/* Responsive Button Sizes */
@media (max-width: 767px) {
  .btn {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
  }
}
```

### Card Component
```css
.card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-3);
  color: var(--color-text-primary);
}

.card-description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

/* Responsive Card */
@media (max-width: 767px) {
  .card {
    padding: var(--space-4);
  }
  
  .card-title {
    font-size: var(--text-xl);
  }
}
```

### Section Component
```css
.section {
  padding: var(--space-16) 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.section-title {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-4);
  color: var(--color-text-primary);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Responsive Sections */
@media (max-width: 767px) {
  .section {
    padding: var(--space-12) 0;
  }
  
  .section-header {
    margin-bottom: var(--space-8);
  }
  
  .section-title {
    font-size: var(--text-3xl);
  }
  
  .section-subtitle {
    font-size: var(--text-base);
  }
}
```

---

## 📱 Responsive Design

### Breakpoint System
```css
/* Mobile First Breakpoints */
:root {
  --breakpoint-sm: 640px;   /* Small tablets */
  --breakpoint-md: 768px;   /* Tablets */
  --breakpoint-lg: 1024px;  /* Laptops */
  --breakpoint-xl: 1280px;  /* Desktops */
  --breakpoint-2xl: 1536px; /* Large desktops */
}
```

### Grid System
```css
.grid {
  display: grid;
  gap: var(--space-6);
}

/* Mobile: 1 column */
.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .grid-cols-md-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .grid-cols-lg-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-cols-lg-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Responsive Utilities
```css
/* Hide on mobile */
.hidden-mobile {
  display: none;
}

@media (min-width: 768px) {
  .hidden-mobile {
    display: block;
  }
}

/* Show only on mobile */
.visible-mobile {
  display: block;
}

@media (min-width: 768px) {
  .visible-mobile {
    display: none;
  }
}

/* Text alignment */
.text-center-mobile {
  text-align: center;
}

@media (min-width: 768px) {
  .text-center-mobile {
    text-align: left;
  }
}
```

---

## ✅ Implementation Checklist

### Phase 1: Project Setup
- [ ] Create project folder structure
  ```
  project/
  ├── index.html
  ├── css/
  │   ├── reset.css
  │   ├── variables.css
  │   ├── animations.css
  │   └── main.css
  ├── js/
  │   ├── scroll-animations.js
  │   ├── smooth-scroll.js
  │   └── main.js
  ├── images/
  └── README.md
  ```
- [ ] Link Google Fonts (Inter)
- [ ] Set up CSS custom properties
- [ ] Create base reset/normalize CSS

### Phase 2: Core Styles
- [ ] Implement color system
- [ ] Set up typography scale
- [ ] Create spacing utilities
- [ ] Build container system
- [ ] Add responsive breakpoints

### Phase 3: Animation System
- [ ] Create reveal animation classes
- [ ] Implement Intersection Observer
- [ ] Add scroll progress bar
- [ ] Set up stagger animations
- [ ] Add reduced motion support

### Phase 4: Components
- [ ] Build button components
- [ ] Create card components
- [ ] Design section layouts
- [ ] Add navigation/header
- [ ] Create footer

### Phase 5: Responsive Design
- [ ] Test on mobile devices (320px - 767px)
- [ ] Test on tablets (768px - 1023px)
- [ ] Test on desktops (1024px+)
- [ ] Optimize touch targets (min 44x44px)
- [ ] Test landscape orientations

### Phase 6: Performance
- [ ] Optimize images (WebP format)
- [ ] Minify CSS and JavaScript
- [ ] Lazy load images
- [ ] Test animation performance (60fps)
- [ ] Add loading states

### Phase 7: Accessibility
- [ ] Add ARIA labels
- [ ] Test keyboard navigation
- [ ] Ensure color contrast (WCAG AA)
- [ ] Add focus indicators
- [ ] Test with screen readers

### Phase 8: Testing & Launch
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Performance audit (Lighthouse)
- [ ] SEO optimization
- [ ] Deploy to production

---

## 📝 JavaScript Implementation

### Scroll Animation Observer
```javascript
// scroll-animations.js

class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Trigger when 30% visible
    };
    
    this.init();
  }
  
  init() {
    // Create observer
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.observerOptions
    );
    
    // Observe all reveal elements
    const revealElements = document.querySelectorAll('[class*="reveal-"]');
    revealElements.forEach(el => this.observer.observe(el));
    
    // Observe stagger containers
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach(el => this.observer.observe(el));
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Optionally unobserve after animation
        // this.observer.unobserve(entry.target);
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
});
```

### Smooth Scroll Implementation
```javascript
// smooth-scroll.js

class SmoothScroll {
  constructor() {
    this.init();
  }
  
  init() {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll progress bar
    this.createProgressBar();
    this.updateProgressBar();
    
    // Listen to scroll events
    window.addEventListener('scroll', () => {
      this.updateProgressBar();
    }, { passive: true });
  }
  
  createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.id = 'scroll-progress';
    document.body.prepend(progressBar);
  }
  
  updateProgressBar() {
    const progressBar = document.getElementById('scroll-progress');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const scrollPercent = scrollTop / (documentHeight - windowHeight);
    progressBar.style.transform = `scaleX(${scrollPercent})`;
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new SmoothScroll();
});
```

### Main JavaScript Entry
```javascript
// main.js

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Initialize animations only if user hasn't requested reduced motion
  new ScrollAnimations();
  new SmoothScroll();
}

// Add any other global functionality here
```

---

## 🎯 Best Practices

### Performance
1. **Use CSS transforms** for animations (GPU accelerated)
2. **Avoid animating** `width`, `height`, `top`, `left`
3. **Use `will-change`** sparingly and remove after animation
4. **Lazy load** images and heavy content
5. **Debounce** scroll event listeners

### Accessibility
1. **Always respect** `prefers-reduced-motion`
2. **Maintain focus** indicators on interactive elements
3. **Use semantic HTML** (`<header>`, `<nav>`, `<main>`, `<footer>`)
4. **Provide alt text** for all images
5. **Ensure keyboard navigation** works throughout

### Mobile Optimization
1. **Touch targets** minimum 44x44px
2. **Avoid hover-only** interactions
3. **Test on real devices**, not just emulators
4. **Optimize images** for mobile bandwidth
5. **Use viewport meta tag**: `<meta name="viewport" content="width=device-width, initial-scale=1">`

### Code Organization
1. **Separate concerns**: HTML structure, CSS presentation, JS behavior
2. **Use CSS custom properties** for theming
3. **Comment complex** animations and logic
4. **Keep JavaScript modular** with classes
5. **Version control** with Git

---

## 🚀 Quick Start Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Your project description">
  <title>Your Project Title</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <!-- Scroll Progress Bar (added via JS) -->
  
  <!-- Header -->
  <header class="header">
    <div class="container">
      <!-- Navigation content -->
    </div>
  </header>
  
  <!-- Main Content -->
  <main>
    <!-- Hero Section -->
    <section class="section reveal-fade">
      <div class="container">
        <h1 class="heading-1">Welcome</h1>
      </div>
    </section>
    
    <!-- Additional Sections -->
    <section class="section reveal-up">
      <div class="container">
        <!-- Section content -->
      </div>
    </section>
  </main>
  
  <!-- Footer -->
  <footer class="footer reveal-fade">
    <div class="container">
      <!-- Footer content -->
    </div>
  </footer>
  
  <!-- Scripts -->
  <script src="js/scroll-animations.js"></script>
  <script src="js/smooth-scroll.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

---

## 📚 Additional Resources

### Documentation
- [MDN Web Docs - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Tricks - A Complete Guide to CSS Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)
- [Web.dev - Animations Guide](https://web.dev/animations/)

### Tools
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [WAVE](https://wave.webaim.org/) - Accessibility testing

---

## 🎉 Conclusion

This design system provides a solid foundation for building modern, animated websites with vanilla HTML, CSS, and JavaScript. Follow the guidelines, use the components, and customize as needed for your specific project requirements.

**Remember:**
- Start mobile-first
- Respect user preferences (reduced motion)
- Test on real devices
- Optimize for performance
- Maintain accessibility standards

Happy coding! 🚀
