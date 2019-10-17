<template>
  <div class="w-full max-w-xl bg-white shadow-md rounded-lg p-8">
    <Logo
      class="mx-auto mb-6 max-w-sm"
      startColor="#079ADD"
      stopColor="#314F8D"
      textColor="#2F5275"
    />
    <h2 class="text-blue-800 text-2xl font-bold text-center">
      Forgot your password?
    </h2>
    <p class="text-gray-200 mb-12 text-center">
      Send a password reset code to your email to continue
    </p>
    <form>
      <div class="mb-12">
        <label class="text-black font-medium mb-2 block">Email</label>
        <input
          v-model="email"
          class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
          placeholder="Enter email"
          type="email"
        />
      </div>
      <button
        class="w-full bg-blue-600 text-white py-3 rounded-lg mb-4"
        @click.prevent="sendPasswordResetCode"
      >
        Send Password Reset Code
      </button>
      <p class="text-center text-gray-200">
        Remember your current password?
        <router-link class="text-blue-600" to="/signin"
          >Go back to sign in</router-link
        >
      </p>
    </form>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    sendPasswordResetCode() {
      Auth.forgotPassword(this.email)
        .then((data) => {
          console.log(`Sending password reset code to ${this.email}...`)
          this.$router.push({ path: '/change-password' })
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>
