import { mount, createLocalVue } from '@vue/test-utils'
import Avatar from '@/components/Avatar.vue'
import Vuex from 'vuex'

describe('Avatar', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  beforeAll(async () => {
    // note the store will mutate across tests
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
    store.dispatch('saveToken')
  })

  test('is a Vue instance', () => {
    const wrapper = mount(Avatar, { store })
    expect(wrapper.vm).toBeTruthy()
  })
})
