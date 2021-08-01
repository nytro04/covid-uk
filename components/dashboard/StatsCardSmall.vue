<template>
  <div class="card">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-center mt-10 mb-10">
        <span v-if="type === 'prev'">
          <FallingSvg v-if="getNeg === '-'" class="icon" />
          <RisingSvg v-else class="icon" />
        </span>
        <CalenderSvg v-if="type === 'average'" class="icon" />
      </div>
      <div class="pt-8 ml-4 md:pl-10 pb-14">
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
          class="text-base font-semibold md:text-xl text-tertiary-light"
        >
          <span v-if="getNeg === '-'">Decrease from previous day</span>
          <span v-else>Increase from previous day</span>
        </p>
        <p
          v-if="type === 'average'"
          class="text-base font-semibold md:text-xl text-tertiary-light"
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
@import './assets/scss/abstracts/_mixins.scss';
.card {
  height: 10rem;
  /* width: 35.625rem; */
  border-radius: 8px;
  @apply bg-primary-light shadow-md flex justify-center items-center;

  h2 {
    font-size: 3.5rem;

    @include respond(phone) {
      font-size: 2rem;
    }
  }
}

.icon {
  @include respond(phone) {
    height: 3rem;
  }
}
</style>
