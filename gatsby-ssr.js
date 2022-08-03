import * as React from "react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

import { repositoryConfigs } from "./config/prismic/previews";

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
    {element}
  </PrismicPreviewProvider>
);
