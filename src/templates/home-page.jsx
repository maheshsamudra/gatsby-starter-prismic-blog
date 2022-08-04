import * as React from "react";
import { Link, graphql } from "gatsby";

import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";

const HomePageTemplate = ({ data, location }) => {
  const {
    title,
    description,
    user_image: userImage,
  } = data?.prismicHomePage?.data || {};

  const blogList = data?.allPrismicPost?.nodes || [];

  return (
    <Layout location={location} title={title.text}>
      <Bio image={userImage} description={description.richText} />
      <ol style={{ listStyle: `none` }}>
        {blogList.map((post) => {
          const title = post.data.title.text;

          return (
            <li key={post.uid}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.url} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.data.post_date}</small>
                  <p>{post.data.excerpt}</p>
                </header>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export const Head = ({ data }) => {
  const { title, description } = data?.prismicHomePage?.data || {};
  return <Seo title={title.text} description={description.text} />;
};

export const homePageQuery = graphql`
  query HomePageQuery {
    prismicHomePage {
      _previewable
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
    allPrismicPost {
      nodes {
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
    }
  }
`;

export default withPrismicPreview(HomePageTemplate);
