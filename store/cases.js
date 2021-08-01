export const state = () => ({
  casesPer: 0,
  average: 0,
  newCases: {},
  loading: true
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

  SET_LOADING(state, loading) {
    state.loading = loading
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

  setLoading({ commit }, loading) {
    commit('SET_LOADING', loading)
  }
}
export const getters = {
  fetchCase: (state) => state.newCases,

  fetchPer: (state) => state.casesPer,

  fetchAvg: (state) => state.average,

  fetchLoading: (state) => state.loading
}
