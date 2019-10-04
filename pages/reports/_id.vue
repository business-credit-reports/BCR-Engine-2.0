<template>
  <ApolloQuery :query="query" :variables="{ ...variables }" :prefetch="true">
    <template v-slot="{ result: { loading, error, data }, isLoading }">
      <!-- Loading -->
      <div v-if="isLoading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo shadow max-w-lg p-12">
        <h1 class="font-bold text-md">Buiness Name</h1>
        <p class="capitalize">
          {{ data.getReport.businessName.toLowerCase() }}
        </p>

        <div v-for="(item, i) in data.getReport.creditStatus" :key="i">
          <h1 class="font-bold text-md">Years in Business</h1>
          {{ item.yearsOnFile }}
          <h1 class="font-bold text-md">Trade Lines</h1>
          {{ item.combinedTradelineCount }}
          <h1 class="font-bold text-md">Account Balance</h1>
          {{ item.combinedAccountBalance }}
          <h1 class="font-bold text-md">Recent High Credit Ammount</h1>
          {{ item.combinedRecentHighCreditAmount }}
        </div>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
import getReport from '../../queries/report'

export default {
  layout: 'dash',
  data() {
    return {
      query: getReport,
      variables: {
        bin: this.$route.params.id,
        subcode: '0517614',
        comments: 'test123',
        dataPoints: ['creditStatus']
      }
    }
  }
}
</script>
