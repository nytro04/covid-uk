<template>
  <div class="">
    <Hero />
    <StatsPage />
    <ChartLine />
    <PreventivePage />
  </div>
</template>

<script>
export default {
   components: {
    Hero: () => import('~/components/HeroPage.vue'),
    StatsPage: () => import('~/components/StatsPage.vue'),
    ChartLine: () => import('~/components/ChartLine.vue'),
    PreventivePage: () => import('~/components/PreventivePage.vue'),
   }
}
</script>
