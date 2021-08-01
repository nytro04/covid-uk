<template>
  <div class="card">
    <div class="flex items-center justify-center text-primary-dark">
      <div class="w-1/3 mt-8">
        <AlertSvg class="ml-4" />
        <h4 class="text-3xl font-semibold">
          <span class="ml-2">Above</span>
          <span>average</span>
        </h4>
      </div>
      <div class="w-2/3">
        <div>
          <div v-if="fetchLoading" class="py-10 mb-5 text-center">
            <LoadingSvg />
          </div>
          <h2 class="font-bold">{{ newCases.newCases }}</h2>
        </div>
        <h2 class="font-bold"></h2>
        <p class="-mt-8 text-3xl font-semibold text-tertiary-light">
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
.card {
  height: 23.125rem;
  width: 38.75rem;
  border-radius: 8px;
  @apply bg-primary shadow-md flex justify-center items-center;

  h2 {
    font-size: 6.25rem;
  }
}
</style>
