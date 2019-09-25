<template>
	<nuxt-link
		class="sidebar__link text-white border-l-4 border-transparent px-5 mb-2 hover:pl-6"
		:to="destination"
	>
		<slot />
	</nuxt-link>
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
