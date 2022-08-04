import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Bio from "../components/bio";

const BlogPostTemplate = ({ data, location }) => {
  const { previous, next, site, prismicPost: post } = data;
  const siteTitle = site.siteMetadata?.title || `Welcome`;

  const { description, user_image: userImage } =
    data?.prismicHomePage?.data || {};

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
          dangerouslySetInnerHTML={{
            __html: post?.data?.post_body?.html || [],
          }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio image={userImage} description={description.richText} />
        </footer>
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
  const { title, excerpt } = data?.prismicPost?.data || {};
  return <Seo title={title.text} description={excerpt} />;
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
        excerpt
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
    prismicHomePage {
      data {
        title {
          richText
          text
        }
        user_image {
          url
          alt
          gatsbyImageData(width: 50, height: 50, placeholder: BLURRED)
        }
        description {
          richText
          text
        }
      }
    }
  }
`;
