import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'
export default {
  // module이라는 것을 명시
  namespaced: true,
  // data!
  state: () => ({
    movies: [],
    message: '',
    loading: false
  }),
  // computed!
  getters: {},
  // methods!
  // 변이. -> mutations에서만 데이터를 변경할 수 있다.
  mutations: {
    updateState(state, payload) {
      // ['movies','message','loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })

      
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기
  actions: {
    async searchMovies({ state, commit }, payload) {
      const { title , type, number, year } = payload
      const OMDB_API_KEY = 'b4216094'
      // Search movies...
      const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: _uniqBy(Search, 'imdbID'),

      })
      console.log(totalResults) //300
      console.log(typeof totalResults) // string
      const total = parseInt(totalResults)
      const pageLength = Math.ceil(total / 10)
      
      // 추가 요청!
      if (pageLength > 1) {
        for (let page = 2; page <= pageLength; page += 1){
          if (page > (number / 10)) break
          const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
          const { Search } = res.data          
          commit('updateState', {
            movies: [
              ...state.movies,
              ..._uniqBy(Search, 'imdbID')
            ],
    
          })
        }
      }
    }
  }
}