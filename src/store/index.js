import Vue from 'vue'
import Vuex from 'vuex'
import account from '@/modules/account/store'
import product from '@/modules/product/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    account,
    product
  }
})
