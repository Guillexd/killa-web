<script setup>
import { ref } from 'vue'
import Footer from './Footer.vue'
import Logo from './assets/logito.png'

// Estado para controlar el menú
const isMenuOpen = ref(false)

// Función para alternar el menú
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="px-4 mx-auto max-w-7xl sm:px-6">
    <div class="relative pt-6 pb-5 sm:pb-10">
      <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
        <section class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <RouterLink to="/"><span class="sr-only">Tienda Killa</span>
              <img class="w-auto h-8 sm:h-10" :src="Logo" width="202" height="40">
            </RouterLink>

            <!-- Botón hamburguesa -->
            <div class="flex items-center -mr-2 md:hidden">
              <button
                @click="toggleMenu" 
                class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                type="button">
                <span class="sr-only">Open main menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

          </div>
        </section>

        <!-- Menú para escritorio -->
        <section class="hidden md:flex md:space-x-10 list-none text-base font-semibold text-gray-500">
          <li>
            <RouterLink to="/" class="hover:text-gray-900" active-class="text-blue-600">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/nosotros" class="hover:text-gray-900" active-class="text-blue-600">Nosotros</RouterLink>
          </li>
          <li>
            <RouterLink to="/productos" class="hover:text-gray-900" active-class="text-blue-600">Productos</RouterLink>
          </li>
          <li>
            <RouterLink to="/contactanos" class="hover:text-gray-900" active-class="text-blue-600">Contáctanos</RouterLink>
          </li>
        </section>

        <section class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <div class="inline-flex rounded-full shadow">
            <a href="https://killa.scriptify-peru.com" target="_blank"
              class="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 ">
              Iniciar sesión
            </a>
          </div>
        </section>
      </nav>
      <!-- Menú para móviles -->
      <section class="md:hidden ease-out duration-300" 
      :class="{ 'max-h-40 opacity-100': isMenuOpen, 'max-h-0 opacity-0': !isMenuOpen }">
          <ul class="flex flex-col space-y-2 mt-2 bg-white p-4 rounded shadow-md text-center">
            <li>
              <RouterLink to="/" class="text-base text-gray-500 hover:text-gray-900" active-class="text-blue-600">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/nosotros" class="text-base text-gray-500 hover:text-gray-900" active-class="text-blue-600">Nosotros</RouterLink>
            </li>
            <li>
              <RouterLink to="/productos" class="text-base text-gray-500 hover:text-gray-900" active-class="text-blue-600">Productos</RouterLink>
            </li>
            <li>
              <RouterLink to="/contactanos" class="text-base text-gray-500 hover:text-gray-900" active-class="text-blue-600">Contáctanos</RouterLink>
            </li>
          </ul>
        </section>
    </div>
  </header>

  <RouterView />
  <Footer />
</template>
