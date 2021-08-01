<template>
  <div id="stats-page" class="container mx-auto mar-top mar-bottom">
    <div class="flex items-center justify-between">
      <StatsCardBig />
      <div class="block space-y-12">
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
