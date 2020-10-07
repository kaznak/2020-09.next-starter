import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from '../../lib/schema'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

/* !!TODO!! !!FIXME!! 
  A warning message is repeated, that is
 ``API resolved without sending a response for /, this may result in stalled requests.``
 */
export default apolloServer.getMiddleware({
  path: '/api/graphql',
  cors: false,
})
