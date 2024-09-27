<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const images = ref([
  'https://via.placeholder.com/400x300?text=Imagen+1',
  'https://via.placeholder.com/400x300?text=Imagen+2',
  'https://via.placeholder.com/400x300?text=Imagen+3',
])

const currentIndex = ref(0)
const intervalId = ref(null)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
};

// Cambia de imagen automáticamente
const startAutoChange = () => {
  intervalId.value = setInterval(nextImage, 2000) // Cambia cada 3 segundos
}

// Limpia el intervalo al desmontar el componente
onMounted(() => {
  startAutoChange()
})

onBeforeUnmount(() => {
  console.log(intervalId.value)
  clearInterval(intervalId.value)
})
</script>

<template>
  <main class="">
    <div class="flex items-center justify-center">
    <button @click="prevImage" class="px-4 py-2 bg-gray-300 rounded-lg">‹</button>
    
    <transition name="fade" mode="out-in">
      <img :key="currentIndex" :src="images[currentIndex]" alt="Carrusel de imágenes" class="max-w-xs max-h-72 mx-4" />
    </transition>
    
    <button @click="nextImage" class="px-4 py-2 bg-gray-300 rounded-lg">›</button>
  </div>
  </main>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active en <2.1.8 */ {
  opacity: 0;
}
</style>