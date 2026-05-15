<template>
  <div class="min-h-screen bg-surface">
    <AppHeader />
    <main>
      <!-- Hero animates immediately on load via its own internal stagger -->
      <HeroSection />

      <!-- Below-fold sections fade in as they enter the viewport.
           Sections with internal grids use v-reveal-stagger on the grid itself
           to cascade their children (see each component). -->
      <div v-reveal><BrandStrip /></div>
      <AINativeSection />
      <CommunitySection />
      <EnterpriseSection />
      <ComparisonTable />
      <div v-reveal:100><PricingTeaser /></div>
      <UseCasesSection />
      <div v-reveal:150="'zoom-in'"><CTACard /></div>
    </main>
    <AppFooter />
  </div>
</template>
