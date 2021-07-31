<template>
  <div class="card ">
    <div class="flex items-center justify-between ">
      <div class="w-5/24 mt-10 flex justify-center items-center mb-10">
        <span v-if="type === 'prev'">
          <FallingSvg v-if="getNeg === '-'" />
          <RisingSvg v-else />
        </span>
        <CalenderSvg v-if="type === 'average'" />
      </div>
      <div class="w-18/24 pt-8 pb-14 pl-16">
        <h2 v-if="type === 'prev'" class="font-bold">{{fetchPer}}%</h2>
        <h2 v-if="type === 'average'" class="font-bold">{{fetchAvg}}</h2>
        <p
          v-if="type === 'prev'"
          class="text-xl text-tertiary-light font-semibold -mt-4"
        >
          <span v-if="getNeg === '-'">Decrease from previous day</span>
          <span v-else>Increase from previous day</span>
        </p>
        <p
          v-if="type === 'average'"
          class="text-xl text-tertiary-light font-semibold -mt-4"
        >
          Average of last 7 days
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import CalenderSvg from '~/assets/svgs/calendar.svg?inline'
import RisingSvg from '~/assets/svgs/trending-up.svg?inline'
import FallingSvg from '~/assets/svgs/trending-down.svg?inline'



export default {


components: {
CalenderSvg,
RisingSvg,
FallingSvg
 },

  props: {

    type: {
      type: String,
      default: ""
    },

  },
      computed: {
   ...mapGetters({
      fetchPer: 'cases/fetchPer',
      fetchAvg: 'cases/fetchAvg'
   }),

     getNeg() {
      const str =
        '' + this.fetchPer
    const char = str[0]
    return char

    },
 },
 methods: {

 },
}
</script>

<style lang="scss" scoped>
.card {
  height: 10rem;
  width: 35.625rem;
  border-radius: 8px;
  @apply bg-primary-light shadow-md flex justify-center items-center;

  h2 {
    font-size: 4.375rem;
  }
}
</style>
