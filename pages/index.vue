<template>
  <div class="">
    <Hero />
    <!-- <StatsPage :new-cases="newCases" /> -->
    <StatsPage />
    <ChartLine />
    <PreventivePage />
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
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
    //  ...mapActions({
    //     setNewCases: 'setNewCases/cases'
    //  }),
     async fetchData(){
       const filters = [`areaType=${this.areaType}`, `areaName=${this.areaName}`]
       const apiParams = {
         filters: filters.join(";"),
         structure: JSON.stringify(this.structure),
         latestBy: "newCasesByPublishDate"
       }

       try {

        //  const res = await this.$axios.$get(`/data?filters=areaType=nation;areaName=england&structure={"date":"date","cumCasesByPublishDate":"cumCasesByPublishDate", "newCases":"newCasesByPublishDate"}`)
         const res = await this.$axios.$get(`/data?`, {
           params:String(apiParams)
         })


        //  this.covidResult = res.data
          this.newCases = res.data[0]
         console.log(this.newCases, 'res')
  // this.setNewCases(res.data[0][0])

  console.log(String(apiParams))

       } catch (error) {
         console.log(error, 'error fetching data')
       }
     }
   },
}
</script>
