<template>
  <div class="container">
    <SocialLoginBtn provider="github" />
  </div>
</template>

<script>
import SocialLoginBtn from '~/components/SocialLoginBtn'
export default {
  components: { SocialLoginBtn },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
