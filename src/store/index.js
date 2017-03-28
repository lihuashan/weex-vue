/**
 * Created by lihuashan on 2017/3/28.
 */
import Vuex from 'vuex'

if (WXEnvironment.platform !== 'Web') {
    Vue.use(Vuex)
}

const store = new Vuex.Store({})

export default store
