import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home'
import Room from './Room'
import alldipe from './alldipe'
import Board from './Board'
import Create from '../components/Create'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Room',
      component: Room
    },
    {
      path: '/alldipe',
      component: alldipe
    },
    {
      path: '/board',
      component: Board
    },
    {
      path: '/create',
      component: Create
    }
  ]
})