import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
// import Padding from '@/components/Padding'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Board },
    // { path: '/', component: Padding }
  ]
})

/* eslint-disable */