import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

//import PrimeVue from 'primevue/config';
//import Aura from '@primevue/themes/aura';
//Quasar 
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import QCalendarDay from '@quasar/quasar-ui-qcalendar/dist/QCalendarDay.esm.js'
import '@quasar/quasar-ui-qcalendar/dist/QCalendarDay.min.css'

const app = createApp(App)
//app.use(PrimeVue, {
//    themes: {
//        preset: Aura
//    }
//});
.use(Quasar, {
    plugins: {},
})
.use(QCalendarDay)
.use(router)
app.mount('#app')
