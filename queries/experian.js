import gql from 'graphql-tag'

export default gql`
  query experianSearchResults(
    $companyName: String!
    $city: String!
    $state: String!
    $subcode: String!
  ) {
    experianSearchResults(
      data: {
        companyName: $companyName
        city: $city
        state: $state
        subcode: $subcode
      }
    ) {
      experianBIN
      companyName
      city
      state
    }
  }
`
