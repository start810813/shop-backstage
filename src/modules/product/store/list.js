import detail from './detail'

const list = {
  namespaced: true,
  state: {
    products: [
      {
        key: 123,
        name: '1599套餐',
        price: 1599,
        priceUnit: '元',
        details: [
          {
            key: 123,
            seq: 1,
            name: '蚵仔酥',
            material: '麵粉、蚵仔'
          }
        ]
      },
      {
        key: 234,
        name: '1899套餐',
        price: 1899,
        priceUnit: '元',
        details: [
          {
            key: 123,
            seq: 1,
            name: '蚵仔酥',
            material: '麵粉、蚵仔'
          }
        ]
      },
      {
        key: 345,
        name: '2999套餐',
        price: 2999,
        priceUnit: '元',
        details: [
          {
            key: 123,
            seq: 1,
            name: '蚵仔酥',
            material: '麵粉、蚵仔'
          }
        ]
      }
    ]
  },
  mutations: {
    addProduct (state, newProduct) {
      state.products.push(newProduct)
    },
    editProduct (state, newProduct) {
      state.products.forEach((product) => {
        if (product.key === newProduct.key) product = newProduct
      })
    },
    deleteProduct (state, key) {
      state.products = state.products.filter((product) => product.key !== key)
    }
  },
  actions: {
    editProduct (context, newProduct) {
      context.commit('editProduct', newProduct)
    },
    deleteProduct (context, key) {
      context.commit('deleteProduct', key)
    }
  },
  getters: {},
  modules: {
    detail,
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

export default list
