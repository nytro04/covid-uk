<template>
  <div class="card">
    <div class="flex items-center justify-between text-primary-dark md:mx-8">
      <div class="mt-8">
        <AlertSvg class="-ml-2 md:ml-0 icon" />
        <h4 class="text-xl font-semibold lg:text-3xl md:text-2xl">
          <span>Above</span>
          <br />
          <span class="md:-ml-2">average</span>
        </h4>
      </div>
      <div class="mt-4 ml-5 md:ml-10 md:mt-0">
        <div>
          <div v-if="fetchLoading" class="py-10 mb-5 text-center">
            <LoadingSvg />
          </div>
          <h2 class="font-bold">{{ newCases.newCases }}</h2>
        </div>
        <h2 class="font-bold"></h2>
        <p
          class="-mt-2 text-xl font-semibold  lg:-mt-8 md:-mt-3 lg:text-3xl md:text-2xl text-tertiary-light"
        >
          New Cases Yesterday
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AlertSvg from '~/assets/svgs/alert.svg?inline'
import LoadingSvg from '~/assets/svgs/loading.svg?inline'
export default {
  components: {
    AlertSvg,
    LoadingSvg,
  },
  computed: {
    ...mapGetters({
      newCases: 'cases/fetchCase',
      fetchLoading: 'cases/fetchLoading',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/abstracts/_mixins.scss';

.card {
  height: 23.125rem;
  /* width: 38.75rem; */
  border-radius: 8px;
  @apply bg-primary shadow-md flex justify-center items-center;

  @include respond(tab-land) {
  }
  @include respond(tab-port) {
  }

  @include respond(phone) {
    height: 15.125rem;
    /* width: 15.75rem; */
  }

  h2 {
    font-size: 6.25rem;

    @include respond(tab-land) {
    }
    @include respond(tab-port) {
      font-size: 3.5rem;
    }

    @include respond(phone) {
      font-size: 3.25rem;
    }
  }
}

.icon {
  @include respond(tab-land) {
    height: 3rem;
  }
  @include respond(tab-port) {
  }

  @include respond(phone) {
    height: 3rem;
  }
}
</style>
