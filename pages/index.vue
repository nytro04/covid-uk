<template>
  <div class="">
    <Hero />
    <StatsPage />
  </div>
</template>

<script>
export default {
   components: {
    Hero: () => import('~/components/HeroPage.vue'),
    StatsPage: () => import('~/components/StatsPage.vue'),
   }
}
</script>
