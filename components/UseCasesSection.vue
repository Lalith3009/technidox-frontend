<script setup lang="ts">
const cases = [
  {
    eyebrow: 'Open Source Teams',
    title: 'Ship docs as fast as you ship code',
    body: 'Maintainers spend hours triaging issues that better docs would have prevented. TechniDox flips that ratio so contributors stay in the codebase, not the inbox.',
    bullets: ['78% less burden on maintainers', 'Non-technical contributors via micro-tasks', 'Gamified streaks keep contributors returning'],
    accent: 'brand',
    inverted: false
  },
  {
    eyebrow: 'Engineering Enablement',
    title: 'Onboard developers 2.3x faster',
    body: 'New hires get accurate, current docs on day one. Stop losing two weeks per engineer to tribal knowledge.',
    bullets: ['CI/CD quality gates prevent doc regressions', 'Auto-generated docs on every merge', '34% fewer how-do-I interruptions'],
    accent: 'accent',
    inverted: false
  },
  {
    eyebrow: 'Platform Teams',
    title: 'Documentation that scales with your APIs',
    body: 'Internal platforms collapse without good docs. Keep API reference, runbooks, and decision records synced with reality.',
    bullets: ['Auto-synced API reference on every deploy', 'Multi-format export: OpenAPI, MDX, HTML', 'Confidence alerts flag doc drift in real time'],
    accent: 'success',
    inverted: false
  },
  {
    eyebrow: 'Enterprise Documentation',
    title: 'Documentation your auditors will approve',
    body: 'Compliance-grade audit trails, role-based reviews, and executive-ready ROI reporting baked in.',
    bullets: ['ISO 27001 and SOC2 compliance reporting', 'Full audit trail for every doc change', 'Executive ROI dashboards out of the box'],
    accent: 'brand',
    inverted: true
  }
]

const accentBg: Record<string, string> = {
  brand: 'bg-brand/10 text-brand',
  accent: 'bg-accent/10 text-accent',
  success: 'bg-success/10 text-success'
}
const accentCheck: Record<string, string> = {
  brand: 'border-brand text-brand',
  accent: 'border-accent text-accent',
  success: 'border-success text-success'
}
</script>

<template>
  <section id="use-cases" class="bg-white py-20 md:py-28 lg:py-32">
    <div class="container-x">
      <div class="mb-16 text-center md:mb-20">
        <p class="eyebrow">Use Cases</p>
        <h2 class="mt-4 font-display text-3xl font-bold capitalize leading-tight text-brand md:text-4xl lg:text-5xl">
          Built for every team that ships code
        </h2>
        <p class="mx-auto mt-6 max-w-3xl font-display text-lg font-semibold leading-snug text-ink-500 md:text-xl lg:text-2xl">
          Whether you maintain an open source library or run a 500-engineer platform org, TechniDox grows with you.
        </p>
      </div>

      <div v-reveal-stagger:140="{ alternate: true }" class="grid gap-8 md:grid-cols-2">
        <article v-for="c in cases" :key="c.title" class="rounded-2xl border border-ink-400/40 p-8 shadow-card-soft" :class="c.inverted ? 'bg-brand text-white' : 'bg-white'">
          <div class="mb-8 flex items-center gap-6">
            <span class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl" :class="c.inverted ? 'bg-surface-tint text-brand' : accentBg[c.accent]" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path d="M12 2L4 5v6c0 5.5 3.84 10.74 8 12 4.16-1.26 8-6.5 8-12V5l-8-3z" />
              </svg>
            </span>
            <div>
              <p class="font-sans text-base uppercase tracking-wide" :class="c.inverted ? 'text-ink-100' : 'text-ink'">{{ c.eyebrow }}</p>
              <h3 class="mt-1 font-display text-xl font-normal leading-tight md:text-2xl lg:text-[28px]" :class="c.inverted ? 'text-white' : 'text-ink'">{{ c.title }}</h3>
            </div>
          </div>

          <p class="font-sans text-base leading-relaxed md:text-lg" :class="c.inverted ? 'text-ink-100' : 'text-ink-400'">{{ c.body }}</p>

          <ul class="mt-6 space-y-3">
            <li v-for="b in c.bullets" :key="b" class="flex items-start gap-2 font-sans text-base md:text-lg" :class="c.inverted ? 'text-ink-100' : 'text-ink-400'">
              <span class="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2" :class="c.inverted ? 'border-surface-tint text-surface-tint' : accentCheck[c.accent]" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-2.5 w-2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {{ b }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
