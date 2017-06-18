import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Info from '@/components/Info'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import Housedetail from '@/components/Housedetail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', name: 'Home', component: Home, meta: { keepAlive: true } },
    { path: '/info', name: 'Info', component: Info, meta: { keepAlive: true } },
    { path: '/mine', name: 'Mine', component: Mine },
    { path: '/search', name: 'Search', component: Search },
    { path: '/housedetail/:id', name: 'Housedetail', component: Housedetail },
    { path: '/*', redirect: '/home' }
  ]
})
