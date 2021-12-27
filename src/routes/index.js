import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
export default createRouter({
  // Hash mode
  // https://google.com/#/search 로 접근할 수 있는 모드.
  history: createWebHashHistory(),
  // pages
  // https://google.com/about
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})