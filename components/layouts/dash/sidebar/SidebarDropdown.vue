<template>
  <div>
    <button
      :class="{ dropdownOpen }"
      class="sidebar__dropdown px-4 w-full text-white border-l-4 border-transparent hover:pl-5 flex justify-between items-center"
      @click="toggleDropdown"
    >
      <slot />
      <svg
        :class="{ dropdownOpen }"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div v-if="dropdownOpen" class="my-1">
      <SidebarLink
        v-for="link in dropdown.links"
        :key="link.id"
        class="pl-2 text-sm"
        :destination="link.destination"
      >
        {{ link.name }}
      </SidebarLink>
    </div>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink'

export default {
  components: {
    SidebarLink
  },
  props: {
    dropdown: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    }
  }
}
</script>

<style>
.sidebar__dropdown {
  transition: padding 0.3s ease;
}

.sidebar__dropdown.dropdownOpen {
  @apply border-white;
}

.sidebar__dropdown .dropdownOpen {
  transform: rotate(180deg);
}
</style>
