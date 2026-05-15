<script setup lang="ts">
const metrics = [
  { label: 'Time Saved', value: '847h', delta: '+ 23% this month', deltaColor: 'text-success' },
  { label: 'Productivity Gain', value: '+34%', delta: '+ 12% vs baseline', deltaColor: 'text-success' },
  { label: 'Support Tickets', value: '-42%', delta: '- 156 tickets/month', deltaColor: 'text-success' },
  { label: 'Onboarding Speed', value: '3.2d', delta: '- 64% faster', deltaColor: 'text-success' }
]
</script>

<template>
  <section class="bg-white py-20 md:py-28 lg:py-32">
    <div class="container-x">
      <div class="mb-16 text-center md:mb-20">
        <p class="eyebrow">ROI &amp; Analytics</p>
        <h2 class="mt-4 font-display text-3xl font-bold capitalize leading-tight text-brand md:text-4xl lg:text-5xl">
          Enterprise-Grade ROI and Analytics
        </h2>
        <p class="mx-auto mt-6 max-w-3xl font-display text-lg font-semibold leading-snug text-ink-500 md:text-xl lg:text-2xl">
          Real-time dashboards that prove documentation impact across time saved, productivity, support load, and onboarding.
        </p>
      </div>

      <div class="rounded-2xl bg-enterprise-bg p-6 md:p-10 lg:p-14">
        <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 class="font-display text-xl font-normal text-white md:text-2xl lg:text-[28px]">
              Executive ROI Dashboard
            </h3>
            <p class="mt-1 font-sans text-sm text-ink-200 md:text-base">
              Real-time documentation impact metrics
            </p>
          </div>
          <span class="inline-flex items-center gap-2 rounded-xl border border-success/30 bg-success/20 px-3 py-2 font-sans text-sm font-semibold text-success">
            <span class="h-2 w-2 animate-pulse rounded-full bg-success"></span>
            Live Data
          </span>
        </div>

        <div v-reveal-stagger:120="{ alternate: true }" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="m in metrics" :key="m.label" class="rounded-lg border border-ink-400/40 bg-white/5 p-6 backdrop-blur">
            <p class="font-sans text-base text-ink-300">{{ m.label }}</p>
            <p class="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              {{ m.value }}
            </p>
            <p class="mt-2 font-sans text-sm" :class="m.deltaColor">{{ m.delta }}</p>
          </div>
        </div>

        <div v-reveal-stagger:150="'fade-up'" class="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div class="rounded-lg border border-ink-400/40 bg-white/5 p-6 backdrop-blur">
            <p class="font-sans text-base text-ink-300">Documentation Health</p>
            <p class="mt-3 font-display text-3xl font-bold text-white md:text-4xl">94/100</p>
            <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div class="h-full w-[94%] rounded-full bg-gradient-to-r from-success to-brand"></div>
            </div>
          </div>

          <div class="rounded-lg border border-ink-400/40 bg-white/5 p-6 backdrop-blur">
            <p class="font-sans text-base text-ink-300">Compliance Coverage</p>
            <div class="mt-3 flex items-end gap-2">
              <p class="font-display text-3xl font-bold text-white md:text-4xl">98%</p>
              <p class="font-sans text-sm font-semibold text-success">ISO / SOC2</p>
            </div>
            <p class="mt-2 inline-flex items-center gap-1 font-sans text-xs text-ink-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-success">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Audit ready
            </p>
          </div>

          <div class="rounded-lg border border-ink-400/40 bg-white/5 p-6 backdrop-blur">
            <p class="font-sans text-base text-ink-300">Active Contributors</p>
            <p class="mt-3 font-display text-3xl font-bold text-white md:text-4xl">143</p>
            <div class="mt-3 flex items-center">
              <span v-for="n in 5" :key="n" class="-ml-2 inline-block h-6 w-6 rounded-full border-2 border-ink-900 bg-gradient-to-br from-brand to-success first:ml-0"></span>
              <span class="-ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink-900 bg-ink-600 font-sans text-xs text-ink-200">
                +8
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
