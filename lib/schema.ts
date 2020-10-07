import { gql } from 'apollo-server-express'

const records = [
  { id: 1, title: 'Nexus', body: 'Nexus is great.', published: false },
  { id: 2, title: 'Prisma', body: 'Prisma is necessary.', published: true },
]

export const typeDefs = gql`
  type Post {
    body: String
    id: Int
    published: Boolean
    title: String
  }

  type Query {
    drafts: [Post]!
    posts: [Post]
  }
`

export const resolvers = {
  Query: {
    drafts: () => records.filter((x) => !x.published),
    posts: () => records.filter((x) => x.published),
  },
}
