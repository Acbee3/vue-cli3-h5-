import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: 'servers',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        return next()
      }
    },
    {
      path: '/city',
      name: 'city',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/city/City.vue'),
      beforeEnter: (to, from, next) => {
        // console.log(from)
        return next()
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/components/detail/Detail.vue'),
    }
  ]
})
