<template>
  <div class="ui--avatar">
    <img
      :src="userAvatar"
      alt="User Avatar"
      class="h-10 w-10 rounded-full ring-2 ring-white"
    />
  </div>
</template>

<script>
export default {
  computed: {
    userAvatar() {
      return this.$store.getters['auth/user'].attributes.avatar
    },
  },
}
</script>

<style>
.ui--avatar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
