<template>
  <div class="card ">
    <div class="flex items-center justify-between ">
      <div class="w-5/24 mt-10 flex justify-center items-center mb-10">
        <component :is="svg"></component>
      </div>
      <div class="w-18/24 pt-8 pb-14 pl-16">
        <h2 class="font-bold">{{increase}}</h2>
        <p class="text-xl text-tertiary-light font-semibold">
          {{average}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
components: {

 },
  props: {
    svg: {
      type: Object,
      default: () => ({})
    },
    increase: {
      type: String,
      default: ""
    },
    average: {
      type: String,
      default: ""
    }
  }
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
