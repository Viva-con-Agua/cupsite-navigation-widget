import Vue from 'vue'
import NavigationBar from "./components/NavigationBar";
import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

Vue.config.productionTip = false
Vue.customElement('cupsite-navigation-bar', NavigationBar)



