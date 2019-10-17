<template>
  <div class="w-full max-w-xl bg-white shadow-md rounded-lg p-8">
    <Logo
      class="mx-auto mb-6 max-w-sm"
      startColor="#079ADD"
      stopColor="#314F8D"
      textColor="#2F5275"
    />
    <h2 class="text-blue-800 text-2xl font-bold text-center">
      Welcome to the BCR App Engine
    </h2>
    <p class="text-gray-200 mb-12 text-center">Sign in to continue</p>
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
      <div>
        <label class="block text-black font-medium mb-2">Password</label>
        <div class="inline-block relative w-full">
          <input
            v-model="password"
            class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
            placeholder="Enter password"
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
      <div class="mb-12 flex justify-end">
        <router-link class="text-blue-600" to="/password-reset"
          >Forgot password?</router-link
        >
      </div>
      <button
        class="w-full bg-blue-600 text-white py-3 rounded-lg mb-4"
        @click.prevent="signIn"
      >
        Sign In
      </button>
      <p class="text-center text-gray-200">
        Don't have an account?
        <router-link class="text-blue-600" to="/signup"
          >Create an account</router-link
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
      password: '',
      error: '',
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
    signIn() {
      Auth.signIn(this.email, this.password)
        .then((user) => {
          this.$router.push({ path: '/' })
          console.log(`Signed in under ${this.email}.`)
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
