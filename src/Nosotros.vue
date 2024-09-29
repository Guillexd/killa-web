<script setup>
import vision from './assets/vision.avif'
import mision from './assets/mision.avif'
</script>

<template>
  <main class="bg-killaSecondary p-6 font-serif">
    <section class="lg:w-2/3 mx-auto my-6">
      <h1 class="text-7xl font-semibold text-killaText text-center italic">Bodega-Licorería Killa</h1>
      <p class="text-right text-xl jpg">de Taipe Yalli Nancy</p>
    </section>
    <section class="grid lg:grid-cols-2 items-center gap-x-20 lg:w-2/3 mx-auto  text-center lg:text-start">
      <div class="leading-10">
        <h3 class="text-4xl font-bold animate-bounce">Nuestra visión</h3>
        <p>
          Ser la opción preferida de nuestros clientes para la adquisición de productos de primera necesidad y licores,
          ofreciendo una amplia gama de productos de alta calidad, un servicio excepcional y una experiencia de compra
          conveniente y placentera.
        </p>
      </div>
      <picture>
        <img :src="vision" class="rounded-3xl h-96 transition ease-in-out hover:scale-105 mx-auto" alt="Vision">
      </picture>
    </section>
    <section class="grid lg:grid-cols-2 items-center gap-x-20 lg:w-2/3 mx-auto my-20 text-center lg:text-start">
      <div class="leading-10 lg:order-2">
        <h3 class="text-4xl font-bold animate-bounce">Nuestra misión</h3>
        <p>
          Convertirnos en la cadena líder en la venta minorista de productos de primera necesidad y licorería, reconocida por nuestra excelencia en el servicio al cliente, la variedad y calidad de nuestros productos, y nuestro compromiso con la comunidad.
        </p>
      </div>
      <picture class="lg:order-1">
        <img :src="mision" class="rounded-3xl h-96 transition ease-in-out hover:scale-105 mx-auto" alt="Vision">
      </picture>
    </section>
    <section class="lg:w-5/6 mx-auto">
      <h2 class="text-4xl font-bold animate-bounce text-center">Objetivos</h2>
      <div class="grid lg:grid-cols-3 gap-x-10 my-10 text-justify">
        <div class=" bg-killaPrimary px-10 py-6 rounded-2xl flex flex-col justify-evenly">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKJFYaaAlAB7ZK1mvMJmCWg5Zg7RhLxlt5Q&s" alt="" class="h-1/2">
          <p>
            Garantizar la satisfacción del cliente ofreciendo productos de primera calidad y un servicio personalizado.
          </p>
        </div>
        <div class=" bg-killaPrimary px-10 py-6 rounded-2xl flex flex-col justify-evenly">
          <img src="https://media.licdn.com/dms/image/v2/D4E12AQGOrcvDXyJZpg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1686702761381?e=2147483647&v=beta&t=bwcQ1YiYiWW1E5Y3Z-DXQWiBhAnt_L5bWmLVzLiCW7g" alt="" class="h-1/2">
          <p>
            Mantener una operación eficiente y rentable, optimizando los procesos de compra, almacenamiento y distribución.
          </p>
        </div>
        <div class=" bg-killaPrimary px-10 py-6 rounded-2xl flex flex-col justify-evenly">
          <img src="https://estaticos.elcolombiano.com/binrepository/848x565/34c0/780d565/center/11101/OOKD/proveedores-empresarios_38710307_20211009175751.jpg" alt="" class="h-1/2 w-full">
          <p>
            Fomentar relaciones sólidas y duraderas con nuestros proveedores, basadas en la confianza, la transparencia y el
            beneficio mutuo.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
