<template>
  <div class="w-full max-w-xl bg-white shadow-md rounded-lg p-8">
    <Logo
      class="mx-auto mb-6 max-w-sm"
      startColor="#079ADD"
      stopColor="#314F8D"
      textColor="#2F5275"
    />
    <h2 class="text-blue-800 text-2xl font-bold text-center">
      Create a BCR App Engine account
    </h2>
    <p class="text-gray-200 mb-12 text-center">
      Create an account to continue
    </p>
    <form>
      <div class="mb-6">
        <label class="text-black font-medium mb-2 block"
          >Your organization name</label
        >
        <input
          v-model="orgName"
          class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
          placeholder="Example, Inc."
          type="text"
        />
      </div>
      <div class="mb-6">
        <label class="text-black font-medium mb-2 block">Your name</label>
        <input
          v-model="name"
          class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
          placeholder="John Smith"
          type="text"
        />
      </div>
      <div class="mb-6">
        <label class="text-black font-medium mb-2 block">Your email</label>
        <input
          v-model="email"
          class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
          placeholder="john@exampleinc.com"
          type="email"
        />
      </div>
      <div class="mb-12">
        <label class="text-black font-medium mb-2 block"
          >Create your password</label
        >
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
        @click="signUp"
      >
        Create Account
      </button>
      <p class="text-center text-gray-200">
        Already have an account?
        <router-link class="text-blue-600" to="/signin">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import Logo from '../../../Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style></style>
