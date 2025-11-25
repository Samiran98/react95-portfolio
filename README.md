# React95 Portfolio

> A nostalgic Windows 95-inspired portfolio built with modern web technologies

![React95 Badge](https://img.shields.io/badge/React-95%20UI-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple?style=flat-square&logo=vite)

A small portfolio built with React, TypeScript and Vite that uses a Windows 95-inspired UI (react95) to present projects, skills and contact information. This repository is a focused, client-side portfolio template meant to be customized and deployed quickly.

## 🎯 Project purpose and context

- 🖼️ Showcase projects, skills and a short bio with a nostalgic Windows 95 visual style
- ⚡ Minimal, accessible single-page React app with TypeScript for type safety and Vite for fast development builds
- 🎨 Suitable for developers who want a retro aesthetic while keeping modern tooling (HMR, linting, testing, CI/CD)

## ✨ Main features

- ⚛️ React + TypeScript + Vite
- 🎭 React95-based UI for consistent retro visuals
- ♿ Responsive layout and keyboard-accessible components
- 📇 Project cards with optional links (live / repo)
- 📧 Contact section (static or connected to a serverless function / form provider)
- 🔍 ESLint + TypeScript linting configuration
- 🚀 Build scripts ready for deployment (Vercel, Netlify, GitHub Pages, etc.)

## 🚀 Quick start

### Requirements

```bash
Node.js 18+ (LTS recommended)
npm, Yarn or pnpm
```

### Installation

Choose your package manager:

**npm:**
```bash
npm install
```

**pnpm:**
```bash
pnpm install
```

**yarn:**
```bash
yarn install
```

### Development

Start the dev server with hot module reloading:

```bash
npm run dev
```

### Production Build

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

### Code Quality

Linting and tests:

```bash
npm run lint
npm run test
```

> **Note:** Adjust commands if you use pnpm/yarn instead of npm.

## 📁 Project structure

```
react95-portfolio/
├── public/                    # Static assets
├── src/
│   ├── main.tsx              # App bootstrap
│   ├── App.tsx               # Root component and routes
│   ├── components/           # Reusable UI components
│   │   ├── ProjectCard.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/                # Page-level components
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   └── About.tsx
│   ├── styles/               # Global styles and theme overrides
│   └── data/                 # Local project metadata
├── vitest.config.ts          # Test configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Scripts and dependencies
```

Customize the structure to your needs. Keep user content and credentials out of the repo (see [Environment](#-environment--secrets)).

## 🔐 Environment & secrets

This is a client-side portfolio. If you add contact forms, serverless functions, or third-party APIs:

- ✅ Store keys outside the repo
- ✅ Use environment variables or secrets in your deployment platform
- ✅ Create a `.env.example` with required variable names
- ❌ Never commit real secrets

**Example `.env.example`:**
```env
VITE_CONTACT_FORM_ID=your_form_id_here
VITE_API_ENDPOINT=https://api.example.com
```

## 🌐 Deployment

### Popular hosting options

| Platform | Setup | Command |
|----------|-------|---------|
| **Vercel** | Zero-config for Vite | `vercel deploy` |
| **Netlify** | Build: `npm run build`, Publish: `dist` | Auto-deploy from Git |
| **GitHub Pages** | Use GitHub Actions or deploy script | See Actions workflow |

### Vercel configuration example

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

## 🎨 Linting & formatting

ESLint is configured for TypeScript. Update rules in `.eslintrc` to match your preferences.

**Optional:** Add Prettier for consistent code formatting:

```bash
npm install -D prettier
```

## 🧪 Testing

Use unit tests for component verification:

- **Vitest** or **Jest** for unit tests
- **Cypress** or **Playwright** for end-to-end tests

**Example test:**
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard title="My Project" description="Test" />);
    expect(screen.getByText('My Project')).toBeInTheDocument();
  });
});
```

## ✅ Customization checklist

- [ ] Replace placeholder content (name, bio, projects)
- [ ] Add project screenshots / gifs to `public/` and reference in project data
- [ ] Connect contact form to serverless function or form provider
- [ ] Update metadata (title, description, Open Graph image)
- [ ] Test accessibility and keyboard navigation
- [ ] Choose and add a LICENSE file
- [ ] Update contact information / social links

## 🤝 Contributing

Contributions are welcome! For larger changes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Keep changes focused and document UI/behavior changes.

## 📄 License

Choose a license for your project. **MIT recommended** for templates.

Add a `LICENSE` file to the repository.

## 👏 Contact & Attribution

- This project uses **[react95](https://github.com/react95-io/React95)** for visuals — keep attribution where required
- For questions or customizations, update this README with your contact method or link to your live site

---

**Built with ❤️ and Windows 95 nostalgia**