import "./assets/styles/app.scss"
import "./assets/js/bootstrap"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import VueIziToast from 'vue-izitoast';
import Load from "./components/Load"
import { CChartPie  } from '@coreui/vue-chartjs'

Vue.use(BootstrapVue)
Vue.use(VueIziToast, {
  position: "topRight",
  timeout: 2300
});

// Componentes globais
Vue.component("load", Load);
Vue.component('chart-pie', CChartPie)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
