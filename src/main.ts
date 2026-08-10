import '@thefamousgroup/vixi2-components/style.css'
import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin } from '@thefamousgroup/vixi2-components'
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(plugin, { messages: {}, $pinia: pinia }).mount('#app')
