const detail = {
  namespaced: true,
  state: {
    isShowModal: false
  },
  mutations: {},
  actions: {},
  modules: {
    edit: {
      namespaced: true,
      state: {
        isShowModal: false
      },
      mutations: {
        showModal (state, isShow) {
          state.isShowModal = isShow
        }
      },
      actions: {
        showModal (context, isShow) {
          context.commit('showModal', isShow)
        }
      }
    },
    delete: {
      namespaced: true,
      state: {
        isShowModal: false
      },
      mutations: {
        showModal (state, isShow) {
          state.isShowModal = isShow
        }
      },
      actions: {
        showModal (context, isShow) {
          context.commit('showModal', isShow)
        }
      }
    }
  }
}

export default detail
