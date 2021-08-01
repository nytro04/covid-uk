<template>
  <div class="">
    <Hero />
    <StatsPage />

    <div class="py-10 mx-auto mt-32 graph bg-primary-light">
      <ChartLineBase :chart-data="chartData" options="options" :height="200" />
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

    <PreventivePage />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {
    Hero: () => import('~/components/HeroPage.vue'),
    StatsPage: () => import('~/components/StatsPage.vue'),
    ChartLineBase: () => import('~/components/dashboard/ChartLineBase.vue'),
    PreventivePage: () => import('~/components/PreventivePage.vue'),
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

  mounted() {
    this.fetchData()
  },

  methods: {
    ...mapActions({
      setNewCases: 'cases/setNewCases',
      setPer: 'cases/setPer',
      setAvg: 'cases/setAvg',
    }),

    average(arr) {
      return arr.reduce((newVal, oldVal) => newVal + oldVal) / arr.length
    },
    async fetchData() {
      try {
        const res = await this.$axios.$get(
          `/data?filters=areaType=nation;areaName=england&structure={"date":"date","cumCasesByPublishDate":"cumCasesByPublishDate", "newCases":"newCasesByPublishDate"}`
        )

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
