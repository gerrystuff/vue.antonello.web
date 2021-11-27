import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router/index.js'

import '@fortawesome/fontawesome-free/js/all'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')