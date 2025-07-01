<script setup>
import { ref, computed } from 'vue'
import { z } from 'zod'

const form = ref({
  platform: '',
  password: ''
})

const savedAccounts = ref([])
const showStates = ref([])

const passwordRules = [
  {
    label: 'Debe tener al menos 8 caracteres',
    validate: (val) => val.length >= 8,
  },
  {
    label: 'Debe contener al menos una letra minúscula',
    validate: (val) => /[a-z]/.test(val),
  },
  {
    label: 'Debe contener al menos una letra mayúscula',
    validate: (val) => /[A-Z]/.test(val),
  },
  {
    label: 'Debe contener al menos un número',
    validate: (val) => /[0-9]/.test(val),
  },
  {
    label: 'Debe contener al menos un símbolo especial (!@#$%^&*)',
    validate: (val) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
  },
]

const passwordValidationStatus = computed(() =>
  passwordRules.map(rule => ({
    label: rule.label,
    passed: rule.validate(form.value.password),
  }))
)

const errors = ref({})

const validations = z.object({
  platform: z.string({
    required_error: 'La plataforma es obligatorio',
    invalid_type_error: 'La plataforma es obligatorio',
  })
})

const sendPassword = () => {
  errors.value = {}
  try {
    validations.parse({ platform: form.value.platform })
    if (!isPasswordValid.value) {
      errors.value.password = 'La contraseña no cumple con todos los requisitos'
      return
    }
    savedAccounts.value.push({
      platform: form.value.platform,
      password: form.value.password,
    })
    showStates.value.push(false)
    form.value = {
      platform: '',
      password: '',
    }
  } catch (e) {
    if (e instanceof z.ZodError) {
      e.errors.forEach((error) => {
        errors.value[error.path[0]] = error.message
      })
    }
  }
}

const removePassword = (index) => {
  savedAccounts.value.splice(index, 1)
}

const toggleVisibility = (index) => {
  showStates.value[index] = !showStates.value[index]
}

const isPlatformValid = computed(() => form.value.platform.trim().length > 0)
const isPasswordValid = computed(() => passwordValidationStatus.value.every(rule => rule.passed))
const isFormValid = computed(() => isPlatformValid.value && isPasswordValid.value)
const showPasswordRules = computed(() => form.value.password.length > 0)
</script>

<template>
  <main class="bg-killaSecondary p-6 flex justify-center h-screen">
    <article class="lg:grid grid-cols-2 gap-x-10 lg:w-5/6 items-center mx-auto">
      <section>
        <form @submit.prevent="sendPassword" class="max-w-lg mx-auto p-6 border rounded-lg shadow-2xl bg-white">
          <h2 class="text-2xl font-semibold mb-6 text-center">Autómata de gestor de contraseñas</h2>

          <section class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Plataforma</label>
            <input id="name" type="text" v-model="form.platform"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
            <span v-if="errors.name" class="text-sm text-red-700">{{ errors.platform }}</span>
          </section>

          <section class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
            <input id="password" type="text" v-model="form.password"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
          </section>

          <ul v-if="showPasswordRules" class="my-4 space-y-1 text-sm">
            <li v-for="(rule, index) in passwordValidationStatus" :key="index" class="flex items-center">
              <span :class="rule.passed ? 'text-green-600' : 'text-red-600'">
                {{ rule.passed ? '✔️' : '❌' }}
              </span>
              <span :class="rule.passed ? 'text-green-700' : 'text-red-700'" class="ml-2">
                {{ rule.label }}
              </span>
            </li>
          </ul>

          <button type="submit" :disabled="!isFormValid"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">Guardar</button>
        </form>

      </section>

      <section class="rounded-3xl shadow-2xl w-full h-96 my-10 lg:my-0 lg:h-full overflow-hidden p-6 flex flex-col">
        <h3 class="text-3xl font-semibold mb-4 text-killaText text-center italic">Contraseñas guardadas</h3>
        <ul class="space-y-3 flex-1 overflow-y-auto">
          <li v-for="(item, index) in savedAccounts" :key="index"
            class="flex justify-between items-center p-4 bg-white border rounded shadow-sm hover:shadow-md transition">
            <div>
              <p class="font-semibold text-gray-900">{{ item.platform }}</p>
              <p class="text-gray-600 truncate max-w-xs select-text">{{ showStates[index] ? (item.password) : '••••••••'
              }}</p>
            </div>
            <div class="flex items-center space-x-2">
              <button @click="toggleVisibility(index)" class="text-gray-600 hover:text-gray-900 transition"
                title="Mostrar/ocultar contraseña">
                <span v-if="showStates[index]">🔒</span>
                <span v-else>👁️</span>
              </button>

              <button @click="removePassword(index)"
                class="text-red-500 hover:text-red-700 transition rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                title="Eliminar contraseña">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </section>
    </article>
  </main>
</template>
