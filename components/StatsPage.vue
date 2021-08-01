<template>
  <div id="stats-page" class="container mx-auto mar-top mar-bottom">
    <div class="block mx-5 md:grid md:grid-cols-12">
      <div class="col-start-1 col-end-7">
        <StatsCardBig />
      </div>
      <div
        class="block col-start-8 col-end-13 mt-16 space-y-5  md:space-y-12 md:mt-0"
      >
        <StatsCardSmall type="prev" />
        <StatsCardSmall type="average" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    StatsCardBig: () => import('~/components/dashboard/StatsCardBig.vue'),
    StatsCardSmall: () => import('~/components/dashboard/StatsCardSmall.vue'),
  },
  props: {
    newCases: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.mar-top {
  margin-top: 5.5rem;
}
.mar-bottom {
  margin-top: 6.25rem;
}
</style>
