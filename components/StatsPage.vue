<template>
  <div class="container mx-auto mar-top mar-bottom">
    <div class=" flex justify-between items-center ">
      <StatsCardBig />
      <div class="block space-y-12">
        <StatsCardSmall
          :svg="svg.rising"
          increase="+300%"
          average="Increase from previous day"
        />
        <StatsCardSmall
          :svg="svg.calendar"
          increase="17000"
          average="Average of last 7 days"
        />
      </div>
    </div>
  </div>
</template>

<script>
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

 data() {
   return {
     svg: {
       calendar: CalenderSvg,
       rising: RisingSvg
     }

   }
 },
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
