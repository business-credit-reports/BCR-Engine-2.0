<template>
  <div class="sidebar__link-list flex flex-col">
    <SidebarLink
      v-for="link in links"
      :key="link.id"
      :destination="link.destination"
    >
      {{ link.text }}
    </SidebarLink>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink'

export default {
  components: {
    SidebarLink
  },
  data() {
    return {
      links: [
        {
          id: 1,
          text: 'Dashboard',
          destination: '/dashboard',
          permission: 'Admin'
        },
        {
          id: 2,
          text: 'Home',
          destination: '/',
          permission: 'Standard'
        },
        {
          id: 3,
          text: 'Manage Users',
          destination: '/organization/users',
          permission: 'Standard'
        }
      ]
    }
  }
}
</script>
