<script setup lang="ts">
interface Props {
  iconBg: string;
  checkColor: string;
  cardBg: string;
  title: string;
  description: string;
  bullets: string[];
}
defineProps<Props>()
</script>

<template>
  <article
    class="flex flex-col gap-8 rounded-2xl border border-ink-400/40 p-8 shadow-card-soft"
    :class="cardBg"
  >
    <div
      class="flex h-14 w-14 items-center justify-center rounded-2xl"
      :class="iconBg"
      aria-hidden="true"
    >
      <slot name="icon" />
    </div>

    <div class="space-y-4">
      <h3 class="font-display text-2xl font-normal leading-tight text-ink md:text-[28px]">
        {{ title }}
      </h3>
      <p class="font-sans text-base leading-relaxed text-ink-400 md:text-lg">
        {{ description }}
      </p>
    </div>

    <ul class="space-y-4">
      <li
        v-for="b in bullets"
        :key="b"
        class="flex items-start gap-2 font-sans text-base text-ink-400 md:text-lg"
      >
        <span
          class="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2"
          :class="checkColor"
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
            class="h-2.5 w-2.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        {{ b }}
      </li>
    </ul>
  </article>
</template>
