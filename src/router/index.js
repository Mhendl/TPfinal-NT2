import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  {
    path: '/peliculas',
    name: 'Peliculas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Peliculas.vue')
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: () => import(/* webpackChunkName: "about" */ '../views/Carrito.vue')
  },
  {
    path: '/carritopre',
    name: 'CarritoPre',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarritoPre.vue')
  },
  {
    path: '/paginapago',
    name: 'PaginaPago',
    component: () => import(/* webpackChunkName: "about" */ '../views/PaginaPago.vue')
  },
  {
    path: '/compraexitosa',
    name: 'CompraExitosa',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompraExitosa.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
