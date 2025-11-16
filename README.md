## Asha Ramanathan · Machine Learning Engineer Portfolio

This repository contains the production-ready portfolio for **Asha Ramanathan**, a senior machine learning engineer focused on responsible AI, ML platforms, and applied research.

Built with the Next.js App Router, Tailwind CSS v4, and modern glassmorphism design patterns, the site highlights expertise, experience, featured projects, publications, testimonials, and direct contact paths.

### Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the portfolio locally. Edits to `src/app/page.tsx` and supporting components hot-reload automatically.

### Available Scripts

- `npm run dev` – start the development server
- `npm run lint` – run ESLint against the codebase
- `npm run build` – create an optimized production build
- `npm start` – serve the production build locally

### Tech Stack Highlights

- **Next.js 16** App Router with static rendering for fast loads
- **Tailwind CSS v4** for utility-first styling and theme tokens
- Modular React components for reusable glass cards, badges, and section headers
- Comprehensive content model defined in `src/data.ts`

### Deployment

The project is optimized for Vercel. Build locally (`npm run build`) before deploying:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-a6fdc519
```

After deployment, verify the production URL: `https://agentic-a6fdc519.vercel.app`.
