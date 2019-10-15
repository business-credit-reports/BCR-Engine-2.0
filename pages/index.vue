<template>
	<div class="container">
		<amplify-authenticator />
	</div>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
	layout: 'default',
	data() {
		return {
			signedIn: false
		}
	},
	created() {
		AmplifyEventBus.$on('authState', (info) => {
			if (info === 'signedIn') {
				this.$router.push({ path: '/dashboard' })
			}
		})
	}
}
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
