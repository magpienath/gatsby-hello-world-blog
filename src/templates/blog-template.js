import React from 'react'

const BlogTemplate = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext

    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <section dangerouslySetInnerHTML={{__html: post.html}} />
            <h2>{siteTitle}</h2>
        </div>
    )

}

export default BlogTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `