import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto';
 
Vue.use(VueScrollTo)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('./assets/css/style.css')


Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
