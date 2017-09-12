import Vue from 'vue'
import Router from 'vue-router'

const Layout = resolve => require(['../views/layout/layout'], resolve)
const Home = resolve => require(['../views/home/home'], resolve)
const ProtoType = resolve => require(['../views/DesignPatterns/prototype'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      name: 'home',
      children: [
        { path: 'home', component: Home, name: 'HomePage', },
        { path: 'home/prototype', name: 'ProtoType', component: ProtoType },
      ]
    }
  ]
})