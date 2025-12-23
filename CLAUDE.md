# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run preview  # Preview production build locally
npm run deploy   # Deploy to Cloudflare via NuxtHub
npm run test     # Run Vitest tests
```

## Architecture

Nuxt 4 TypeScript portfolio site with NuxtHub (Cloudflare deployment) and Tailwind CSS.

**Structure**:
- `app/pages/` - Nuxt pages (index.vue is main view)
- `app/components/` - Vue components (ProjectCard, ProjectGrid, SiteHeader, SubscribeForm, SpinningCube.client)
- `app/composables/` - Vue composables (useSpinningCube for Three.js)
- `app/assets/` - CSS and images
- `data/` - TypeScript data files (projects.ts)

**Key Patterns**:
- Nuxt 4 with Vue 3 Composition API
- TypeScript throughout
- Tailwind CSS for styling
- Three.js WebGL via client-only component (`.client.vue` suffix)

## Build

Vite-powered with Nitro server. Deployed to Cloudflare Pages via NuxtHub.

## Code Style

- 2-space indents, single quotes, camelCase
- TypeScript strict mode
- Vue 3 `<script setup>` syntax
