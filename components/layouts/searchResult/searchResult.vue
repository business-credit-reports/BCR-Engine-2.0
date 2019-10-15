<template>
  <div class="shadow my-4 p-4">
    {{ result.companyName }}
    {{ result.experianBIN }}
    <nuxt-link
      class="bg-blue-200 text-white"
      :to="'/reports/' + result.experianBIN"
    >
      Order Report
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {
    result: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
