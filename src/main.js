import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.scss'

let vm = new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
Vue.use({vm})