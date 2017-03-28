/**
 * Created by lihuashan on 2017/3/28.
 */
import Router from 'vue-router'
import Home from './views/home/home.vue'
import Welcome from './views/home/welcome.vue'

Vue.use(Router)

export default new Router({
    routes:[
        { path: '/home', component:Home},
        { path: '/welcome', component:Welcome},
        { path: '/', redirect: '/home' }
    ]
})