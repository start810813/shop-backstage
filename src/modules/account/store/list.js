const list = {
  namespaced: true,
  state: {
    accounts: []
  },
  mutations: {
    setAccounts (state, accounts) {
      state.accounts = accounts.map((account) => {
        return {
          key: account.key,
          email: account.email
        }
      })
    },
    insertAccount (state, newAccount) {
      state.accounts.push(newAccount)
    },
    editAccount (state, newAccount) {
      // const account = state.accounts.find((account) => account.key === newAccount.key)
    },
    deleteAccount (state, key) {
      state.accounts = state.accounts.filter((account) => account.key !== key)
    }
  },
  actions: {
    getAccounts (context) {
      // API ?
      const data = JSON.parse(window.localStorage.getItem('accounts')) || []
      context.commit('setAccounts', data)
    },
    insertAccount (context, newAccount) {
      // API ?
      const accounts = JSON.parse(window.localStorage.getItem('accounts')) || []
      const lastAccount = accounts.sort((a, b) => b.key - a.key)[0]
      const payload = {
        key: lastAccount ? lastAccount.key + 1 : 100001,
        email: newAccount.email,
        password: newAccount.password
      }
      window.localStorage.setItem(
        'accounts',
        JSON.stringify([...accounts, payload])
      )

      const data = {
        key: payload.key,
        email: payload.email
      }
      context.commit('insertAccount', data)
    },
    editAccountPassword (context, newAccount) {
      // API ?
      const accounts = JSON.parse(window.localStorage.getItem('accounts')) || []
      const account = accounts.find((account) => account.key === newAccount.key)
      account.password = newAccount.password
      window.localStorage.setItem('accounts', JSON.stringify(accounts))

      context.commit('editAccount', newAccount)
    },
    deleteAccount (context, key) {
      // API ?
      const accounts = JSON.parse(window.localStorage.getItem('accounts')) || []
      const nextAccounts = accounts.filter((account) => account.key !== key)
      window.localStorage.setItem('accounts', JSON.stringify(nextAccounts))

      context.commit('deleteAccount', key)
    }
  },
  getters: {},
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

export default list
