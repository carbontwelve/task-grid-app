<template>
  <div class="flex flex-row h-screen w-screen">
    <main-navigation />
    <slide-panel />
    <div class="flex-grow bg-gray-200 h-full">Tasks</div>
    <div class="col-span-6 bg-gray-400 h-full w-2/4">Milestones</div>
  </div>
</template>

<script>
import MainNavigation from '~/components/MainNavigation'
import SlidePanel from '~/components/SlidePanel'

export default {
  components: { SlidePanel, MainNavigation },
  middleware: 'auth',
}
</script>

<style></style>
