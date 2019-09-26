<template>
  <li>
    <nuxt-link
      class="sidebar__link px-4 block w-full text-white border-l-4 border-transparent hover:pl-5 no-underline"
      :to="destination"
    >
      <slot />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    destination: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style>
.sidebar__link-list .nuxt-link-exact-active {
  @apply border-white;
}

.sidebar__link {
  transition: padding 0.3s ease;
}
</style>
