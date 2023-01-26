import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCircle } from '@fortawesome/free-solid-svg-icons'


library.add(faCircle)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).mount('#app')
