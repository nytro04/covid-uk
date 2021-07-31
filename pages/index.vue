<template>
  <div class="">
    <Hero />
    <StatsPage />
    <!-- <StatsPage :new-cases="newCases" /> -->
    <ChartLine />
    <PreventivePage />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   components: {
    Hero: () => import('~/components/HeroPage.vue'),
    StatsPage: () => import('~/components/StatsPage.vue'),
    ChartLine: () => import('~/components/ChartLine.vue'),
    PreventivePage: () => import('~/components/PreventivePage.vue'),
   },

   data() {
     return {
       covidResult: [],
       newCases: {},
      //  prevCases: {},
       areaType: "nation",
       areaName: "england",
       currentPage: 1,
       structure: {
           date: "date",
      name: "areaName",
      cases: {
      new: "newCasesByPublishDate",
      cumulative: "cumCasesByPublishDate"
    },
       }
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

     average(arr){
       return arr.reduce((newVal, oldVal) => newVal + oldVal) /arr.length
     },
     async fetchData(){
      //  const filters = [`areaType=${this.areaType}`, `areaName=${this.areaName}`]
      //  const apiParams = {
      //    filters: filters.join(";"),
      //    structure: JSON.stringify(this.structure),
      //    latestBy: "newCasesByPublishDate"
      //  }

       try {

        //  const res = await this.$axios.$get(`/data?`, {
        //    params:String(apiParams)
        //  })

        //  const res = await this.$axios.$get(`/data?filters=areaType=nation;areaName=england&structure={"date":"date","cumCasesByPublishDate":"cumCasesByPublishDate", "newCases":"newCasesByPublishDate"}`)

        const res = await this.$axios.$get(`/data?filters=areaType=nation;areaName=england&structure={"date":"date","cumCasesByPublishDate":"cumCasesByPublishDate", "newCases":"newCasesByPublishDate"}`)

        //  this.covidResult = res.data
          const dayZero = res.data[0].newCases
          const dayOne = res.data[1].newCases
          const dayTwo = res.data[1].newCases
          const dayThree = res.data[1].newCases
          const dayFour = res.data[1].newCases
          const dayFive = res.data[1].newCases
          const daySix = res.data[1].newCases

          let average = this.average([dayZero, dayOne, dayTwo, dayThree, dayFour, dayFive, daySix])
          average = average.toFixed(0)
         this.setAvg(average)

          this.newCases = res.data[1]

          const diff = dayZero - dayOne

          let casesPer = (diff/dayOne) * 100
            casesPer =  casesPer.toFixed(2)

        this.setNewCases(res.data[1])
        this.setPer(casesPer)


       } catch (error) {
         console.log(error, 'error fetching data')
       }
     }
   },
}
</script>
