# Bite Battle Web - Internal Development

**⚠️ IMPORTANT: This website is for internal development only and MUST NOT be deployed publicly.**

## Overview

Bite Battle Web is the official website for the Bite Battle ecosystem. It serves as a bridge between Bite Battle (mobile game), Bite Friend (partner program), and Bite Bank (future integration).

This is the first internal development version (v1) with static placeholder content and a scalable architecture ready for future expansion.

## Tech Stack

- **Next.js** (latest) - React framework with App Router
- **React** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **App Router** - Next.js 13+ routing structure

## Project Structure

```
bite-battle-web/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page (/)
│   ├── globals.css        # Global styles + soft-glass utilities
│   ├── game/              # Game information page (/game)
│   ├── rewards/           # Rewards explanation page (/rewards)
│   ├── friend/            # Bite Friend partner program (/friend)
│   ├── blog/              # Developer updates (/blog)
│   ├── contact/           # Contact page (/contact)
│   └── legal/             # Privacy & Terms (/legal)
│
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Global navigation bar
│   ├── Footer.tsx         # Global footer
│   ├── SoftGlassCard.tsx  # Reusable soft-glass UI card
│   ├── HeroSection.tsx    # Home page hero section
│   ├── CharacterPreview.tsx  # Character showcase component
│   └── ArenaPreview.tsx   # Arena showcase component
│
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # TailwindCSS configuration
├── next.config.js         # Next.js configuration
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

**Note:** This is for internal development only. Do not deploy publicly.

## Design System

### Style Direction

The design follows a "Supercell × Pixar × Nintendo" aesthetic:
- **Soft-glass effects** - Frosted glass cards with backdrop blur
- **Warm gradients** - Orange, pink, purple color schemes
- **Friendly UI shapes** - Rounded corners, playful animations (to be added)
- **Warm, inviting feel** - Food-themed, approachable design

### Key Components

#### SoftGlassCard
Reusable card component with soft-glass effect. Used throughout the site for consistent UI.

```tsx
<SoftGlassCard className="optional-classes">
  {/* Your content */}
</SoftGlassCard>
```

#### CSS Utilities

- `.soft-glass` - Applies soft-glass effect (backdrop blur, transparency)
- `.gradient-warm` - Warm orange-to-pink gradient
- `.gradient-soft` - Soft blue-to-pink gradient
- `.gradient-fun` - Playful multi-color gradient

## Site Structure

### Pages

1. **Home (`/`)** - Hero section, character preview, trailer placeholder
2. **Game (`/game`)** - How to play, arenas, ingredients, weapons
3. **Rewards (`/rewards`)** - Real-world burger rewards explanation
4. **Bite Friend (`/friend`)** - Partner program for restaurants/food trucks
5. **Blog (`/blog`)** - Developer updates (empty placeholder)
6. **Contact (`/contact`)** - Contact information (hello@bitebattle.net)
7. **Legal (`/legal`)** - Privacy policy and terms of service placeholders

## Future Expansion

### Planned Features (Not in v1)

- **Animations**: Character bounce/tilt on hover, smooth page transitions
- **API Routes**: Backend integration for dynamic content
- **Admin Panel**: Content management system
- **Bite Friend Integration**: Real partner data and reward redemption
- **Bite Bank Integration**: Financial ecosystem connection
- **User Authentication**: Player accounts and progress tracking
- **Real Forms**: Contact forms, partner signup forms
- **Video Integration**: Actual game trailer videos

### How to Expand Each Module

#### Adding a New Page

1. Create a new folder in `/app` (e.g., `/app/newpage`)
2. Add `page.tsx` inside the folder
3. Update `Navbar.tsx` and `Footer.tsx` with navigation links

#### Adding a New Component

1. Create component file in `/components`
2. Export as default or named export
3. Import and use in pages or other components

#### Adding API Routes

1. Create `route.ts` or `route.js` in `/app/api/your-endpoint`
2. Export HTTP method handlers (GET, POST, etc.)
3. Use Next.js server-side features

#### Adding Animations

1. Install animation library (e.g., `framer-motion`)
2. Wrap components with animation providers
3. Add hover effects and transitions

#### Integrating Backend

1. Create API routes in `/app/api`
2. Add environment variables (`.env.local`)
3. Connect to database or external services
4. Update components to fetch real data

## Development Guidelines

- **No Public Deployment**: This is internal development only
- **TypeScript First**: All new code should be typed
- **Component Reusability**: Use SoftGlassCard and other shared components
- **Consistent Styling**: Follow the soft-glass, gradient design system
- **Modular Structure**: Keep components and pages organized and separated

## Contact

For questions or issues, contact: **hello@bitebattle.net**

---

**Version:** 1.0.0 (Internal Development)  
**Last Updated:** 2024

