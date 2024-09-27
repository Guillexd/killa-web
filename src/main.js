import './assets/main.css'

import { createApp } from 'vue'
import NavBar from './NavBar.vue'
import router from './router'

const app = createApp(NavBar)

app.use(router)

app.mount('#app')
