import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from '../../lib/schema'

import { NextApiRequest, NextApiResponse } from 'next/types'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
}).getMiddleware({
  path: '/api/graphql',
  cors: false,
  bodyParserConfig: true,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

function useMiddleware(middleware: any) {
  // !!TODO!! fix the type of middleware
  return async (req: NextApiRequest, res: NextApiResponse) =>
    new Promise<void>((resolve, reject) => {
      middleware(req, res, (result: any) => {
        // !!TODO!! fix the type of result
        if (result instanceof Error) {
          // !!TODO!! output error log
          res.status(500)
          return reject(result)
        }
        // !!TODO!! output access log
        return resolve(result)
      })
    })
}

export default useMiddleware(apolloServer)
