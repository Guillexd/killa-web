<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const form = ref({
  name: null,
  phone: null,
  email: null,
  interest: null,
  message: null,
})
const errors = ref({})

const validations = z.object({
  name: z.string({
    required_error: 'El nombre es obligatorio',
    invalid_type_error: 'El nombre es obligatorio',
  }).min(4, { message: 'El nombre es debe ser de mínimo 4 caracteres' }),
  phone: z.number({
    required_error: 'El teléfono es obligatorio',
    invalid_type_error: 'El teléfono es obligatorio',
  }).gt(900000000, 'Debe ser un número de teléfono válido').lt(999999999, 'Debe ser un número de teléfono válido'),
  email: z.string({
    required_error: 'El correo electrónico es obligatorio',
    invalid_type_error: 'El correo electrónico es obligatorio',
  }).email('El correo electrónico no es válido'),
  interest: z.string({
    required_error: 'Selecciona una opción',
    invalid_type_error: 'Selecciona una opción',
  }),
  message: z.string({
    required_error: 'El mensaje es obligatorio',
    invalid_type_error: 'El mensaje es obligatorio',
  }).min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

const enviarDatos = () => {
  errors.value = {}
  try {
    validations.parse(form.value)
    alert('Formulario enviado con éxito')
    form.value = {}
  } catch (e) {
    if (e instanceof z.ZodError) {
      e.errors.forEach((error) => {
        errors.value[error.path[0]] = error.message
      })
    }
  }
};
</script>

<template>
  <main class="bg-killaSecondary p-6">
    <article class="lg:grid grid-cols-2 gap-x-10 lg:w-5/6 items-center mx-auto">
      <section>
        <form @submit.prevent="enviarDatos" class="max-w-lg mx-auto p-6 border rounded-lg shadow-2xl bg-white">
          <h2 class="text-2xl font-semibold mb-6 text-center">Bodega-Licorería Killa</h2>

          <section class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input id="name" type="text" v-model="form.name"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
            <span v-if="errors.name" class="text-sm text-red-700">{{ errors.name }}</span>
          </section>

          <section class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
            <input id="phone" type="number" v-model="form.phone"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
            <span v-if="errors.phone" class="text-sm text-red-700">{{ errors.phone }}</span>
          </section>

          <section class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input id="email" type="text" v-model="form.email"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
            <span v-if="errors.email" class="text-sm text-red-700">{{ errors.email }}</span>
          </section>

          <section class="mb-4">
            <label for="interest" class="block text-sm font-medium text-gray-700">¿Qué te interesó?</label>
            <select id="interest" v-model="form.interest"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
              <option value="vinos">Vinos</option>
              <option value="cervezas">Cervezas artesanales</option>
              <option value="licores">Licores (ron, vodka, gin, etc.)</option>
              <option value="destilados">Destilados (whisky, tequila, etc.)</option>
              <option value="bebidas_no_alcoholicas">Bebidas no alcohólicas</option>
              <option value="ofertas">Ofertas y promociones</option>
              <option value="regalos">Ideas de regalo</option>
              <option value="eventos">Eventos y catas de bebidas</option>
              <option value="otros">Otros</option>
            </select>
            <span v-if="errors.interest" class="text-sm text-red-700">{{ errors.interest }}</span>
          </section>

          <section class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea id="message" rows="4" v-model="form.message"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"></textarea>
            <span v-if="errors.message" class="text-sm text-red-700">{{ errors.message }}</span>
          </section>

          <button type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">Contáctanos</button>
        </form>

      </section>
      <section class="rounded-3xl shadow-2xl w-full h-96 my-10 lg:my-0 lg:h-full overflow-hidden p-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4736213471624!2d-75.20758372387672!3d-12.079694642516928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e9655b2e86ed7%3A0xb1bf857339a83b29!2sJr.%2028%20de%20Julio%20%26%20Av.%20Leoncio%20Prado%2C%2012003!5e0!3m2!1ses!2spe!4v1727557006806!5m2!1ses!2spe"
          style="border:0;" class="h-full w-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </article>
  </main>
</template>
