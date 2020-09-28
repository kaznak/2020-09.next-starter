import { initializeApollo } from '../lib/apolloClient'
import { gql } from '@apollo/client'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function IndexPage({ articles }) {
  return (
    <div>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
        {articles.map(({ title, published_at, content, image }, i) => (
          <div key={i}>
            <h2>{title}</h2>
            <span>{published_at}</span>
            <p>{content}</p>
            <img src={publicRuntimeConfig.cmsOrigin + image[0].url}></img>
          </div>
        ))}
        {/* <p>{JSON.stringify(articles)}</p> */}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const result = await apolloClient.query({
    query: gql`
      query Articles {
        articles {
          id
          title
          content
          image {
            url
          }
          published_at
        }
      }
    `,
    variables: {},
  })

  return { props: { articles: result.data.articles } }
}
