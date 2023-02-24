const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const homePage = path.resolve(`./src/templates/home-page.jsx`);
  const blogPost = path.resolve(`./src/templates/blog-post.jsx`);

  const homePageQueryResult = await graphql(
    `
      {
        prismicHomePage {
          data {
            title {
              html
            }
            user_image {
              url
            }
            description {
              html
            }
          }
        }
      }
    `
  );

  const homePageData = homePageQueryResult.data.prismicHomePage.data;

  createPage({
    path: "/",
    component: homePage,
    context: {
      id: homePageData.id,
    },
  });

  // Get all markdown blog posts sorted by date
  const blogPostsQueryResult = await graphql(
    `
      {
        allPrismicPost(sort: { data: {post_date: DESC }}) {
          nodes {
            id
            uid
            url
            data {
              excerpt
              title {
                text
              }
              post_date(formatString: "MMMM d, yyyy")
            }
          }
        }
      }
    `
  );

  const posts = blogPostsQueryResult.data.allPrismicPost.nodes;

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].uid;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].uid;

      createPage({
        path: post.url,
        component: blogPost,
        context: {
          id: post.id,
          uid: post.uid,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};
