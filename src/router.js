import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue' 
import General from './views/General.vue'
import Exam from './views/Exam.vue'

Vue.use(Router)


export default new Router({
  history:true,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/quiz/general',
      name: 'general',
      component: General
    },

    {
        path: '/quiz/exam/:type',
        name: 'exam',
        component: Exam
    },

  ]
})
