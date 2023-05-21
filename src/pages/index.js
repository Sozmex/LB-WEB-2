import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    )
  }

  // Separate the featured post from the rest
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="featured-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <img src="/path/to/featured-image.jpg" alt={featuredPost.frontmatter.title} />
        <h2>
          <Link to={featuredPost.fields.slug} itemProp="url">
            <span itemProp="headline">{featuredPost.frontmatter.title}</span>
          </Link>
        </h2>
        <small>{featuredPost.frontmatter.date}</small>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: featuredPost.frontmatter.description || featuredPost.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>

      <ol style={{ listStyle: `none`, display: `grid`, gridTemplateColumns: `repeat(4, 1fr)`, gap: `1rem` }}>
        {otherPosts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <img src="/path/to/image.jpg" alt={title} />
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
