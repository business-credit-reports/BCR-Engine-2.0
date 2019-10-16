<template>
  <div class="w-full max-w-xl bg-white shadow-md rounded-lg p-8">
    <Logo
      class="mx-auto mb-6 max-w-sm"
      startColor="#079ADD"
      stopColor="#314F8D"
      textColor="#2F5275"
    />
    <h2 class="text-blue-800 text-2xl font-bold mb-1 text-center">
      Welcome to the BCR App Engine
    </h2>
    <p class="text-gray-200 mb-12 text-center">Sign in to continue</p>
    <ApolloMutation
      :mutation="mutation"
      :variables="{ email, password }"
      @done="onDone"
    >
      <template slot-scope="{ mutate, loading, error }">
        <form @submit.prevent="mutate">
          <div class="mb-6">
            <label class="text-black font-medium mb-2 block">Email</label>
            <input
              v-model="email"
              class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
              placeholder="Enter email"
              type="email"
            />
          </div>
          <div class="mb-12">
            <label class="block text-black font-medium mb-2">Password</label>
            <input
              v-model="password"
              class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
              placeholder="Enter password"
              type="password"
            />
          </div>
          <button
            class="w-full bg-blue-600 text-white py-3 rounded-lg mb-4"
            type="submit"
          >
            Login
          </button>
          <p class="text-center text-gray-200">
            Don't have an account?
            <router-link class="text-blue-600" to="/signup"
              >Create an account</router-link
            >
          </p>
          <span v-if="error">{{ error.graphQLErrors[0].message }}</span>
          <span v-if="loading">Loading</span>
        </form>
      </template>
    </ApolloMutation>
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
