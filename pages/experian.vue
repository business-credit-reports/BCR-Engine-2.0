<template>
  <div>
    <div v-if="this.$apollo.loading">loading...</div>
    <div>
      Search
      <input v-model="values.companyName" type="text" />
    </div>
    <searchResult
      v-for="(result, i) in experianSearchResults"
      :key="i"
      :result="result"
    />
    <div v-if="this.$apollo.error">Error</div>
  </div>
</template>

<script>
import EXPERIAN_QUERY from '../queries/experian'
import searchResult from '../components/layouts/searchResult/searchResult'

export default {
  layout: 'dash',
  components: {
    searchResult
  },
  data() {
    return {
      query: EXPERIAN_QUERY,
      experianSearchResults: [],
      values: {
        companyName: '',
        city: 'NEY YORK',
        state: 'NY',
        subcode: '0517614'
      }
    }
  },
  apollo: {
    experianSearchResults: {
      query: EXPERIAN_QUERY,
      debounce: 300,
      variables() {
        return {
          ...this.values
        }
      },
      skip() {
        return !this.values.companyName
      }
    }
  },

  created() {
    this.$apollo.queries.experianSearchResults.setOptions({
      fetchPolicy: 'cache-first'
    })
  }
}
</script>

<style></style>
