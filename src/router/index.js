import Vue from 'vue'
import Router from 'vue-router'
import vHome from '@/components/Home'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

Vue.use(Router)
Vue.use(VueBlu)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: vHome
    }
  ]
})
