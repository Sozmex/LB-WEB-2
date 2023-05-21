import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SectionBreak from "../components/SectionBreak";
import SectionBreak1 from "../components/SectionBreak1";
import blogImage1 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
import blogImage2 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
import blogImage3 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
import blogImage4 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
import blogImage5 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
import blogImage6 from "../images/cityscape.jpeg"; // Replace with the actual image file name and path
// Import additional images for other cells in the second table as needed

const BlogIndex = ({ data, location }) => {
  const siteTitle = "";
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
    <Layout location={location} title={siteTitle} containerStyle={{ padding: "0 1in" }}>
      <Seo title="All posts" />
      <div className="p-2 mx-auto" style={{ maxWidth: '13in' }}>
        <h1 className="font-display md:text-display-xl text-display-lg items-center text-center">Featured Insights</h1>
        <p className="text-body-lg items-center text-center">
          Our latest thinking on the issues that matter most in business and management.
        </p>
        <SectionBreak />
        <table className="w-full">
          <tbody>
            <tr className="featured-post">
              <td className="pt-0" style={{ height: '25vh', width: '40vh', padding: 0 }}>
                <h2 className="font-display text-display-lg-bold pb-2">
                  <Link to={latestPost.fields.slug} itemProp="url">
                    <span itemProp="headline">{latestPost.frontmatter.title}</span>
                  </Link>
                </h2>
                <p>{latestPost.frontmatter.date} - {latestPost.frontmatter.description}</p>
              </td>
              <td>
                <div
                  className="featured-post-image"
                  style={{
                    backgroundImage: `url(${blogImage1})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                  alt={latestPost.frontmatter.title}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <SectionBreak1 />
        <div style={{ paddingTop: '4rem', paddingBottom: '7rem' }}>
          <table className="w-full table2">
            <tbody>
              <tr className="grid-cols-blog">
                {otherPosts.map((post, index) => (
                  <td key={post.fields.slug} style={{ height: '16vh', padding: '1rem' }}>
                    <div
                      style={{
                        backgroundImage: `url(${index === 0 ? blogImage2 : index === 1 ? blogImage3 : index === 2 ? blogImage4 : index === 3 ? blogImage5 : blogImage6})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100%",
                      }}
                      alt={post.frontmatter.title}
                    />
                    <h2 className="font-bold pb-2 pt-3">
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{post.frontmatter.title}</span>
                      </Link>
                    </h2>
                    <p className="pb-4">{post.frontmatter.date} - {post.frontmatter.description}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
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
