import gql from 'graphql-tag'

export default gql`
  query getReport(
    $bin: String!
    $subcode: String!
    $comments: String!
    $dataPoints: [String!]!
  ) {
    getReport(
      data: {
        bin: $bin
        subcode: $subcode
        comments: $comments
        dataPoints: $dataPoints
      }
    ) {
      bin
      businessName
      creditStatus {
        yearsOnFile
        combinedTradelineCount
        combinedAccountBalance
        combinedRecentHighCreditAmount
      }
    }
  }
`
