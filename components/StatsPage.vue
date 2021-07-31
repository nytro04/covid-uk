<template>
  <div id="stats-page" class="container mx-auto mar-top mar-bottom">
    <div class=" flex justify-between items-center ">
      <!-- <StatsCardBig :new-cases="newCases" /> -->
      <StatsCardBig />
      <div class="block space-y-12">
        <StatsCardSmall type="prev" />
        <StatsCardSmall type="average" />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex"
import CalenderSvg from '~/assets/svgs/calendar.svg?inline'
import RisingSvg from '~/assets/svgs/trending-up.svg?inline'

export default {
components: {
  StatsCardBig: () => import('~/components/dashboard/StatsCardBig.vue'),
  StatsCardSmall: () => import('~/components/dashboard/StatsCardSmall.vue'),
  // eslint-disable-next-line vue/no-unused-components
  RisingSvg,
   // eslint-disable-next-line vue/no-unused-components
   CalenderSvg
 },
    props: {
    newCases: {
      type: Number,
      default: 0
    }
  },

 data() {
   return {
     svg: {
       calendar: CalenderSvg,
       rising: RisingSvg
     }

   }
 },

 computed: {
  //  ...mapGetters({
  //     newCases: 'cases/fetchCase'
  //  })
 }
}
</script>

<style lang="scss" scoped>
.stats {
}

.mar-top {
  margin-top: 5.5rem;
}
.mar-bottom {
  margin-top: 6.25rem;
}
</style>
