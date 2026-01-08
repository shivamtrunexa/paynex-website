# PayNex - Pixel Perfect Website

A modern, animated one-page website for PayNex, built with React, TypeScript, and Tailwind CSS. Features smooth scroll animations, responsive design, and a comprehensive design system.

## 🚀 Project Overview

PayNex is a premium payment solutions platform website showcasing various payment services, operations, and products. The site features:

- **Smooth scroll animations** using Framer Motion
- **Pixel-perfect responsive design** across all breakpoints (mobile to 5xl screens)
- **Modern UI components** built with shadcn/ui
- **Comprehensive design system** with custom Tailwind configuration
- **Optimized performance** with Vite and React

## 📁 Project Structure

```
paynex-pixel-perfect/
├── public/                      # Static assets
│   ├── aboutus/                # About section images
│   ├── domains/                # Domain-specific images
│   ├── favicon/                # Favicon files
│   ├── howitworks/             # How It Works section images
│   ├── operations/             # Operations section images
│   ├── partners/               # Partner logos
│   ├── payment-choices/        # Payment choice icons
│   ├── payment-types/          # Payment type images (20 files)
│   ├── paynex/                 # Brand assets
│   ├── philosophy/             # Philosophy section images
│   ├── products/               # Product images
│   └── robots.txt
│
├── src/
│   ├── components/             # React components (65 files)
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── About.tsx           # About section
│   │   ├── CTA.tsx             # Call-to-action section
│   │   ├── Domains.tsx         # Domains section with staggered animations
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Freedom.tsx         # Freedom section
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with animations
│   │   ├── HowItWorks.tsx      # How It Works section
│   │   ├── Integration.tsx     # Integration section
│   │   ├── NavLink.tsx         # Navigation link component
│   │   ├── Operations.tsx      # Operations section
│   │   ├── PaymentTypes.tsx    # Payment types showcase
│   │   ├── Philosophy.tsx      # Philosophy section
│   │   ├── Products.tsx        # Products section
│   │   ├── RevealSection.tsx   # Scroll reveal wrapper component
│   │   └── SmoothScroll.tsx    # Smooth scroll implementation
│   │
│   ├── hooks/                  # Custom React hooks (2 files)
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Page components
│   │   ├── Index.tsx           # Main landing page
│   │   └── NotFound.tsx        # 404 page
│   │
│   ├── App.tsx                 # Root application component
│   ├── App.css                 # Application styles
│   ├── index.css               # Global styles & Tailwind imports
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts           # Vite type definitions
│
├── .agent/                     # Agent workflows
├── DESIGN_SYSTEM.md            # Comprehensive design system documentation
├── HERO_ANIMATIONS.md          # Hero section animation specifications
├── SMOOTH_SCROLL_IMPLEMENTATION.md  # Scroll implementation guide
├── components.json             # shadcn/ui configuration
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # TypeScript app configuration
├── tsconfig.node.json          # TypeScript Node configuration
└── vite.config.ts              # Vite configuration
```

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### UI Components & Styling
- **shadcn/ui** - Re-usable component library built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives
- **Framer Motion 12.23.26** - Animation library
- **class-variance-authority** - Component variant management
- **tailwindcss-animate** - Animation utilities

### Additional Libraries
- **React Router DOM 6.30.1** - Client-side routing
- **TanStack Query 5.83.0** - Data fetching and caching
- **React Hook Form 7.61.1** - Form management
- **Zod 3.25.76** - Schema validation
- **Lucide React** - Icon library
- **Iconoir React** - Additional icons
- **Sonner** - Toast notifications
- **next-themes** - Theme management

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS processing
- **@vitejs/plugin-react-swc** - Fast React refresh

## 🎨 Design System

The project includes a comprehensive design system documented in `DESIGN_SYSTEM.md` featuring:

### Custom Breakpoints
```typescript
screens: {
  'xl': '1440px',   // Medium-large screens
  '3xl': '1920px',  // Full HD
  '4xl': '2560px',  // 2K
  '5xl': '3200px',  // Ultra-wide
}
```

### Typography
- **Primary Font**: Instrument Sans
- **Display Font**: Syne
- Custom font sizes and line heights for each breakpoint

### Color Palette
- **PayNex Dark**: Custom dark theme colors
- **PayNex Blue**: Brand primary colors
- **PayNex Navy**: Secondary brand colors
- Full HSL-based color system for consistency

### Animation System
- Scroll-triggered reveal animations
- Staggered card animations
- Smooth transitions with Framer Motion
- Reduced motion support for accessibility

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or bun package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd paynex-pixel-perfect
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🔧 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🎯 Key Features

### 1. Smooth Scroll Animations
- Custom `SmoothScroll` component wrapping the entire application
- `RevealSection` component for viewport-triggered animations
- Directional animations (up, down, left, right, fade, scale)
- Configurable delays and durations

### 2. Responsive Design
- Mobile-first approach
- Pixel-perfect layouts for xl (1440px) and 3xl (1920px+) breakpoints
- Optimized typography scaling across all screen sizes
- Touch-friendly interactive elements

### 3. Component Architecture
- **Header**: Sticky navigation with smooth scroll links
- **Hero**: Animated hero section with staggered text reveals
- **About**: Company introduction
- **HowItWorks**: Process explanation
- **Philosophy**: Company values
- **Operations**: Service operations showcase
- **Integration**: Integration capabilities
- **PaymentTypes**: Payment method showcase (20+ types)
- **Freedom**: Freedom of choice section
- **Domains**: Industry domains with staggered card animations
- **Products**: Product offerings
- **CTA**: Call-to-action section
- **Footer**: Site footer with links

### 4. Performance Optimizations
- Vite for fast builds and HMR
- Code splitting with React Router
- Lazy loading of images
- Optimized animations using CSS transforms
- React Query for efficient data management

## 🎨 Customization

### Tailwind Configuration
Modify `tailwind.config.ts` to customize:
- Color schemes
- Breakpoints
- Spacing scales
- Typography
- Animations

### Design Tokens
Global CSS variables in `src/index.css`:
- Color palette
- Font families
- Border radius values
- Shadow definitions

### Component Variants
Using `class-variance-authority` for component variants:
```typescript
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "...",
        outline: "...",
      },
    },
  }
);
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Reduced motion support via `prefers-reduced-motion`
- Color contrast compliance

## 📄 Documentation

Additional documentation files:
- **DESIGN_SYSTEM.md** - Complete design system guide
- **HERO_ANIMATIONS.md** - Hero section animation specifications
- **SMOOTH_SCROLL_IMPLEMENTATION.md** - Scroll behavior documentation

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deploy Options
- **Vercel** - Recommended for Next.js/React apps
- **Netlify** - Easy static site deployment
- **GitHub Pages** - Free hosting for static sites
- **Cloudflare Pages** - Fast global CDN

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev) and [Iconoir](https://iconoir.com)
- Animations powered by [Framer Motion](https://www.framer.com/motion)

## 📞 Support

For support, please contact the development team or open an issue in the repository.

---

**Built with ❤️ for PayNex**
