import Cookies from 'js-cookie'

export default async function ({ route, store, redirect }) {
  // If the user has a token but no user object
  if (!store.getters['auth/check'] && store.getters['auth/token']) {
    await store.dispatch('auth/fetchUser')
  }

  // If the user is not authenticated
  if (!store.getters['auth/check']) {
    Cookies.set('intended_url', route.fullPath)
    return redirect('/login')
  }
}
