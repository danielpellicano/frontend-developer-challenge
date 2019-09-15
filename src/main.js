import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index';
import store from '@/store/index';

import BootstrapVue from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('./assets/css/style.css')

Vue.config.productionTip = false


Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
