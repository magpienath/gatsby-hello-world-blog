import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => {
  const blog = data.markdownRemark.frontmatter
  const body = data.markdownRemark.html
  return (
    <Layout>
    <SEO title="Page two" />
    <h1>{blog.title}</h1>
    <p>{blog.description}</p>
    <p dangerouslySetInnerHTML={{__html: body.html }} />
     <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default SecondPage

export const pageQuery = graphql`
query MyQuery {
  markdownRemark(frontmatter: {title: {glob: "Welcome Blog"}}) {
    id
    frontmatter {
      heading
      title
      description
    }
    html
  }
}
`
