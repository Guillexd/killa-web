import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../Inicio.vue'
import Nosotros from '../Nosotros.vue'
import Productos from '../Productos.vue'
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
      path: '/contactanos',
      component: Contactanos
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
