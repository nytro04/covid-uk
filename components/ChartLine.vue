<template>
  <div class="graph bg-primary-light mx-auto">
    <!-- <ChartLineBase :chart-data="chartData" :height="200"  /> -->
    <!-- <ChartLineBase /> -->

    <div class="my-20 text-center">
      <!-- <nuxt-link class="btn btn__white">view in details</nuxt-link> -->
      <a
        href="https://www.gov.uk/coronavirus"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn__white"
      >
        view in details
      </a>
    </div>
  </div>
</template>

<script>
export default {
   components: {

    // ChartLineBase: () => import('~/components/dashboard/ChartLineBase.js'),
   }
}
</script>

<style lang="scss" scoped></style>
