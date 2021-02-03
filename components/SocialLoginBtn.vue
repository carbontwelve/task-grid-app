<template>
  <button
    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
    @click="loginAction"
  >
    {{ btnText }}
  </button>
</template>
<script>
export default {
  props: {
    provider: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      popup: null,
      state: 'ready', // ready -> working -> success/error
    }
  },
  computed: {
    btnText() {
      if (this.state === 'ready') {
        return 'Login with Github'
      }
      if (this.state === 'working' || this.state === 'success') {
        return 'Please wait'
      }
      return 'Error'
    },
  },
  mounted() {
    window.addEventListener('message', this.onMessage, false)
  },

  beforeDestroy() {
    window.removeEventListener('message', this.onMessage)
    if (this.popup) {
      this.popup.close()
    }
  },
  methods: {
    onMessage(e) {
      if (e.origin !== this.$config.apiOrigin || !e.data.token) {
        return
      }
      this.state = 'success'

      this.$store.dispatch('auth/saveToken', {
        token: e.data.token,
      })

      this.$router.push({ name: 'index' })
    },
    loginAction() {
      this.state = 'working'
      const options = {
        width: 600,
        height: 800,
      }

      const dualScreenLeft =
        window.screenLeft !== undefined ? window.screenLeft : window.screen.left
      const dualScreenTop =
        window.screenTop !== undefined ? window.screenTop : window.screen.top
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        window.screen.width
      const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        window.screen.height

      options.left = width / 2 - options.width / 2 + dualScreenLeft
      options.top = height / 2 - options.height / 2 + dualScreenTop

      this.popup = window.open(
        this.$config.apiOrigin + '/api/login/' + this.provider,
        'oAuth_' + this.provider,
        Object.keys(options)
          .reduce((acc, key) => {
            acc.push(`${key}=${options[key]}`)
            return acc
          }, [])
          .join(',')
      )

      if (window.focus) {
        this.popup.focus()
      }
    },
  },
}
</script>
