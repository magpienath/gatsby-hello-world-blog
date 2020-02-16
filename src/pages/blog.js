import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => {
  const blog = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <Layout>
    <SEO title="Page two" />
    <h1>{blog.title}</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <p>{blog.description}</p>
    <p dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html }} />
  </Layout>
  )
}

export default SecondPage

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          date
          description
          title
        }
        html
      }
    }
  }
}
`
