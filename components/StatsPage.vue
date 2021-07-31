<template>
  <div class="stats">
    <StatsCardBig />
  </div>
</template>

<script>
export default {
components: {
  StatsCardBig: () => import('~/components/dashboard/StatsCardBig.vue'),
 }
}
</script>

<style lang="scss" scoped></style>
