<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import ext1 from './assets/exterior1.jpg'
import ext2 from './assets/exterior2.jpg'
import ext3 from './assets/exterior3.jpg'
import ext4 from './assets/exterior4.jpg'
import ext5 from './assets/exterior5.jpg'
import ext6 from './assets/exterior6.jpg'
import ext7 from './assets/exterior7.jpg'
import ext8 from './assets/exterior8.jpg'
import Logo from './assets/logito.png'
import interior1 from './assets/interior1.jpg'
import interior2 from './assets/interior2.jpg'

const images = [
  ext1,
  ext2,
  ext3,
  ext4,
  ext5,
  ext6,
  ext7,
  ext8,
  interior1,
  interior2
]

const currentIndex = ref(0)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

let interval;

onMounted(() => {
  interval = setInterval(nextImage, 3000);
})

onUnmounted(() => {
  clearInterval(interval);
})
</script>

<template>
  <main class="bg-killaSecondary font-serif">
    <section class="slider p-6">
      <picture class="image-container flex justify-center h-[50vh] lg:h-[70vh]">
        <img v-for="(image, index) in images" :key="index" :src="image" :class="{ active: currentIndex === index }"
          class="rounded-xl object-contain h-full" alt="Bodega Killa">
      </picture>
      <div class="mx-auto flex justify-evenly mt-6">
        <button @click="prevImage">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 transition ease-in-out hover:scale-125" viewBox="0 0 320 512">
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </button>
        <button @click="nextImage">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 transition ease-in-out hover:scale-125" viewBox="0 0 320 512">
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
      </div>
    </section>
    <section class="flex justify-center">
      <div class="w-5/6 lg:w-3/5 grid grid-col-1 lg:grid-cols-2 items-center bg-killaPrimary rounded-3xl p-10">
        <picture class="animate-bounce">
          <img :src="Logo" alt="Killa">
        </picture>
        <p class="text-lg leading-9">
          Nuestro mercado objetivo se compone de una amplia gama de consumidores que buscan conveniencia, calidad y
          variedad en sus compras diarias. Nos dirigimos a clientes de todas las edades y niveles socioeconómicos que
          valoran la comodidad de encontrar todo lo que necesitan en un solo lugar, desde productos esenciales para el
          hogar hasta bebidas para ocasiones especiales.
        </p>
      </div>
    </section>
    <section class="text-center w-5/6 lg:w-3/5 mx-auto italic leading-10 py-10">
      <span class="text-5xl">
        ¿Te apetece visitarnos?
      </span>
      <p class="w-2/3 mx-auto mb-8">
        Descubre nuestra variedad de productos frescos y abarrotes de calidad. Ven y disfruta de un servicio cercano y personalizado. <strong> ¡Estamos aquí para ayudarte con todo lo que necesitas! </strong>
      </p>
      <RouterLink to="/contactanos" class="border border-black rounded-md px-4 py-2 hover:bg-gray-300">DÉJANOS TUS DATOS AQUÍ</RouterLink>
    </section>

  </main>
</template>

<style scoped>
.slider {
  position: relative;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.image-container img {
  position: absolute;
  transition: opacity 0.5s;
  opacity: 0;
}

.image-container img.active {
  opacity: 1;
}
</style>
