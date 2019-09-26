<template>
  <div>
    <li class="uppercase font-medium text-blue-200 text-xs px-5 mb-2">
      {{ section.name }}
    </li>
    <template v-for="link in section.links">
      <SidebarDropdown
        v-if="link.links.length"
        :key="link.id"
        :dropdown="link"
        >{{ link.name }}</SidebarDropdown
      >
      <SidebarLink v-else :key="link.id" :destination="link.destination">
        {{ link.name }}
      </SidebarLink>
    </template>
  </div>
</template>

<script>
import SidebarDropdown from './SidebarDropdown'
import SidebarLink from './SidebarLink'

export default {
  components: {
    SidebarDropdown,
    SidebarLink
  },
  props: {
    section: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
