import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import FolderView from '../views/FolderView.vue'
import store from "../store"

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // If user object does not exist send to login page
  let isAuthenticated = localStorage.token
  if (to.name !== 'Login' && !isAuthenticated || to.name !== 'Login' && store.state.user.length == 0){
      next({ name: 'Login' });
  }
  else next()
})

export default router
