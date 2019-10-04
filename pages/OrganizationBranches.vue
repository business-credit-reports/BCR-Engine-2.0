<template>
  <ApolloQuery :query="query">
    <template v-slot="{ result: { error, data }, isLoading }">
      {{ data }}
      <!-- <div v-if="isLoading" class="loading apollo">Loading...</div>
      <div>
        <h1 class="font-medium text-lg text-black">Branches</h1>
        <p class="text-gray-200 text-sm mb-8 font-medium">
          Organization branches
        </p>
        <div class="flex">
          <div class="w-3/4 mr-4">
            <div
              v-for="branch in data.me.organization.branches"
              :key="branch.id"
              class="shadow bg-white p-4 flex justify-between mb-4"
            >
              <div class="w-1/2">
                <p class="font-medium">{{ branch.name }}</p>
                <p class="text-gray-200 text-sm">Name</p>
              </div>
              <div class="w-1/2">
                <p class="font-medium">{{ branch.city }}</p>
                <p class="text-gray-200 text-sm">City</p>
              </div>
            </div>
          </div>
          <div class="w-1/3 ml-4">
            <div class="shadow bg-white p-4">
              <h2 class="font-medium text-lg text-black text-center">
                Add Branches
              </h2>
              <p class="text-gray-200 text-sm mb-8 font-medium text-center">
                Add branches to your organization
              </p>
            </div>
          </div>
        </div>
      </div> -->
    </template>
  </ApolloQuery>
</template>

<script>
import ME from '../queries/me'

export default {
  name: 'OrganizationBranches',
  data() {
    return {
      query: ME
    }
  }
}
</script>
