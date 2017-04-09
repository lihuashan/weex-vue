/**
 * Created by lihuashan on 2017/4/8.
 */

import * as type from './mutations_types'

const state = {
    userName:'Jam'
}
const actions = {
    switch_user:({commit}, param) => commit('SWITCH_USER',{userName: param})
}
const mutations = {
    [type.SWITCH_USER](state,name){
        state.userName = name
    }
}
const getters = {
    changeName:state => {
        return state.userName
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}
