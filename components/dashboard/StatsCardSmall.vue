<template>
  <div class="card">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-center mt-10 mb-10 w-5/24">
        <span v-if="type === 'prev'">
          <FallingSvg v-if="getNeg === '-'" />
          <RisingSvg v-else />
        </span>
        <CalenderSvg v-if="type === 'average'" />
      </div>
      <div class="pt-8 pl-16 w-18/24 pb-14">
        <div>
          <div v-if="fetchLoading" class="mb-5 text-center">
            <LoadingSvg />
          </div>
          <div v-else>
            <h2 v-if="type === 'prev'" class="font-bold">{{ fetchPer }}%</h2>
            <h2 v-if="type === 'average'" class="font-bold">{{ fetchAvg }}</h2>
          </div>
        </div>
        <p
          v-if="type === 'prev'"
          class="-mt-4 text-xl font-semibold text-tertiary-light"
        >
          <span v-if="getNeg === '-'">Decrease from previous day</span>
          <span v-else>Increase from previous day</span>
        </p>
        <p
          v-if="type === 'average'"
          class="-mt-4 text-xl font-semibold text-tertiary-light"
        >
          Average of last 7 days
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CalenderSvg from '~/assets/svgs/calendar.svg?inline'
import RisingSvg from '~/assets/svgs/trending-up.svg?inline'
import FallingSvg from '~/assets/svgs/trending-down.svg?inline'
import LoadingSvg from '~/assets/svgs/loading-1.svg?inline'

export default {
  components: {
    CalenderSvg,
    RisingSvg,
    FallingSvg,
    LoadingSvg,
  },

  props: {
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters({
      fetchPer: 'cases/fetchPer',
      fetchAvg: 'cases/fetchAvg',
      fetchLoading: 'cases/fetchLoading',
    }),

    getNeg() {
      const str = '' + this.fetchPer
      const char = str[0]
      return char
    },
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
