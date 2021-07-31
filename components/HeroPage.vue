<template>
  <div class="hero flex items-center">
    <div class=" my-auto text-white ml-64">
      <h1 class="text-8xl font-bold">COVID UK</h1>
      <h4 class="mt-5 text-lg ">
        Use this tool to find out the latest stats for Coronavirus in the UK
      </h4>
    </div>
    <a href="#stats-page" class="self-end mb-10">
      <ArrowDownSvg class="" />
    </a>
  </div>
</template>

<script>
import ArrowDownSvg from '~/assets/svgs/arrow.svg?inline'
export default {
 components: {
   ArrowDownSvg
 }
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('~/assets/img/covid-hero.png');
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-position: center;

  h1 {
    font-size: 6.25rem;
  }

  .mar-left {
    margin-left: 16.1875rem;
  }

  /* 16.1875 */
}
</style>
