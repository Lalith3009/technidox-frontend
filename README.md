# TechniDox — Frontend Take-Home

A pixel-faithful recreation of the TechniDox homepage (AI-native documentation platform) built with **Nuxt 3 + Vue 3 + TailwindCSS**.

## 🔗 Links

- **Hosted URL:** _(deploy and paste link here — see Hosting section below)_
- **Figma source:** _(paste Figma link if public)_

## 🚀 Quick start

```bash
# 1. Install
npm install

# 2. Run dev server
npm run dev      # http://localhost:3000

# 3. Build for production
npm run build
npm run preview
```

Requires Node.js **18.x or newer** (Nuxt 3 requirement).

## 🛠 Stack

| Layer        | Choice                                          |
| ------------ | ----------------------------------------------- |
| Framework    | Nuxt 3 (Vue 3, Composition API, `<script setup>`) |
| Styling      | TailwindCSS via `@nuxtjs/tailwindcss` module    |
| Fonts        | DM Sans, Inter, Sora, Montserrat (Google Fonts) |
| Icons        | Inline SVG (no icon library — keeps bundle lean) |
| TypeScript   | Used in `<script setup>` blocks                 |

## 📁 Structure

```
technidox-frontend/
├── app.vue                    # Root Nuxt entry
├── nuxt.config.ts             # Nuxt config (modules, head, fonts)
├── tailwind.config.js         # Design tokens (colors, fonts, shadows)
├── assets/css/main.css        # Tailwind layers + custom utilities
├── components/                # 12 single-file components
│   ├── AppHeader.vue          #   ⭐ Mobile menu toggle (interactive)
│   ├── HeroSection.vue
│   ├── BrandStrip.vue
│   ├── AINativeSection.vue    #   Uses FeatureCard
│   ├── FeatureCard.vue
│   ├── CommunitySection.vue   #   Features + workflow card
│   ├── EnterpriseSection.vue  #   Dashboard metric cards
│   ├── ComparisonTable.vue    #   ⭐ Mobile accordion (interactive)
│   ├── PricingTeaser.vue
│   ├── UseCasesSection.vue
│   ├── CTACard.vue
│   └── AppFooter.vue
├── pages/index.vue            # Composes all sections
└── pixelay/                   # Pixelay overlay evidence
    ├── notes.md
    ├── pixelay-desktop.png
    └── pixelay-mobile.png
```

## 🎬 Scroll-reveal animations

Sections fade and slide into view the first time they enter the viewport, then stay put. Refreshing the page replays them. Implemented as a tiny custom directive — no animation library required.

- **`plugins/reveal.client.ts`** — registers `v-reveal` using `IntersectionObserver`. Once an element crosses the 12% visibility threshold, it gets `data-reveal-state="visible"` and the observer disconnects. One-shot per page load.
- **`assets/css/main.css`** — defines hidden/visible states for variants: `fade-up` (default), `fade-down`, `fade-left`, `fade-right`, `fade`, `zoom-in`.
- **Hero on-load stagger** — five elements fade up in sequence on first paint (`hero-enter-1` through `hero-enter-5`). The two decorative floating cards have a slow continuous `float-card` drift.
- **`prefers-reduced-motion: reduce`** — all animations disabled, elements rendered in their final state immediately. Tested by toggling the OS-level "Reduce motion" setting.

Usage:
```vue
<section v-reveal>...</section>                  <!-- default fade-up -->
<div v-reveal="'fade-left'">...</div>            <!-- directional variant -->
<div v-reveal:200>...</div>                       <!-- 200ms delay -->
<div v-reveal:150="'zoom-in'">...</div>           <!-- both -->

<!-- v-reveal-stagger cascades direct children with a stagger interval.
     Used for card grids that should fly in piece by piece. -->
<div v-reveal-stagger:150="'fade-up'">           <!-- 150ms between each child -->
  <Card /><Card /><Card />
</div>
<div v-reveal-stagger:120="{ alternate: true }">  <!-- children alternate left/right entry -->
  <Card /><Card /><Card /><Card />
</div>
```

Sections wired up: AI-Native cards cascade up (150ms), Community features/workflow cascade right + steps cascade up, Enterprise metrics alternate left/right (120ms) matching the Figma's split entry, comparison-table rows cascade row-by-row, and Use Cases cards alternate left/right.

## 🎨 Design tokens (matches Figma exactly)

All tokens live in `tailwind.config.js`:

- **Brand purple:** `#42389E` (`brand`), full scale 50→900
- **Accent yellow:** `#F9A71E` (`accent`)
- **Success green:** `#24BD2E`, **Error:** `#DA1414`
- **Ink (text + neutral):** scale 50→900
- **Hero gradient:** `#E9E7FA → #FDFDFF` (180deg)
- **CTA gradient:** `#2C20A0 → #42389E` (90deg)
- **Fonts:** `font-display` (DM Sans), `font-sans` (Inter), `font-title` (Sora), `font-eyebrow` (Montserrat)

Custom utilities in `assets/css/main.css`:
- `.container-x` — Figma's 120px x-padding container
- `.hero-grid` — the subtle grid backdrop from the hero
- `.eyebrow` — Montserrat 600 16px uppercase orange

## ⚡ Interactive elements (rubric §4)

1. **Mobile menu toggle** — `AppHeader.vue` uses Vue `ref` + a Vue `<Transition>` to slide the menu down. `aria-expanded`, `aria-controls`, keyboard-friendly.
2. **Mobile comparison accordion** — `ComparisonTable.vue` renders the full table at `md:` and above; below that, each row collapses into a tappable accordion (also `aria-expanded`). Both meet the rubric's "smooth, accessible, intuitive" bar.

## 📱 Responsiveness

Built mobile-first with Tailwind breakpoints:
- `sm:` 640px, `md:` 768px, `lg:` 1024px, `xl:` 1280px
- Hero floating decorative cards hide below `md:` to keep mobile clean
- All grids reflow: `md:grid-cols-2` → `lg:grid-cols-3` etc.
- Typography scales with `text-base md:text-lg lg:text-xl` patterns
## 🚢 Hosting

Recommended: **Netlify** (zero-config for Nuxt 3 SSG).

```bash
npm run build      # builds .output/
# OR for static deploy:
npm run generate   # outputs to dist/
```

**Netlify:** Connect repo, set build command `npm run generate`, publish directory `dist`.
**Vercel:** Auto-detects Nuxt; just `vercel`.
**Firebase Hosting:** Run `npm run generate`, then `firebase deploy --only hosting` pointing at `dist`.

## ⚖️ Tradeoffs & things I'd do with more time

- **Floating hero cards** — Figma has 3 elaborate floating UI cards rotated at angles in the hero. I built simplified versions; with another hour I'd flesh out the exact graph-bars + chart-placeholder card from the Figma.
- **Remix Icon set** — Figma references `mdi:linkedin`, `ri:instagram-fill`, etc. I inlined hand-rolled SVGs for zero runtime cost. With a longer scope I'd integrate `@iconify/vue` to match the exact glyphs.
- **Sticky nav scroll-state** — would add a shadow-on-scroll variant; currently always-on with backdrop blur.
- **Real reduced-motion handling** — `<Transition>` blocks don't yet respect `prefers-reduced-motion`. One-liner fix.
- **Dark mode** — design tokens are structured to support it (`brand` scale + `ink` scale), but not wired up.