import Vue from 'vue'
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import Home from './Home.vue'
import Countries from './Countries.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
    render: h => h(Home),
}).$mount('#app')
