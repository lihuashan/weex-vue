/**
 * Created by lihuashan on 2017/3/28.
 */
import Vuex from 'vuex'

if (WXEnvironment.platform !== 'Web') {
    Vue.use(Vuex)
}

import user from './user';

const store = new Vuex.Store({
    modules:{
        user
    }
})

export default store
