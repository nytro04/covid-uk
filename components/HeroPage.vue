<template>
  <!-- <div class="flex items-center hero">
    <div class="my-auto ml-64 text-white">
      <h1 class="font-bold text-8xl">COVID UK</h1>
      <h4 class="mt-5 text-lg">
        Use this tool to find out the latest stats for Coronavirus in the UK
      </h4>
    </div>
    <a href="#stats-page" class="self-end mb-10">
      <ArrowDownSvg class="" />
    </a>
  </div> -->

  <div
    class="grid grid-cols-12 grid-rows-6 overflow-hidden  hero place-content-center"
  >
    <div
      class="col-start-2 col-end-13 row-start-3 text-white  md:col-start-3 md:col-end-13 lg:col-start-3 lg:col-end-13"
    >
      <h1 class="font-bold">COVID UK</h1>
      <h4 class="text-base md:text-lg">
        Use this tool to find out the latest stats for Coronavirus in the UK
      </h4>
    </div>
    <a href="#stats-page" class="col-start-7 row-start-6 mt-8 md:mt-14">
      <ArrowDownSvg class="" />
    </a>
  </div>
</template>

<script>
import ArrowDownSvg from '~/assets/svgs/arrow.svg?inline'
export default {
  components: {
    ArrowDownSvg,
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/abstracts/_mixins.scss';
.hero {
  background-image: url('~/assets/img/covid-hero.png');
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-position: center;

  @include respond(tab-land) {
    height: 60vh;
    /* width: 70%; */
  }
  @include respond(tab-port) {
    height: 60vh;
    /* width: 70%; */
  }

  @include respond(phone) {
    height: 60vh;
    /* width: 70%; */
  }

  h1 {
    font-size: 6.25rem;
    @include respond(tab-land) {
      font-size: 5.25rem;
    }
    @include respond(tab-port) {
      font-size: 4.25rem;
    }

    @include respond(phone) {
      font-size: 3.25rem;
    }
  }

  .mar-left {
    margin-left: 16.1875rem;
    @include respond(tab-land) {
      margin-left: 0;
    }
    @include respond(tab-port) {
      margin-left: 0;
    }

    @include respond(phone) {
      margin-left: 0;
    }
  }
}
</style>
