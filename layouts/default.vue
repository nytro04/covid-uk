<template>
  <div class="">
    <!-- <div class="container mx-auto sm:px-10"> -->
    <Nuxt />
    <div class="bg-sec">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Footer: () => import('~/components/mainLayout/Footer.vue'),
  },
}
</script>

<style></style>
