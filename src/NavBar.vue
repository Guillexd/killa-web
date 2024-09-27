<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="px-4 mx-auto max-w-7xl sm:px-6">
    <div class="relative pt-6 pb-16 sm:pb-24">
      <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">

        <section class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <RouterLink to="/"><span class="sr-only">Tienda Killa</span>
              <img class="w-auto h-8 sm:h-10" src="https://www.svgrepo.com/show/448244/pack.svg" width="202" height="40">
            </RouterLink>

            <!-- boton hamburguesa -->
            <div class="flex items-center -mr-2 md:hidden">
              <button
                class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                type="button" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

          </div>
        </section>

        <section class="hidden md:flex md:space-x-10 list-none">
          <li>
            <RouterLink to="/" class="text-base font-normal text-gray-500 list-none hover:text-gray-900">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/nosotros" class="text-base font-normal text-gray-500 list-none hover:text-gray-900">Nosotros
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/productos" class="text-base font-normal text-gray-500 list-none hover:text-gray-900">
              Productos</RouterLink>
          </li>
          <li>
            <RouterLink to="/servicios" class="text-base font-normal text-gray-500 list-none hover:text-gray-900">
              Servicios</RouterLink>
          </li>
          <li>
            <RouterLink to="/contactanos" class="text-base font-normal text-gray-500 list-none hover:text-gray-900">
              Contáctanos</RouterLink>
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
    </div>
  </header>
  <RouterView />
</template>

