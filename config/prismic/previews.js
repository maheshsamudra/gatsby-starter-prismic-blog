import { linkResolver } from "./link-resolver";

import PostTemplate from "../../src/templates/blog-post";
import HomePageTemplate from "../../src/templates/home-page";

/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `PrismicPreviewProvider`
 * higher order component.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 */
export const repositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: {
      homePage: HomePageTemplate,
      post: PostTemplate,
    },
  },
];
