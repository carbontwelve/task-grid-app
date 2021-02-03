export default function ({ $axios, store }) {
  $axios.onRequest((request) => {
    const token = store.getters['auth/token']
    if (token) {
      request.headers.common.Authorization = `Bearer ${token}`
    }
    return request
  })
}
