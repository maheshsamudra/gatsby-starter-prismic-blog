import * as React from "react";
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";

const PreviewPage = ({ isPreview, ...props }) => {
  if (isPreview === false) return "Not a preview!";

  return (
    <small style={{ textAlign: "center", marginTop: "30px", display: "block" }}>
      Loading...
    </small>
  );
};

export default withPrismicPreviewResolver(PreviewPage);
