import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Test = () => import(/* webpackChunkName: "test" */ '../pages/test')
const Wenping = () => import(/* webpackChunkName: "wenping" */ '../pages/wenping')

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/wenping'
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
    meta: {
      layout: 'test'
    }
  },
  {
    path: '/wenping',
    name: 'wenping',
    component: Wenping,
    meta: {
      layout: 'wenping'
    }
  }
]

export default new Router({
  routes
})
