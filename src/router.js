/**
 * Created by lihuashan on 2017/3/28.
 */
import Router from 'vue-router'
import Home from './views/home/home.vue'
import Welcome from './views/home/welcome.vue'

import Item1 from './views/items/item-1.vue'
import Item2 from './views/items/item-2.vue'
import Item3 from './views/items/item-3.vue'
import Item4 from './views/items/item-4.vue'
import Item5 from './views/items/item-5.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/home', component:Home,
            children:[
                {path:'/item-1',component:Item1},
                {path:'/item-2',component:Item2},
                {path:'/item-3',component:Item3},
                {path:'/item-4',component:Item4},
                {path:'/item-5',component:Item5},
                {path:'/',redirect:'/item-1'}
            ]
        },
        { path: '/welcome', component:Welcome},
        { path: '/', redirect: '/home' }
    ]
})