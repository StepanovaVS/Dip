import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

import AppHeader from '../components/AppHeader'
import Topic4 from '../components/Topic4'
import TopicImg from '../components/TopicImg'
import Topic1 from '../components/Topic1'
import TopicWord from '../components/TopicWord'
import TopicVar from '../components/TopicVar'

import Layout from '../components/Layout'

import Settings from '../settings/Settings'



Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes:[
    {
    path: '/',
    component: AppHeader
    },
    {
      path: '/settings',
      name:'settings',
      component: Settings
      },

    {
      path: '/topicVar',
      name:'difficulty-level',
      component: Layout,
      children: [
        {
          path: '',
          name:'difficulty-level',
          component: TopicVar
        },
        {
          path: 'topic2',
          name:'name',
          component: Topic4
        },
        {
          path: 'topic2/topicImg',
          name:'task4',
          component: TopicImg
        }
      ]
    },

    {
      path: '/topic1',
      name:'instruction',
      component: Layout,
      children: [
        {
          path: '',
          name:'instruction',
          component: Topic1
        },
        {
          path: 'topicWord',
          name:'words',
          component: TopicWord
        }
      ]
    },
]
})
//{
    //path: '/',
    //name: 'Home',
    //component: Home
  //},
  //{
    //path: '/about',
    //name: 'About',
    /// route level code-splitting
    ///this generates a separate chunk (about.[hash].js) for this route
    /// which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
