import gql from 'graphql-tag'

export default gql`
  query me {
    me {
      id
      name
      email
      role
      organization {
        id
        name
        roles
        users {
          id
          name
          email
          role
        }
        branches {
          id
          name
          city
        }
      }
    }
  }
`
