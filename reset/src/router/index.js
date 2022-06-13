import Vue from 'vue'
import VueRouter from 'vue-router'

import AppHeader from '../components/AppHeader'
import Statistics from '../components/Statistics'

import Topic2 from '../components/Topic2/Topic2'
import TopicImg from '../components/Topic2/TopicImg'
import Topic1 from '../components/Topic1/Topic1'
import TopicWord from '../components/Topic1/TopicWord'
import TopicVar from '../components/Topic2/TopicVar'

import NotFound from '../components/draft/NotFound'


import Layout1 from '../components/draft/Layout1'
import Layout2 from '../components/draft/Layout2'


import Settings from '../settings/Settings'
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Not-found',
      component: NotFound
    },
    {
    path: '/',
    component: AppHeader
    },
    {
      path: '/static',
      name: 'statistics',
      component: Statistics
      },
    {
      path: '/settings',
      name:'settings',
      component: Settings
      },

    {
      path: '/topicVar',
      name:'difficulty-level',
      component: Layout2,
      children: [
        {
          path: '',
          name:'difficulty-level',
          component: TopicVar
        },
        {
          path: 'topic2',
          name:'name',
          component: Topic2
        },
        {
          path: 'topic2/topicImg',
          name:'task2',
          component: TopicImg
        }
      ]
    },

    {
      path: '/topic1',
      name:'instruction',
      component: Layout1,
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

