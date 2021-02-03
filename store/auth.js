import Cookies from 'js-cookie'

export const state = () => {
  return {
    user: null,
    token: Cookies.get('token'),
  }
}

export const getters = {
  user: (state) => state.user,
  token: (state) => state.token,
  check: (state) => state.user !== null,
}

export const mutations = {
  setToken(state, { token, remember }) {
    state.token = token
    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  setUser(state, { user }) {
    state.user = user
  },

  unsetToken(state) {
    // state.token = null
    // Cookies.remove('token')
    console.log('oh no')
  },

  logout(state) {
    state.user = null
    state.token = null

    Cookies.remove('token')
  },
}

export const actions = {
  saveToken({ commit, dispatch }, payload) {
    commit('setToken', payload)
  },

  async fetchUser({ commit }) {
    try {
      const { data } = await this.$axios.get('/api/user')
      commit('setUser', { user: data })
    } catch (e) {
      commit('unsetToken')
    }
  },

  async logout({ commit }) {
    try {
      await this.$axios.post('/api/logout')
    } catch (e) {}

    commit('logout')
  },
}
