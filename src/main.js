import Vue from 'vue'
import NavigationBar from "./components/NavigationBar";
import vueCustomElement from 'vue-custom-element'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(vueCustomElement)
Vue.config.productionTip = false 
Vue.customElement('navigation-bar', NavigationBar)




