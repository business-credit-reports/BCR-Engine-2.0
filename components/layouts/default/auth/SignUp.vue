<template>
  <div class="w-full max-w-xl bg-white shadow-md rounded-lg p-8">
    <Logo
      class="mx-auto mb-6 max-w-sm"
      startColor="#079ADD"
      stopColor="#314F8D"
      textColor="#2F5275"
    />
    <div v-if="!confirmation">
      <h2 class="text-blue-800 text-2xl font-bold text-center">
        Create a BCR App Engine account
      </h2>
      <p class="text-gray-200 mb-12 text-center">
        Create an account to continue
      </p>
      <form>
        <div class="mb-6">
          <label class="text-black font-medium mb-2 block">Email</label>
          <input
            v-model="email"
            class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
            placeholder="john@exampleinc.com"
            type="email"
          />
        </div>
        <div class="mb-12">
          <label class="text-black font-medium mb-2 block">Password</label>
          <input
            v-model="password"
            class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
            placeholder="Password must have at least 8 characters"
            type="password"
          />
        </div>
        <button
          class="w-full bg-blue-600 text-white py-3 rounded-lg mb-4"
          type="button"
          @click.prevent="createAccount"
        >
          Create Account
        </button>
        <p class="text-center text-gray-200">
          Already have an account?
          <router-link class="text-blue-600" to="/signin">Sign in</router-link>
        </p>
      </form>
    </div>
    <div v-else>
      <h2 class="text-blue-800 text-2xl font-bold text-center">
        Confirm your email
      </h2>
      <p class="text-gray-200 mb-12 text-center">
        Enter your confirmation code to continue
      </p>
      <form>
        <div class="mb-12">
          <label class="text-black font-medium mb-2 block"
            >Confirmation Code</label
          >
          <input
            v-model="code"
            class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
            type="text"
          />
        </div>
        <button
          class="w-full bg-blue-600 text-white py-3 rounded-lg mb-4"
          type="button"
          @click.prevent="confirmEmail"
        >
          Confirm Email
        </button>
        <p class="text-center text-gray-200">
          Didn't get the confirmation email?
          <a
            href="#"
            class="text-blue-600"
            @click.prevent="resendConfirmationEmail"
          >
            Resend it
          </a>
        </p>
      </form>
    </div>
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
      email: '',
      password: '',
      code: '',
      confirmation: false
    }
  },
  methods: {
    createAccount() {
      Auth.signUp({
        username: this.email,
        password: this.password
      })
        .then((data) => {
          this.confirmation = true
          console.log(data)
        })
        .catch((err) => console.log(err))
    },
    confirmEmail() {
      Auth.confirmSignUp(this.email, this.code, {
        forceAliasCreation: true
      })
        .then((data) => {
          this.$router.push({ path: '/' })
        })
        .catch((err) => console.log(err))
    },
    resendConfirmationEmail() {
      Auth.resendSignUp(this.email)
        .then(() => {
          console.log('Code resent successfully')
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style></style>
