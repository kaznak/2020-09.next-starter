import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

function isServerSide() {
  return typeof window === 'undefined'
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: isServerSide(),
    link: new HttpLink({
      uri: publicRuntimeConfig.cmsEndpoint, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache(),
  })
}

const apolloClient = createApolloClient()

export function initializeApollo() {
  const _apolloClient = apolloClient ?? createApolloClient()
  return _apolloClient
}
