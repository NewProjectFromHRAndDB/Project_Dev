import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        title: '数字化预案系统',
        author: 'hr666'
    }
})

export default store
