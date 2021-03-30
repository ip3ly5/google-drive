import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import FolderView from '../views/FolderView.vue'

const routes = [
  {
    path: '/folder/:id',
    name: 'Folder',
    component: FolderView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.token;
  if (to.name !== 'Login' && !isAuthenticated){
      next({ name: 'Login' });
  }   
  else next()
})

export default router
