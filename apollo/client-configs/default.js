import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

const cache = new InMemoryCache()

persistCache({
  cache,
  storage: window.localStorage
})

export default () => ({
  link: new HttpLink({ uri: 'http://localhost:4000/' }),
  cache,
  connectDevTools: true
})
