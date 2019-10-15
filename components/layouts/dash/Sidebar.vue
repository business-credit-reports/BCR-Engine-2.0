<template>
	<div class="sidebar bg-blue-600 shadow z-10">
		<div class="flex justify-between py-3 px-6">
			<Logo v-if="menuOpen" class="h-12 pr-6" />
			<MenuIcon :open="menuOpen" class="py-3" @click.native="toggleMenu" />
		</div>
		<SidebarLinkList v-if="menuOpen" />
		<button
			class="sidebar__link text-white border-l-4 border-transparent px-5 mb-2 hover:pl-6"
			@click="signOut"
		>
			Signout
		</button>
	</div>
</template>

<script>
import { Auth } from 'aws-amplify'
import Logo from '../../Logo'
import MenuIcon from '../../icons/MenuIcon'
import SidebarLinkList from './SidebarLinkList'

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
		},
		signOut() {
			Auth.signOut()
			this.$router.push({ path: '/' })
		}
	}
}
</script>

<style>
.sidebar {
	grid-area: 1 / 1 / 4 / 2;
}
</style>
