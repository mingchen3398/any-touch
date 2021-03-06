import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/pan',
        name: 'pan',
        component: ()=>import('../views/Pan')
    },
    {
        path: '/topology',
        name: 'Topology',
        component: ()=>import('../views/Topology.vue')
    },
    {
        path: '/sc',
        name: 'SortCarousel',
        component: ()=>import('../views/SortCarousel.vue')
    }


    
]

const router = new VueRouter({
    routes
})

export default router