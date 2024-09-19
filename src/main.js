import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
    themes: {
        preset: Aura
    }
});
app.mount('#app')
