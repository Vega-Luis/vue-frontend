import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login';
import Consults from '../components/Consults';
import Insert from '../components/Insert'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '', redirect: '/login'
    },
    {
      path: '/', redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/consults',
      component: Consults
    },
    {
      path: '/insert',
      component: Insert
    },
    {
      path: '**',
      component: Login
    }
  ]
})