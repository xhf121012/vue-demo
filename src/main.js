import Vue from 'vue'
import App from './Scroll.vue'
import "./css/index.css";
import VConsole from "vconsole";
new VConsole();

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
