import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

const BlogPostTemplate = ({ data, location }) => {
  const { previous, next, site, prismicPost: post } = data;
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.data.title.text}</h1>
          <p>{post.data.post_date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.data.post_body.html }}
          itemProp="articleBody"
        />
        <hr />
        {/*<footer>*/}
        {/*  <Bio />*/}
        {/*</footer>*/}
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.url} rel="prev">
                ← {previous.data.title.text}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.url} rel="next">
                {next.data.title.text} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export const Head = ({ data }) => {
  return null;
  // return (
  //   <Seo
  //     title={post.frontmatter.title}
  //     description={post.frontmatter.description || post.excerpt}
  //   />
  // );
};

export default withPrismicPreview(BlogPostTemplate);

export const blogPostQuery = graphql`
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
    prismicPost(id: { eq: $id }) {
      _previewable
      url
      uid
      data {
        post_date
        title {
          html
          text
        }
        post_body {
          html
        }
      }
    }
    previous: prismicPost(uid: { eq: $previousPostId }) {
      uid
      url
      data {
        title {
          text
        }
      }
    }
    next: prismicPost(uid: { eq: $nextPostId }) {
      uid
      url
      data {
        title {
          text
        }
      }
    }
  }
`;
