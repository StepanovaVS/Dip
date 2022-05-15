//import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

import AppHeader from '../components/AppHeader'
import Topic4 from '../components/Topic4'
import TopicImg from '../components/TopicImg'

//Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
  {
    path: '/',
    component: AppHeader
},
{
  path: '/topic4',
  name:'name',
  component: Topic4
},
{
  path: '/topicImg',
  name:'task4',
  component: TopicImg
}
  
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
