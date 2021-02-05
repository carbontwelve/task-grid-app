export const state = () => {
  return {
    open: false,
    id: null,
    title: '',
    component: null,
  }
}

export const getters = {}

export const mutations = {
  setOpen(state, open) {
    state.open = open
  },
  setComponent(state, { id, title, component }) {
    state.id = id
    state.title = title
    state.component = component
  },
}

export const actions = {
  open({ commit, state }, { id, title, component }) {
    if (!state.open) {
      commit('setComponent', { id, title, component })
      commit('setOpen', true)
    }
  },
  close({ commit, state }) {
    if (state.open) {
      commit('setOpen', false)
      // @todo wait 500ms until triggering the below so animation can complete
      commit('setComponent', { id: null, title: '', component: null })
    }
  },
}
