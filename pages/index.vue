<template>
  <div class="">
    <Hero />
    <StatsPage />

    <div class="py-10 mt-32 bg-primary-light">
      <div v-if="fetchLoading" class="py-10 mb-5 text-center">
        <LoadingSvg />
      </div>
      <div v-else class="container mx-auto sm:px-10">
        <ChartLineBase
          :chart-data="chartData"
          options="options"
          :height="200"
        />
        <div class="my-20 text-center">
          <a
            href="https://www.gov.uk/coronavirus"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn__white"
          >
            view in details
          </a>
        </div>
      </div>
    </div>

    <PreventivePage />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LoadingSvg from '~/assets/svgs/loading.svg?inline'

export default {
  components: {
    Hero: () => import('~/components/HeroPage.vue'),
    StatsPage: () => import('~/components/StatsPage.vue'),
    ChartLineBase: () => import('~/components/dashboard/ChartLineBase.vue'),
    PreventivePage: () => import('~/components/PreventivePage.vue'),
    LoadingSvg,
  },

  data() {
    return {
      chartData: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },

      // use this to make api url maintable
      // areaType: 'nation',
      // areaName: 'england',
      // currentPage: 1,
      // structure: {
      //   date: 'date',
      //   name: 'areaName',
      //   cases: {
      //     new: 'newCasesByPublishDate',
      //     cumulative: 'cumCasesByPublishDate',
      //   },
      // },
    }
  },

  head() {
    return {
      title: 'Covid-UK | Home Page',
    }
  },

  computed: {
    ...mapGetters({
      fetchLoading: 'cases/fetchLoading',
    }),
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    ...mapActions({
      setNewCases: 'cases/setNewCases',
      setPer: 'cases/setPer',
      setAvg: 'cases/setAvg',
      setLoading: 'cases/setLoading',
    }),

    average(arr) {
      return arr.reduce((newVal, oldVal) => newVal + oldVal) / arr.length
    },
    async fetchData() {
      try {
        const res = await this.$axios.$get(
          `/data?filters=areaType=nation;areaName=england&structure={"date":"date","cumCasesByPublishDate":"cumCasesByPublishDate", "newCases":"newCasesByPublishDate"}`
        )

        this.setLoading(false)

        const dayZero = res.data[0]
        const dayOne = res.data[1]
        const dayTwo = res.data[2]
        const dayThree = res.data[3]
        const dayFour = res.data[4]
        const dayFive = res.data[5]
        const daySix = res.data[6]

        const lastSevenDays = [
          dayZero.newCases,
          dayOne.newCases,
          dayTwo.newCases,
          dayThree.newCases,
          dayFour.newCases,
          dayFive.newCases,
          daySix.newCases,
        ]

        this.weeklyCases = lastSevenDays

        const lastSevenDaysDates = [
          dayZero.date,
          dayOne.date,
          dayTwo.date,
          dayThree.date,
          dayFour.date,
          dayFive.date,
          daySix.date,
        ]

        this.chartData.labels = lastSevenDaysDates

        // calcalute average of last 7 days
        let average = this.average(lastSevenDays)
        average = average.toFixed(0)
        this.setAvg(average)

        // calculate increase of decrease from previous day
        const diff = dayZero.newCases - dayOne.newCases
        let casesPer = (diff / dayOne.newCases) * 100
        casesPer = casesPer.toFixed(2)

        const chartData = {
          labels: lastSevenDaysDates,
          datasets: [
            {
              label: 'Cases per day (last 7 days)',
              data: lastSevenDays,
              borderWidth: 1,
              backgroundColor: '#FFEFEF',
            },
          ],
        }

        this.chartData = chartData

        this.setNewCases(res.data[1])
        this.setPer(casesPer)
      } catch (error) {
        console.log(error, 'error fetching data')
      }
    },
  },
}
</script>

<style lang="scss"></style>
