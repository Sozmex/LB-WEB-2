import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SectionBreak from "../components/SectionBreak";
import blogImage1 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
import blogImage2 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
import blogImage3 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
import blogImage4 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
import blogImage5 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
import blogImage6 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
// Import additional images for other cells in the second table as needed

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  const latestPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className="p-8">
        <h1 className="font-display md:text-display-xl text-display-lg items-center text-center">Featured Insights</h1>
        <p className="text-body-lg items-center text-center">
          Our latest thinking on the issues that matter most in business and management.
        </p>
        <SectionBreak />
        <table className="w-full">
          <tbody>
            <tr className="featured-post">
              <td className="p-4">
                <h2>
                  <Link to={latestPost.fields.slug} itemProp="url">
                    <span itemProp="headline">{latestPost.frontmatter.title}</span>
                  </Link>
                </h2>
                <small>{latestPost.frontmatter.date}</small>
              </td>
              <td className="p-4">
                <img
                  className="featured-post-image"
                  src={blogImage1}
                  alt={latestPost.frontmatter.title}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <SectionBreak />
        <table className="w-full">
          <tbody>
            <tr className="grid-cols-blog">
              {otherPosts.map((post, index) => (
                <td key={post.fields.slug} className="p-4">
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{post.frontmatter.title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                  <p>{post.frontmatter.description}</p> {/* Display the description */}
                  <img
                    src={index === 0 ? blogImage2 : index === 1 ? blogImage3 : index === 2 ? blogImage4 : index === 3 ? blogImage5 : blogImage6}
                    alt={post.frontmatter.title}
                    className="w-full"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
        }
        excerpt
      }
    }
  }
`;
