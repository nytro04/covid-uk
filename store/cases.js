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
  }
}
export const getters = {
  fetchCase: (state) => state.newCases,

  fetchPer: (state) => state.casesPer,

  fetchAvg: (state) => state.average
}
