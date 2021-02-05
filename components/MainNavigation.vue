<template>
  <div
    class="z-10 relative flex flex-col items-center text-gray-400 bg-gray-800 h-full w-16 py-4"
  >
    <avatar />

    <div class="flex-grow mt-4">
      <action-button
        :is-disabled="isOpen && openId !== 'create-new-workbook'"
        :class="{ 'is-selected': openId === 'create-new-workbook' }"
        icon="table"
        label="New Workbook"
        @click="showPanel('create-new-workbook')"
      />
      <action-button
        :is-disabled="isOpen && openId !== 'workbooks'"
        :class="{ 'is-selected': openId === 'workbooks' }"
        icon="collection"
        label="Workbooks"
        @click="showPanel('workbooks')"
      />
    </div>

    <navigation-group>
      <action-button
        :is-disabled="isOpen && openId !== 'config'"
        :class="{ 'is-selected': openId === 'config' }"
        icon="cog"
        label="Logout"
        @click="showPanel('config')"
      />
    </navigation-group>

    <navigation-group>
      <action-button
        :is-disabled="isOpen && openId !== 'notifications'"
        :class="{ 'is-selected': openId === 'notifications' }"
        icon="bell"
        label="Notifications"
        @click="showPanel('notifications')"
      />
      <action-button
        :is-disabled="isOpen && openId !== 'settings'"
        :class="{ 'is-selected': openId === 'settings' }"
        icon="user"
        label="User Settings"
        @click="showPanel('settings')"
      />
    </navigation-group>

    <navigation-group>
      <action-button
        :is-disabled="isOpen"
        icon="logout"
        label="Logout"
        class="text-red-700"
        @click="logout"
      />
    </navigation-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavigationGroup from '~/components/NavigationGroup'
import ActionButton from '~/components/ActionButton'
import Avatar from '~/components/Avatar'

export default {
  components: { NavigationGroup, ActionButton, Avatar },
  computed: {
    ...mapState({
      openId: (state) => state.panel.id,
      isOpen: (state) => state.panel.open,
    }),
  },
  methods: {
    showPanel(id) {
      let title, component

      switch (id) {
        case 'notifications':
          title = 'Notifications'
          component = '123'
          break
        case 'settings':
          title = 'User Settings'
          component = '123'
          break
        case 'create-new-workbook':
          title = 'Create Workbook'
          component = '123'
          break
        case 'workbooks':
          title = 'Your Workbooks'
          component = '123'
          break
        case 'config':
          title = 'Configuration'
          component = '123'
          break
      }

      this.$store.dispatch('panel/open', {
        id,
        title,
        component,
      })
    },
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
  },
}
</script>
