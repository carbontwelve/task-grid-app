<template>
  <div class="flex flex-row h-screen w-screen">
    <main-navigation />
    <slide-panel />
    <workbook />
  </div>
</template>

<script>
import MainNavigation from '~/components/MainNavigation'
import SlidePanel from '~/components/SlidePanel'
import Workbook from '~/components/Workbook'

export default {
  components: { Workbook, SlidePanel, MainNavigation },
  middleware: 'auth',
}
</script>

<style></style>
