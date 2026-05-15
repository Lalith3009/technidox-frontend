<script setup lang="ts">
</script>

<template>
  <section id="pricing" class="bg-white py-20 md:py-28 lg:py-32">
    <div class="container-x text-center">
      <h2 class="font-display text-3xl font-bold capitalize leading-tight text-brand md:text-4xl lg:text-5xl">
        Plans Built For Every Stage Of Growth
      </h2>

      <!-- Price tag with string + swing animation matching Figma's
           Default(-16deg) / Variant2(0deg) / Variant3(+16deg) states -->
      <div class="relative mx-auto mt-16 flex h-72 w-72 flex-col items-center">
        <!-- String running down from above (stays fixed; tag swings below) -->
        <div class="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-ink-500" aria-hidden="true"></div>

        <!-- Swinging assembly: ring loop + tag together -->
        <div class="price-tag-swing relative mt-2 flex flex-col items-center will-change-transform">
          <!-- Ring loop -->
          <div
            class="h-6 w-5 rounded-full border-2 border-ink-500"
            aria-hidden="true"
          ></div>

          <!-- Scalloped tag (radial pattern simulates the bumpy edge) -->
          <div
            class="relative -mt-1 flex h-56 w-56 flex-col items-center justify-center rounded-full bg-accent shadow-card-soft"
            style="background-image: radial-gradient(circle at 50% 50%, #F9A71E 95%, transparent 96%);"
          >
            <p class="font-sans text-sm font-medium text-ink-800">Prices start at</p>
            <div class="mt-1 flex items-end">
              <span class="font-display text-2xl font-semibold text-ink-900">$</span>
              <span class="font-display text-5xl font-bold leading-none text-ink-900">499</span>
              <span class="ml-1 font-sans text-base text-ink-900">/month</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <a href="#cta" class="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 font-sans text-lg font-semibold text-white transition-colors hover:bg-brand-700">
          View Subscription Details
        </a>
      </div>
    </div>
  </section>
</template>
