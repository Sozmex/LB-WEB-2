import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from './blog-post.module.css';

const BlogPostTemplate = ({ data, location }) => {
  const { markdownRemark: post, previous, next } = data;

  return (
    <Layout location={location}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className={styles.blogPost}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className={styles.blogPostHeader}>
          <h1 itemProp="headline" className={styles.title}>{post.frontmatter.title}</h1>
          <p className={styles.date}>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className={`${styles.blogPostSection} ${styles.content}`}
        />
        <hr />
        <footer className={styles.blogPostFooter}>
          <Bio />
        </footer>
      </article>
      <div className="flex justify-center pl-14 pb-4">
  <table>
    <tr>
    <td className="text-left hover:text-primary-600 hover:translate-y-1 transition-all duration-300">
  <nav>
    {previous && (
      <Link to={previous.fields.slug} rel="prev">
        ← {previous.frontmatter.title}
      </Link>
    )}
  </nav>
</td>
<td className="text-center px-9 hover:text-primary-600 hover:translate-y-1 transition-all duration-300">
  <nav>
    <Link to="/blog">| Home |</Link>
  </nav>
</td>
<td className="text-right hover:text-primary-600 hover:translate-y-1 transition-all duration-300">
  <nav>
    {next && (
      <Link to={next.fields.slug} rel="next">
        {next.frontmatter.title} →
      </Link>
    )}
  </nav>
</td>

    </tr>
  </table>
</div>


    </Layout>
  )
}

export default BlogPostTemplate;

export const pageQuery = graphql`
query BlogPostBySlug(
  $id: String!
  $previousPostId: String
  $nextPostId: String
) {
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(id: { eq: $id }) {
    id
    excerpt(pruneLength: 160)
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      description
    }
  }
  previous: markdownRemark(id: { eq: $previousPostId }) {
    fields {
      slug
    }
    frontmatter {
      title
    }
  }
  next: markdownRemark(id: { eq: $nextPostId }) {
    fields {
      slug
    }
    frontmatter {
      title
    }
  }
}
`
