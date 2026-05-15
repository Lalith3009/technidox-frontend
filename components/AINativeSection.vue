<script setup lang="ts">
import FeatureCard from './FeatureCard.vue'

const cards = [
  {
    key: 'gen',
    iconBg: 'bg-cta-gradient',
    checkColor: 'border-brand text-brand',
    cardBg: 'bg-[#EAE9F5]',
    title: 'AI Documentation Generator',
    description:
      'Automatically converts codebases into comprehensive documentation. Detects intent, structure, and edge cases without manual prompting.',
    bullets: [
      'Intelligent code analysis',
      'Multi-language support',
      'Export to any format'
    ]
  },
  {
    key: 'score',
    iconBg: 'bg-accent',
    checkColor: 'border-accent text-accent',
    cardBg: 'bg-[#FDF5E9]',
    title: 'Documentation Quality Scorer',
    description:
      'Real-time confidence scoring rates clarity, accuracy, and completeness. Flags drift before it ships and points reviewers to the exact lines that need attention.',
    bullets: [
      'Multi-dimensional scoring',
      'Confidence indicators',
      'Actionable recommendations'
    ]
  },
  {
    key: 'human',
    iconBg: 'bg-success',
    checkColor: 'border-success text-success',
    cardBg: 'bg-[#EEFAEC]',
    title: 'Human-in-the-Loop Review',
    description:
      'Low-confidence content routes to the right expert reviewer automatically, so quality compounds instead of decaying.',
    bullets: [
      'Smart routing system',
      'Expert reviewer network',
      'Quality assurance workflow'
    ]
  }
]
</script>

<template>
  <section id="ai-native" class="bg-white py-20 md:py-28 lg:py-32">
    <div class="container-x">
      <!-- Section header -->
      <div class="mb-16 text-center md:mb-20">
        <p class="eyebrow">AI-Native Documentation Engine</p>
        <h2
          class="mt-4 font-display text-3xl font-bold capitalize leading-tight text-brand md:text-4xl lg:text-5xl"
        >
          AI-Native Documentation Engine
        </h2>
        <p
          class="mx-auto mt-6 max-w-3xl font-display text-lg font-semibold leading-snug text-ink-500 md:text-xl lg:text-2xl"
        >
          Three revolutionary AI engines working together to transform how
          documentation gets written, scored, and improved.
        </p>
      </div>

      <!-- Cards grid -->
      <div v-reveal-stagger:150="'fade-up'" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          v-for="card in cards"
          :key="card.key"
          :icon-bg="card.iconBg"
          :check-color="card.checkColor"
          :card-bg="card.cardBg"
          :title="card.title"
          :description="card.description"
          :bullets="card.bullets"
        >
          <template #icon>
            <!-- Generic icon — different per card via key -->
            <svg
              v-if="card.key === 'gen'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7 text-white"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <svg
              v-else-if="card.key === 'score'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7 text-white"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7 text-white"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M9 10h6" />
              <path d="M9 6h6" />
            </svg>
          </template>
        </FeatureCard>
      </div>
    </div>
  </section>
</template>
