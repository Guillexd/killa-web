import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../Inicio.vue'
import Nosotros from '../Nosotros.vue'
import Productos from '../Productos.vue'
import Servicios from '../Servicios.vue'
import Contactanos from '../Contactanos.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Inicio
    },
    {
      path: '/nosotros',
      component: Nosotros
    },
    {
      path: '/productos',
      component: Productos
    },
    {
      path: '/servicios',
      component: Servicios
    },
    {
      path: '/contactanos',
      component: Contactanos
    }
  ]
})

export default router
