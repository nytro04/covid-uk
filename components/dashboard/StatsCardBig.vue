<template>
  <div class="card ">
    <div class="flex items-center justify-center text-primary-dark">
      <div class="w-1/3 mt-10">
        <AlertSvg class="ml-4" />
        <h4 class="text-3xl font-semibold">
          <span class="ml-2">Above</span>
          <span>average</span>
        </h4>
      </div>
      <div class="2/3">
        <h2 class="font-bold">26,688</h2>
        <p class="text-3xl -mt-8 text-black font-semibold">
          New Cases Yesterday
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AlertSvg from '~/assets/svgs/alert.svg?inline'

export default {
components: {
   AlertSvg
 }
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
