export default {
  //module
  namespaced: true,
  //data
  state: () => ({
    movies: []
  }),

  //computed
  getters: {
    movieIds(stare) {
      return stare.movies.map(m => m.imdbID)
    }
  },
  //methods
  //변이
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  //비동기
  actions: {
    searchMovies({ state, commit }) {
      context.state
    }
  }

}