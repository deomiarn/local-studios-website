# Local Studios Website - Project Setup Complete

## Overview
Next.js 14+ project initialized with TypeScript, Tailwind CSS, and shadcn/ui. Fully responsive multi-page site with German localization.

## Project Configuration

### Tech Stack
- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.16 with brand colors
- **Components**: shadcn/ui with custom config
- **Animation**: Framer Motion 12.23.24
- **Icons**: lucide-react
- **Utilities**: clsx, tailwind-merge

### Brand Colors (CSS Variables)
```
--ink: #111827          (Primary text/background)
--white: #ffffff        (White backgrounds)
--mist: #f3f4f6         (Light neutral)
--muted-text: #585d68   (Secondary text)
```

### Typography
- **Headers**: Helvetica (system font fallback)
- **Body**: Inter from Google Fonts
- **Weights**: Medium (500) for headers, Regular (400) for body

## Project Structure

```
/
├── app/
│   ├── (routes)/                    # Main routes
│   │   ├── page.tsx                 # Home page
│   │   ├── leistungen/page.tsx
│   │   ├── projekte/page.tsx
│   │   ├── ueber-uns/page.tsx
│   │   ├── kontakt/page.tsx
│   │   ├── datenschutz/page.tsx
│   │   └── impressum/page.tsx
│   ├── layout.tsx                   # Root layout (German lang)
│   └── globals.css                  # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx               # Navigation header
│   │   └── Footer.tsx               # Site footer
│   ├── ui/                          # shadcn/ui components
│   └── sections/                    # Page-specific sections
├── lib/
│   └── utils.ts                     # Utility functions (cn)
├── public/
│   └── images/                      # Image assets
├── tailwind.config.ts               # Tailwind configuration
├── tsconfig.json                    # TypeScript config
├── next.config.js                   # Next.js config
├── postcss.config.js                # PostCSS config
├── .eslintrc.json                   # ESLint rules
├── .prettierrc.json                 # Prettier formatting
└── components.json                  # shadcn/ui config
```

## Available Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3001)

# Production
npm run build            # Build optimized production bundle
npm start               # Start production server

# Code Quality
npm run lint            # Run ESLint on .ts and .tsx files
npm run format          # Format code with Prettier
npm run type-check      # Check TypeScript types without emitting

# Utilities
npm install             # Install dependencies
```

## CSS Classes

### Containers
- `.container-wide` - Max width 80rem, centered with padding
- `.container-default` - Max width 64rem, centered with padding

### Buttons
- `.btn-primary` - Ink background with white text
- `.btn-secondary` - Border with hover effect

### Utilities
- `.text-muted` - Apply muted text color

## Configuration Files

### tailwind.config.ts
- Custom color palette (ink, mist, muted-text)
- Custom font families (display, sans)
- Extended with brand colors

### tsconfig.json
- ES2020 target
- Strict mode enabled
- Path alias: `@/*` maps to project root
- DOM types included for browser APIs

### next.config.js
- React Strict Mode enabled
- Remote image optimization enabled

### .eslintrc.json
- Next.js core web vitals rules
- TypeScript support
- React hooks rules

## Getting Started

1. **Install dependencies** (already done)
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Runs on http://localhost:3001 (or available port)

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

4. **Format code**
   ```bash
   npm run format
   ```

## Key Features

- **Server Components**: Root layout and page components use RSC
- **Client Components**: Header with interactive mobile menu
- **Responsive Design**: Mobile-first Tailwind CSS
- **German Locale**: HTML lang="de-CH" configured
- **Meta Tags**: OG and Twitter cards on homepage
- **Type Safe**: Full TypeScript coverage

## Next Steps for Design System

1. **Add Components**: Use `npx shadcn@latest add [component]`
2. **Create Sections**: Add page-specific components to `/components/sections`
3. **Customize Colors**: Extend brand colors in `tailwind.config.ts`
4. **Add Fonts**: Import custom fonts in `app/globals.css`
5. **Setup CMS**: Integrate Contentful, Sanity, or similar
6. **Deploy**: Ready for Vercel, Netlify, or self-hosted

## Build Output
- Production build optimized with Turbopack
- Static pre-rendering for all 7 routes
- CSS modules with brand colors applied
- Responsive images with Next.js Image optimization

## Notes

- All paths use absolute `@/` imports
- Components use `'use client'` directive for client-side features
- Footer auto-updates year with `new Date().getFullYear()`
- Mobile navigation with animated hamburger menu
- No external dependencies for styling (pure Tailwind)
