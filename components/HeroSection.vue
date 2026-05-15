<script setup lang="ts">
const heroFeatures = [
  'AI-generated docs in minutes',
  'Confidence scoring built in',
  'Enterprise-grade compliance'
]
</script>

<template>
  <section
    class="relative overflow-hidden bg-hero-gradient"
    aria-labelledby="hero-heading"
  >
    <!-- Faint grid pattern matching Figma's Group 99 arrow lines -->
    <div class="absolute inset-0 hero-grid opacity-60" aria-hidden="true"></div>

    <!-- Decorative floating mock cards (subtle on mobile, fuller on desktop) -->
    <div
      class="float-card pointer-events-none absolute -left-12 top-40 hidden h-72 w-60 -rotate-6 rounded-2xl border border-ink-200 bg-white p-6 shadow-card-soft md:block lg:left-12"
      style="--card-rot: -6deg"
      aria-hidden="true"
    >
      <div class="h-14 w-14 rounded-full bg-surface-soft"></div>
      <div class="mt-5 h-3 w-3/4 rounded-full bg-ink-100"></div>
      <div class="mt-2 h-3 w-1/2 rounded-full bg-ink-100"></div>
      <div class="mt-5 space-y-2">
        <div class="h-2 w-full rounded-full bg-ink-100"></div>
        <div class="h-2 w-full rounded-full bg-ink-100"></div>
        <div class="h-2 w-2/3 rounded-full bg-ink-100"></div>
      </div>
      <div
        class="mt-5 rounded-lg bg-success-50 px-4 py-2 text-center font-sans text-xs font-medium text-success"
      >
        Sent
      </div>
    </div>
    <div
      class="float-card pointer-events-none absolute -right-12 top-32 hidden h-80 w-64 rotate-9 rounded-2xl border border-ink-200 bg-white p-6 shadow-card-soft md:block lg:right-12"
      style="transform: rotate(9deg); --card-rot: 9deg; animation-duration: 9s; animation-delay: 1.5s"
      aria-hidden="true"
    >
      <div class="space-y-3">
        <div class="h-3 w-3/4 rounded-full bg-ink-50"></div>
        <div class="h-3 w-1/2 rounded-full bg-ink-50"></div>
        <div class="h-2 w-full rounded-full bg-ink-50"></div>
        <div class="h-2 w-full rounded-full bg-ink-50"></div>
        <div class="h-2 w-2/3 rounded-full bg-ink-50"></div>
        <div class="h-2 w-3/4 rounded-full bg-ink-50"></div>
      </div>
    </div>

    <div
      class="container-x relative flex min-h-[min(900px,90vh)] flex-col items-center justify-center py-20 text-center md:py-28 lg:py-32"
    >
      <!-- Product pill -->
      <div
        class="hero-enter hero-enter-1 mb-8 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 shadow-chip"
      >
        <span
          class="h-2 w-2 rounded-full bg-success"
          aria-hidden="true"
        ></span>
        <span class="font-sans text-sm text-ink-900">Aortem&rsquo;s Product</span>
      </div>
      <h1
        id="hero-heading"
        class="hero-enter hero-enter-2 mx-auto max-w-[1400px] text-center font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[72px]"
      >
        <!-- First Line -->
        <span class="italic text-brand">Documentation</span>
        <span class="mx-2 text-ink-900">that</span>
        <span class="text-accent">builds</span>
        <span class="mx-2 text-ink-900">itself,</span>

        <br />

        <!-- Second Line -->
        <span class="whitespace-nowrap">
          <span class="italic text-brand">improves</span>
          <span class="mx-2 text-ink-900">itself, and proves its</span>
          <span class="text-accent">value</span>
        </span>
      </h1>
      <p
        class="hero-enter hero-enter-3 mt-6 max-w-5xl font-display text-lg font-semibold leading-snug text-ink-500 md:text-xl lg:text-2xl"
      >
        AI-native platform that generates documentation from code, scores quality
        in real-time, routes low confidence content to expert review, and
        delivers measurable ROI for enterprise teams.
      </p>

      <!-- CTAs -->
      <div class="hero-enter hero-enter-4 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        <a
          href="#cta"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-cta-gradient px-6 py-4 font-sans text-lg font-semibold text-white shadow-cta transition-transform hover:-translate-y-0.5"
        >
          Book a Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#cta"
          class="inline-flex items-center justify-center rounded-lg border border-brand bg-white px-6 py-4 font-sans text-lg font-semibold text-brand transition-colors hover:bg-surface-tint"
        >
          Join Enterprise Waitlist
        </a>
      </div>

      <!-- Feature checks -->
      <ul
        class="hero-enter hero-enter-5 mt-12 flex flex-col items-center gap-4 md:flex-row md:gap-12"
      >
        <li
          v-for="item in heroFeatures"
          :key="item"
          class="flex items-center gap-2 font-sans text-base font-medium text-brand md:text-lg lg:text-xl"
        >
          <span
            class="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-success text-success"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-3 w-3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
