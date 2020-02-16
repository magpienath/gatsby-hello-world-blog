import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = ({data}) => {
  const arr = data.allMarkdownRemark.edges
  return (
    <Layout>
    <SEO title="Page two" />
    <h1>{arr[0].node.frontmatter.title}</h1>
    {arr.map((item, index) => {
        return (
            <div>
                <p>{item.node.frontmatter.description}</p>
                <p dangerouslySetInnerHTML={{__html: item.node.html }} />
            </div>
        )
    })}
     <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default ThirdPage

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: {frontmatter: {title: {glob: "Football"}}}) {
    edges {
        node {
        id
        frontmatter {
            title
            description
            heading
        }
        html
        }
    }
    }
}    
`