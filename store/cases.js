export const state = () => ({
  casesPer: 0,
  average: 0,
  weeklyCases: [],
  weeklyDates: [],
  newCases: {}
})

export const mutations = {
  SET_CASE(state, newCases) {
    state.newCases = newCases
  },

  SET_PER(state, percentage) {
    state.casesPer = percentage
  },

  SET_AVG(state, average) {
    state.average = average
  },

  SET_WEEK_CASES(state, cases) {
    state.weeklyCases = cases
  },

  SET_WEEK_DATES(state, dates) {
    state.weeklyDates = dates
  }
}
export const actions = {
  setNewCases({ commit }, newCases) {
    commit('SET_CASE', newCases)
  },

  setPer({ commit }, percentage) {
    commit('SET_PER', percentage)
  },

  setAvg({ commit }, average) {
    commit('SET_AVG', average)
  },

  setWeekCases({ commit }, cases) {
    commit('SET_WEEK_CASES', cases)
  },

  setWeekDates({ commit }, dates) {
    commit('SET_WEEK_DATES', dates)
  }
}
export const getters = {
  fetchCase: (state) => state.newCases,

  fetchPer: (state) => state.casesPer,

  fetchAvg: (state) => state.average,

  fetchWeeklyCases: (state) => state.weeklyCases,

  fetchWeeklyDates: (state) => state.weeklyDates
}
