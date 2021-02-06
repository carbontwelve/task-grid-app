<template>
  <div :class="{ invisible: !isOpen }" class="ui--slide-panel">
    <!-- Background overlay -->
    <div
      :class="{ 'opacity-0': !isOpen, 'opacity-100': isOpen }"
      class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500"
      aria-hidden="true"
    ></div>

    <!-- Slide-over panel -->
    <div
      :class="{ '-translate-x-full': !isOpen, 'translate-x-0': isOpen }"
      class="absolute inset-y-0 transform transition ease-in-out duration-500 sm:duration-700 bg-white shadow-xl top-0"
      style="left: 4rem; width: 24rem"
    >
      <!-- Close button -->
      <div
        :class="{
          'opacity-0': !isOpen,
          'opacity-100': isOpen,
          invisible: !isOpen,
        }"
        class="close-btn sm:-mr-10 sm:pl-4"
      >
        <button
          class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          @click="$store.dispatch('panel/close')"
        >
          <span class="sr-only">Close panel</span>
          <!-- Heroicon name: outline/x -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Panel Content -->
      <div class="relative overflow-y-scroll flex flex-col py-6 h-full">
        <div class="px-4 sm:px-6">
          <h2 id="slide-over-heading" class="text-lg font-medium text-gray-900">
            {{ title }}
          </h2>
        </div>
        <div class="mt-6 relative flex-1 px-4 sm:px-6">
          <!-- Replace with your content -->
          <div class="absolute inset-0 px-4 sm:px-6">
            <div>
              <label
                for="first_name"
                class="block text-sm font-medium text-gray-700"
                >First name</label
              >
              <input
                type="text"
                name="first_name"
                id="first_name"
                autocomplete="given-name"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div
              class="h-full border-2 border-dashed border-gray-200"
              aria-hidden="true"
            ></div>
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      isOpen: (state) => state.panel.open,
      title: (state) => state.panel.title,
    }),
  },
}
</script>

<style>
input {
  padding: 0.5rem;
  box-shadow: 0 0 5px #1a202c42;
}

.ui--slide-panel {
  z-index: 1;
  @apply w-screen h-screen fixed inset-0 overflow-hidden;
  transition: visibility 500ms linear;
}

.close-btn {
  @apply absolute top-0 right-0 -mr-8 pt-4 pl-2 flex ease-in-out duration-500;
  transition: visibility 500ms linear;
}
</style>
