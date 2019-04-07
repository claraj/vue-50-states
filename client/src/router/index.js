import Router from 'vue-router'

import StateList from '@/components/StateList'
import StateDetail from '@/components/StateDetail'
import About from '@/components/About'


export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/detail/:state',
            name: 'detail',
            component: StateDetail
        }
    ]
})