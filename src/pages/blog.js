import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SectionBreak from "../components/SectionBreak";
import SectionBreak1 from "../components/SectionBreak1";
import blogImage1 from "../images/tech4.webp";
import blogImage2 from "../images/works/work-12.png";
import blogImage3 from "../images/tech1.jpeg";
import blogImage4 from "../images/tech2.jpeg";
import blogImage5 from "../images/tech3.jpeg";
import blogImage6 from "../images/tech4.jpeg";

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
        <h1 className="font-display md:text-display-xl text-display-lg items-center text-center pt-3 pb-2">Featured Insights</h1>
        <p className="text-body-lg items-center text-center">
          Our latest thinking on the issues that matter most in AI and law.
        </p>
        <SectionBreak />
        <div className="group featured-post flex flex-col gap-8 md:flex-row group-hover:text-primary-600 transition duration-300 transform transition-transform duration-300 group-hover:scale-110 my-4">
          <div className="md:w-1/2 p-2">
            <Link to={latestPost.fields.slug} itemProp="url" className="group">
              <h2 className="font-display text-display-lg pb-1 group-hover:text-primary-600 transition duration-300">
                <span itemProp="headline">{latestPost.frontmatter.title}</span>
              </h2>
              <p>{latestPost.frontmatter.date} - {latestPost.frontmatter.description}</p>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Link to={latestPost.fields.slug} itemProp="url" className="group">
              <div
                className="featured-post-image w-full h-full group-hover:scale-110 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${blogImage1})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                alt={latestPost.frontmatter.title}
              />
            </Link>
          </div>
        </div>
        <SectionBreak1 />
        <div style={{ paddingTop: '0.5rem', paddingBottom: '15rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <table className="w-full table2">
            <tbody>
              <tr className="grid-cols-blog">
                {otherPosts.map((post, index) => (
                  <td
                    key={post.fields.slug}
                    className="h-60 w-60 p-3 group"
                    style={{ minWidth: '240px', verticalAlign: 'top' }}
                  >
                    <Link to={post.fields.slug} itemProp="url" className="group">
                      <div
                        className="post-image group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundImage: `url(${index === 0 ? blogImage2 : index === 1 ? blogImage3 : index === 2 ? blogImage4 : index === 3 ? blogImage5 : blogImage6})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          width: "100%",
                          height: "100%",
                        }}
                        alt={post.frontmatter.title}
                      />
                      <div className="post-text">
                        <h2 className="font-bold p-1 pb-2 pt-3 group-hover:text-primary-600 transition duration-300">
                          <span itemProp="headline">{post.frontmatter.title}</span>
                        </h2>
                        <p className="p-1 pb-4">{post.frontmatter.date} - {post.frontmatter.description}</p>
                      </div>
                    </Link>
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
