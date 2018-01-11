import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/Login'
import test01 from '@/test01'
import overview from '@/overview'
import userlist from '@/user/user-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Login
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/test01',
      name:'test01',
      component:test01
    },
    {
      path:'/overview',
      name:'overview',
      component:overview
    },
    {
      path:'/user/user-list',
      name:'userlist',
      component:userlist
    }
  ]
})
