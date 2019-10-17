<template>
  <div class="w-full max-w-xl bg-white shadow-md rounded-lg p-8">
    <Logo
      class="mx-auto mb-6 max-w-sm"
      startColor="#079ADD"
      stopColor="#314F8D"
      textColor="#2F5275"
    />
    <h2 class="text-blue-800 text-2xl font-bold text-center">
      Reset your password
    </h2>
    <p class="text-gray-200 mb-12 text-center">
      Enter your password reset code and change your password
    </p>
    <form>
      <div class="mb-6">
        <label class="text-black font-medium mb-2 block">Email</label>
        <input
          v-model="email"
          class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
          placeholder="Enter email"
          type="email"
        />
      </div>
      <div class="mb-6">
        <label class="text-black font-medium mb-2 block">Code</label>
        <input
          v-model="code"
          class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
          placeholder="Enter password reset code"
          type="text"
        />
      </div>
      <div class="mb-12">
        <label class="text-black font-medium mb-2 block">New Password</label>
        <div class="inline-block relative w-full">
          <input
            v-model="newPassword"
            class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
            placeholder="Enter new password"
            :type="inputType"
          />
          <a
            href="#"
            class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-200"
            @click.prevent="togglePassword"
          >
            {{ passwordToggleText }}
          </a>
        </div>
      </div>
      <button
        class="w-full bg-blue-600 text-white py-3 rounded-lg mb-4"
        @click.prevent="changePassword"
      >
        Change Password
      </button>
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
      newPassword: '',
      code: '',
      inputType: 'password',
      passwordToggleText: 'Show'
    }
  },
  computed: {
    email: {
      get() {
        return this.$store.state.auth.email
      },
      set(value) {
        this.$store.commit('auth/updateEmail', value)
      }
    }
  },
  methods: {
    changePassword() {
      Auth.forgotPasswordSubmit(this.email, this.code, this.newPassword)
        .then((data) => {
          console.log(`Password has been reset to ${this.newPassword}.`)
          this.$router.push({ path: '/signin' })
        })
        .catch((err) => console.log(err))
    },
    togglePassword() {
      if (this.inputType === 'password') {
        this.inputType = 'text'
        this.passwordToggleText = 'Hide'
      } else {
        this.inputType = 'password'
        this.passwordToggleText = 'Show'
      }
    }
  }
}
</script>
