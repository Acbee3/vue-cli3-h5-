import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    banner_city: localStorage.cityName
  },
  mutations: {
    changeCity(state, param1) {
      // state.data1 + param1; 没用 必须是一个赋值
      // console.log(state)
      state.banner_city = param1
    }

  },
  actions: {

  }
})