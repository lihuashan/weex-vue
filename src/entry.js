/**
 * Created by lihuashan on 2017/3/28.
 */

import App from './App.vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'

sync(store,router)

new Vue(Vue.util.extend({el:'#root',router,store},App))
router.push("/")