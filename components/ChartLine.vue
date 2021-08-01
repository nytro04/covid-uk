<template>
  <div class="mx-auto graph bg-primary-light">
    <ChartLineBase :chart-data="chartData" options="options" :height="200" />
    <!-- <ChartLineBase /> -->

    <div class="my-20 text-center">
      <!-- <nuxt-link class="btn btn__white">view in details</nuxt-link> -->
      <a
        href="https://www.gov.uk/coronavirus"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn__white"
      >
        view in details
      </a>
    </div>

    {{ fetchWeeklyCases }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    ChartLineBase: () => import('~/components/dashboard/ChartLineBase.vue'),
  },

  props: {
    weeklyCases: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      chartData: {
        // labels: this.fetchWeeklyDates,
        labels: [],
        datasets: [
          {
            label: 'Cases per day (last 7 days)',
            // data: this.fetchWeeklyCases,
            data: [],
            borderWidth: 1,
            backgroundColor: '#FFEFEF',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },

  computed: {
    ...mapGetters({
      fetchWeeklyCases: 'cases/fetchWeeklyCases',
      fetchWeeklyDates: 'cases/fetchWeeklyDates',
    }),
  },

  created() {
    // this.chartData = this.$store.getters['cases/fetchWeeklyCases']
    this.chartData.labels = this.$store.getters['cases/fetchWeeklyDates']
  },
}
</script>

<style lang="scss" scoped></style>
