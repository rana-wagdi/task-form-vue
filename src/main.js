import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


library.add(faCircle, faTwitter, faWhatsapp, faMagnifyingGlass)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).mount('#app')
