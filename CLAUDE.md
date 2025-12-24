# CLAUDE.md

Guidance for Claude Code when working with this repository.

## Overview

Portfolio site showcasing 20 experiments/projects (AI/ML, data viz, gaming). Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS, deployed to Cloudflare Pages.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run preview  # Preview production build locally
npm run deploy   # Build and deploy to Cloudflare Pages
npm run test     # Run Vitest tests
```

## Architecture

**Stack**: Nuxt 4.2, Vue 3, TypeScript, Tailwind CSS, Three.js (WebGL), Cloudflare Pages

**Structure**:
```
app/
  pages/index.vue           # Main page (SiteHeader + ProjectGrid)
  components/
    SiteHeader.vue          # Nav header with external links
    ProjectGrid.vue         # 2-col grid of ProjectCards + SubscribeForm
    ProjectCard.vue         # Individual project link with hover effects
    SubscribeForm.vue       # Mailchimp email signup
    SpinningCube.client.vue # Three.js wireframe cube (client-only)
  composables/
    useSpinningCube.ts      # Three.js scene setup/teardown
  data/
    projects.ts             # Project[] array (key, title, url, renderer?)
  assets/
    css/main.css            # Tailwind imports
    css/projects.css        # Project card background images
    images/                 # 30 project preview images
```

**Key Patterns**:
- Vue 3 Composition API with `<script setup>`
- Client-only components via `.client.vue` suffix for browser APIs
- Tailwind for all styling
- Project data drives UI (20 projects split: first 4 featured, rest below subscribe form)

## Testing

Vitest with happy-dom for DOM simulation, @vue/test-utils for component testing.

## Build & Deploy

Nitro server with `cloudflare-pages` preset. Output to `dist/`.

- Project: `experiments-dimroc`
- Deploy: `npx wrangler pages deploy dist --project-name=experiments-dimroc`

## Code Style

- 2-space indents, single quotes, camelCase
- TypeScript strict mode
- Vue 3 `<script setup>` syntax
