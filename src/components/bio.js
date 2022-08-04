import React from "react";
import { PrismicRichText } from "@prismicio/react";

const Bio = ({ image, description }) => {
  return (
    <div className={"bio"}>
      <img
        className={"bio-avatar"}
        src={image.url}
        alt={image.alt}
        height={50}
        width={50}
      />
      <PrismicRichText field={description} />
    </div>
  );
};

export default Bio;
