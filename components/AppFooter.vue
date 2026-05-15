<script setup lang="ts">
const company = ['About Us', 'Careers', 'Blog', 'Partnerships']
const resources = ['Help Center', 'Fees & Limits', 'System Status']
const legal = ['Terms of Service', 'Privacy Policy', 'Risk Disclosure', 'Cookie Policy']
</script>

<template>
  <footer class="bg-surface-soft pb-12 pt-16 md:pt-24">
    <div class="container-x">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
        <!-- Brand block -->
        <div class="space-y-5 lg:col-span-1">
          <div class="flex items-center gap-2">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </span>
            <span class="font-display text-xl font-bold text-brand">TechniDox</span>
          </div>
          <p class="font-sans text-base leading-relaxed text-ink-700 md:text-lg">
            AI-native documentation infrastructure for engineering teams that demand quality, speed, and measurable impact.
          </p>
          <div class="flex items-center gap-6">
            <a href="#" aria-label="LinkedIn" class="text-brand transition-opacity hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" class="text-brand transition-opacity hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.66 9.13 8.44 9.88V14.9H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.9h-2.33v6.98C18.34 21.13 22 17 22 12c0-5.5-4.5-10-10-10z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" class="text-brand transition-opacity hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
                <path d="M12 2c2.72 0 3.06 0 4.12.06 1.07.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.56.55.9 1.11 1.16 1.77.25.64.42 1.36.47 2.43.05 1.06.06 1.4.06 4.12s0 3.06-.06 4.12c-.05 1.07-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.16 1.77c-.55.56-1.11.9-1.77 1.16-.64.25-1.36.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06 0-4.12-.06c-1.07-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.25-.64-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s0-3.06.06-4.12c.05-1.07.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77.55-.56 1.11-.9 1.77-1.16.64-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Column: Company -->
        <div>
          <h3 class="font-title text-xl font-semibold text-ink-700">Company</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="item in company" :key="item">
              <a href="#" class="font-sans text-base text-ink-500 transition-colors hover:text-brand">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Column: Resources -->
        <div>
          <h3 class="font-title text-xl font-semibold text-ink-700">Resources</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="item in resources" :key="item">
              <a href="#" class="font-sans text-base text-ink-500 transition-colors hover:text-brand">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Column: Legal -->
        <div>
          <h3 class="font-title text-xl font-semibold text-ink-700">Legal &amp; Compliance</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="item in legal" :key="item">
              <a href="#" class="font-sans text-base text-ink-500 transition-colors hover:text-brand">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 border-t border-ink-300/60 pt-6 text-center font-sans text-sm text-ink-500">
        &copy; 2026 TechniDox. AI-native documentation infrastructure.
      </div>
    </div>
  </footer>
</template>
