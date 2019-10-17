<template>
  <div class="sidebar bg-blue-600 shadow z-10">
    <div class="flex justify-between py-3 px-6">
      <Logo v-if="menuOpen" class="h-12 pr-6" />
      <MenuIcon :open="menuOpen" class="py-3" @click.native="toggleMenu" />
    </div>
    <SidebarLinkList v-if="menuOpen" />
  </div>
</template>

<script>
import SidebarLinkList from './SidebarLinkList'
import MenuIcon from '~/components/icons/MenuIcon'
import Logo from '~/components/Logo'

export default {
  components: {
    Logo,
    MenuIcon,
    SidebarLinkList
  },
  data() {
    return {
      menuOpen: true
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style>
.sidebar {
  grid-area: 1 / 1 / 4 / 2;
}
</style>
