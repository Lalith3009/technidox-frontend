<script setup lang="ts">
const rows = [
  'AI-native architecture',
  'Confidence scoring per doc',
  'Multi-dimensional quality assessment',
  'Human-in-the-loop review workflows',
  'Gamified community contributions',
  'Real-time ROI dashboard',
  'ISO / SOC2 compliance reporting',
  'CI/CD quality gate integration',
  'Basic markdown editing',
  'Team collaboration'
]

// First 8 features: TechniDox yes, Traditional no. Last 2: both yes.
const technidox = rows.map(() => true)
const traditional = rows.map((_, i) => i >= 8)

const expandedRow = ref<number | null>(null)
function toggleRow(i: number) {
  expandedRow.value = expandedRow.value === i ? null : i
}
</script>

<template>
  <section class="bg-white py-20 md:py-28 lg:py-32">
    <div class="container-x">
      <div class="mb-16 text-center md:mb-20">
        <p class="eyebrow">Comparison</p>
        <h2 class="mt-4 font-display text-3xl font-bold capitalize leading-tight text-brand md:text-4xl lg:text-5xl">
          Not just another documentation tool
        </h2>
        <p class="mx-auto mt-6 max-w-3xl font-display text-lg font-semibold leading-snug text-ink-500 md:text-xl lg:text-2xl">
          A side-by-side look at what TechniDox does that legacy docs platforms simply cannot.
        </p>
      </div>

      <!-- Desktop / tablet: full table -->
      <div class="hidden overflow-hidden rounded-2xl border border-ink-300 md:block">
        <table class="w-full text-left">
          <thead>
            <tr class="bg-brand text-white">
              <th class="border border-ink-50/20 p-4 font-display text-xl font-bold md:text-2xl lg:text-[28px]">
                Capability
              </th>
              <th class="border border-ink-50/20 p-4 font-display text-xl font-bold md:text-2xl lg:text-[28px]">
                TechniDox
              </th>
              <th class="border border-ink-50/20 p-4 font-display text-xl font-bold md:text-2xl lg:text-[28px]">
                Traditional Documentation
              </th>
            </tr>
          </thead>
          <tbody v-reveal-stagger:80="'fade-up'">
            <tr v-for="(row, i) in rows" :key="row">
              <td class="border border-ink-300 p-4 font-sans text-base text-ink md:text-lg">{{ row }}</td>
              <td class="border border-ink-300 p-4 text-center">
                <svg v-if="technidox[i]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mx-auto h-6 w-6 text-success" aria-label="Yes">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span v-else class="font-sans text-2xl text-ink-300" aria-label="No">&mdash;</span>
              </td>
              <td class="border border-ink-300 p-4 text-center">
                <svg v-if="traditional[i]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mx-auto h-6 w-6 text-success" aria-label="Yes">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span v-else class="font-sans text-2xl text-ink-300" aria-label="No">&mdash;</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile: accordion (INTERACTIVE ELEMENT #2) -->
      <div v-reveal-stagger:80="'fade-up'" class="space-y-3 md:hidden">
        <div v-for="(row, i) in rows" :key="row" class="overflow-hidden rounded-xl border border-ink-300">
          <button type="button" class="flex w-full items-center justify-between gap-3 bg-white px-4 py-4 text-left transition-colors hover:bg-surface-soft" :aria-expanded="expandedRow === i" :aria-controls="`row-${i}`" @click="toggleRow(i)">
            <span class="font-sans text-base font-medium text-ink">{{ row }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 text-brand transition-transform" :class="{ 'rotate-180': expandedRow === i }" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div v-show="expandedRow === i" :id="`row-${i}`" class="border-t border-ink-200 bg-ink-50 px-4 py-4">
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div class="rounded-lg bg-white p-3">
                <p class="font-sans text-xs font-semibold uppercase tracking-wide text-brand">TechniDox</p>
                <p class="mt-1 flex items-center gap-1 font-sans text-sm">
                  <svg v-if="technidox[i]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="h-4 w-4 text-success" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-ink">{{ technidox[i] ? 'Yes' : 'No' }}</span>
                </p>
              </div>
              <div class="rounded-lg bg-white p-3">
                <p class="font-sans text-xs font-semibold uppercase tracking-wide text-ink-500">Traditional</p>
                <p class="mt-1 flex items-center gap-1 font-sans text-sm">
                  <svg v-if="traditional[i]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="h-4 w-4 text-success" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span v-else class="text-ink-400">&mdash;</span>
                  <span class="text-ink">{{ traditional[i] ? 'Yes' : 'No' }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
