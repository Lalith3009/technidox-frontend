<script setup lang="ts">
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'About Us', href: '#use-cases' },
  { label: 'Docs', href: '#ai-native' },
  { label: 'Pricing', href: '#pricing' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-ink-200/60 bg-white/90 backdrop-blur-md"
  >
    <div class="container-x flex h-[88px] items-center justify-between gap-6">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2" aria-label="TechniDox home">
        <span
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="15" y2="17" />
          </svg>
        </span>
        <span class="font-display text-xl font-bold text-brand">TechniDox</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-8 lg:flex" aria-label="Primary">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          :class="[
            'font-display text-lg transition-colors hover:text-brand',
            link.active ? 'font-semibold text-brand' : 'font-normal text-brand/80'
          ]"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Desktop CTA + mobile toggle -->
      <div class="flex items-center gap-3">
        <a
          href="#cta"
          class="hidden rounded-lg border border-white/50 bg-brand px-6 py-3 font-sans text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-cta lg:inline-block"
        >
          Get Started
        </a>

        <!-- Mobile menu toggle button -->
        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 text-brand transition-colors hover:bg-surface-soft lg:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
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
            class="h-6 w-6"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile slide-down menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="border-t border-ink-200/60 bg-white lg:hidden"
      >
        <nav class="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="rounded-lg px-3 py-3 font-display text-lg text-brand transition-colors hover:bg-surface-soft"
            :class="link.active ? 'font-semibold' : 'font-normal'"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
          <a
            href="#cta"
            class="mt-2 rounded-lg bg-brand px-6 py-3 text-center font-sans text-base font-semibold text-white"
            @click="closeMenu"
          >
            Get Started
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
