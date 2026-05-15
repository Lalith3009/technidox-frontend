// plugins/reveal.client.ts
//
// Provides two directives:
//
//   v-reveal       — fades a single element into view on first viewport entry
//                    Variants: fade-up (default), fade-down, fade-left, fade-right, fade, zoom-in
//                    Usage: <div v-reveal>, <div v-reveal:200="'fade-left'">
//
//   v-reveal-stagger — fades the element AND staggers its direct children
//                      Usage: <div v-reveal-stagger="'fade-left'">         default 100ms interval
//                             <div v-reveal-stagger:150="'fade-up'">       150ms interval
//                             <div v-reveal-stagger:120="{ variant: 'fade-left', alternate: true }">
//                                                                          alternating left/right per child
//
// Both are one-shot per page load (refresh replays). Respect prefers-reduced-motion.

import type { Directive } from 'vue'

const REVEAL_OPTS = {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px'
}

function isReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/* ---------- v-reveal (single element) ---------- */

const reveal: Directive<HTMLElement, string | undefined> = {
  mounted(el, binding) {
    if (isReducedMotion()) {
      el.dataset.revealState = 'visible'
      el.dataset.reveal = binding.value || 'fade-up'
      return
    }

    const variant = binding.value || 'fade-up'
    const delay = binding.arg ? Number(binding.arg) : 0

    el.dataset.reveal = variant
    el.dataset.revealState = 'hidden'
    if (delay) el.style.transitionDelay = `${delay}ms`

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.revealState = 'visible'
            io.unobserve(el)
          }
        }
      },
      REVEAL_OPTS
    )
    io.observe(el)
    ;(el as any).__revealIO = io
  },
  unmounted(el) {
    ;(el as any).__revealIO?.disconnect()
  }
}

/* ---------- v-reveal-stagger (parent + children cascade) ---------- */

type StaggerValue =
  | string
  | undefined
  | { variant?: string; alternate?: boolean; childVariant?: string }

const revealStagger: Directive<HTMLElement, StaggerValue> = {
  mounted(el, binding) {
    const interval = binding.arg ? Number(binding.arg) : 100
    let parentVariant = 'fade-up'
    let childVariant: string | null = null
    let alternate = false

    if (typeof binding.value === 'string') {
      childVariant = binding.value
    } else if (binding.value && typeof binding.value === 'object') {
      parentVariant = binding.value.variant || parentVariant
      childVariant = binding.value.childVariant || binding.value.variant || null
      alternate = !!binding.value.alternate
    }

    const children = Array.from(el.children) as HTMLElement[]

    if (isReducedMotion()) {
      el.dataset.revealState = 'visible'
      el.dataset.reveal = parentVariant
      children.forEach((c) => {
        c.dataset.revealState = 'visible'
        c.dataset.reveal = childVariant || parentVariant
      })
      return
    }

    // Set hidden state on parent + children
    el.dataset.reveal = parentVariant
    el.dataset.revealState = 'hidden'

    children.forEach((child, i) => {
      const variant = alternate
        ? i % 2 === 0
          ? 'fade-right'  // child enters from the LEFT side of its position
          : 'fade-left'   // child enters from the RIGHT side
        : childVariant || parentVariant
      child.dataset.reveal = variant
      child.dataset.revealState = 'hidden'
      child.style.transitionDelay = `${i * interval}ms`
    })

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.revealState = 'visible'
            children.forEach((child) => {
              child.dataset.revealState = 'visible'
            })
            io.unobserve(el)
          }
        }
      },
      REVEAL_OPTS
    )
    io.observe(el)
    ;(el as any).__revealIO = io
  },
  unmounted(el) {
    ;(el as any).__revealIO?.disconnect()
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
  nuxtApp.vueApp.directive('reveal-stagger', revealStagger)
})
