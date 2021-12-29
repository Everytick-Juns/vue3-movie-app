// import Vue from 'vue' 객체 구조 분해
import {createApp} from 'vue'
import App from './App'
import router from './routes'
import store from './store'
createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
