import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import pinia from './plugins/pinia.js'

import App from './App.vue'
import router from './router'
const app = createApp(App)
// css
import '@/assets/css/styles.css'

// app.use(createPinia())
app.use(pinia)
app.use(router)
app.mount('#app')
