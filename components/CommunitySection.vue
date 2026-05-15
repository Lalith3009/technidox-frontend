<script setup lang="ts">
const features = [
  {
    title: 'Gamified Contributions',
    desc: 'Streak tracking, impact badges, and achievement systems that turn contributing into a habit.',
    iconColor: 'bg-brand/10 text-brand',
    iconKey: 'trophy'
  },
  {
    title: 'Micro-Contribution Architecture',
    desc: 'Complex tasks broken into 5-10 minute contributions so anyone can pitch in without blocking their day.',
    iconColor: 'bg-accent/10 text-accent',
    iconKey: 'puzzle'
  },
  {
    title: 'Mentorship Matching',
    desc: 'AI-powered pairing of experienced contributors with newcomers, building the feedback loop that creates real maintainers.',
    iconColor: 'bg-success/10 text-success',
    iconKey: 'users'
  },
  {
    title: 'Peer Validation Network',
    desc: 'Accept, edit, and reject workflows that improve AI suggestions while building trust between contributors.',
    iconColor: 'bg-brand/10 text-brand',
    iconKey: 'shield'
  }
]

const steps = [
  { n: '1', color: 'bg-brand/10 text-brand', title: 'AI generates documentation', note: 'From codebase analysis', state: 'done' },
  { n: '2', color: 'bg-accent/10 text-accent', title: 'Quality scoring & routing', note: 'Confidence: 72% - Review needed', state: 'review' },
  { n: '3', color: 'bg-success/10 text-success', title: 'Community review', note: '3 contributors validated', state: 'done' },
  { n: '4', color: 'bg-success text-white', title: 'Published & improving', note: 'AI learns from feedback', state: 'final' }
]
</script>

<template>
  <section class="bg-white py-20 md:py-28 lg:py-32">
    <div class="container-x">
      <div class="mb-16 text-center md:mb-20">
        <p class="eyebrow">Community-Driven Improvement at Scale</p>
        <h2 class="mt-4 font-display text-3xl font-bold capitalize leading-tight text-brand md:text-4xl lg:text-5xl">
          Community-Driven Improvement at Scale
        </h2>
        <p class="mx-auto mt-6 max-w-3xl font-display text-lg font-semibold leading-snug text-ink-500 md:text-xl lg:text-2xl">
          Democratize documentation contributions with gamified workflows and an architecture designed for incremental impact.
        </p>
      </div>

      <div v-reveal-stagger:120="'fade-right'" class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ul class="space-y-12">
          <li v-for="f in features" :key="f.title" class="flex gap-4">
            <span class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl" :class="f.iconColor" aria-hidden="true">
              <svg v-if="f.iconKey === 'trophy'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4" />
                <path d="M4 22h16" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <svg v-else-if="f.iconKey === 'puzzle'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              <svg v-else-if="f.iconKey === 'users'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <div class="space-y-2">
              <h3 class="font-display text-xl font-normal text-ink md:text-2xl lg:text-[28px]">{{ f.title }}</h3>
              <p class="font-sans text-base text-ink-400 md:text-lg">{{ f.desc }}</p>
            </div>
          </li>
        </ul>

        <div v-reveal-stagger:140="'fade-up'" class="space-y-4 rounded-2xl border border-ink-400/40 bg-white p-6 shadow-card-soft md:p-8">
          <div v-for="step in steps" :key="step.n" class="flex items-center gap-4 rounded-lg border border-ink-300 bg-ink-50 p-4 md:gap-6">
            <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-sans font-bold" :class="step.color">
              {{ step.n }}
            </span>
            <div class="flex-1 space-y-1">
              <p class="font-display text-lg font-semibold text-ink md:text-xl">{{ step.title }}</p>
              <p class="font-sans text-sm text-ink-400 md:text-base">{{ step.note }}</p>
            </div>
            <span v-if="step.state === 'done'" class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-success text-success" aria-label="Done">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-2.5 w-2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span v-else-if="step.state === 'review'" class="rounded bg-accent/10 px-2 py-1 font-sans text-xs font-semibold text-accent">Review</span>
            <span v-else class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-success" aria-label="Final">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
