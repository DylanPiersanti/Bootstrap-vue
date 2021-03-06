import Vue from 'vue'
import App from './App.vue'
import Bootstrapvue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.js'


Vue.use(Bootstrapvue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
