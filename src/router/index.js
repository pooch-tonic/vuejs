import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Countries from '@/Countries'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/countries',
            name: 'Countries',
            component: Countries
        }
    ]
})
