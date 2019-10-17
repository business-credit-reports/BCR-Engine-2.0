<template>
  <ul class="sidebar__link-list flex flex-col py-3">
    <SidebarLinkSection
      v-for="section in sidebarLinkSections"
      :key="section.id"
      class="mb-4"
      :section="section"
    />
    <li>
      <button
        class="sidebar__link text-white border-l-4 border-transparent px-5 mb-2 hover:pl-6"
        @click="signOut"
      >
        Signout
      </button>
    </li>
  </ul>
</template>

<script>
import { Auth } from 'aws-amplify'
import SidebarLinkSection from './SidebarLinkSection'

export default {
  components: {
    SidebarLinkSection
  },
  data() {
    return {
      sidebarLinkSections: [
        {
          id: 1,
          name: 'Web Apps',
          links: [
            {
              id: 1,
              name: 'Email',
              destination: '/email',
              links: [
                {
                  id: 1,
                  name: 'Inbox',
                  destination: '/inbox'
                }
              ]
            },
            {
              id: 2,
              name: 'Chat',
              destination: '/chat',
              links: []
            },
            {
              id: 3,
              name: 'Calendar',
              destination: '/calendar',
              links: []
            }
          ]
        },
        {
          id: 2,
          name: 'Hello',
          links: [
            {
              id: 1,
              name: 'Email',
              destination: '/email',
              links: [
                {
                  id: 1,
                  name: 'Inbox',
                  destination: '/inbox'
                }
              ]
            },
            {
              id: 2,
              name: 'Chat',
              destination: '/chat',
              links: []
            },
            {
              id: 3,
              name: 'Calendar',
              destination: '/calendar',
              links: []
            }
          ]
        }
      ]
    }
  },
  methods: {
    signOut() {
      Auth.signOut()
      this.$router.push({ path: '/signin' })
    }
  }
}
</script>
