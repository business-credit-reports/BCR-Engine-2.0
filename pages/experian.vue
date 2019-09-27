<template>
  <div>
    <ApolloQuery :query="query" :variables="{ ...values }" :skip="skip">
      <template v-slot="{ result: { error, data }, isLoading }">
        <form @submit.prevent="skip = false">
          <div class="mb-6">
            <label class="text-black font-medium mb-2 block">Name</label>
            <input
              v-model="values.companyName"
              class="border border-gray-100 rounded-lg w-full p-3 leading-tight"
              placeholder="John Smith"
              type="text"
              @focus="skip = true"
            />
          </div>
          <button
            class="w-full bg-blue-600 text-white py-3 rounded-lg mb-4"
            type="submit"
          >
            Create User
          </button>
        </form>
        {{ data }}
        {{ skip }}
        <span v-if="error">{{ error.graphQLErrors[0].message }}</span>
        <span v-if="isLoading">Loading</span>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import EXPERIAN_QUERY from '../queries/experian'
export default {
  layout: 'dash',
  data() {
    return {
      query: EXPERIAN_QUERY,
      values: {
        companyName: '',
        city: 'NEY YORK',
        state: 'NY',
        subcode: '0517614',
        context: true
      },
      skip: true
    }
  }
}
</script>

<style></style>
