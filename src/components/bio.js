import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Bio = ({ image, description }) => {
  return (
    <div className={"bio"}>
      <GatsbyImage
        image={getImage(image)}
        className={"bio-avatar"}
        alt={image.alt || "User"}
        height={50}
        width={50}
      />
      {/*<img*/}
      {/*  className={"bio-avatar"}*/}
      {/*  src={image.url}*/}
      {/*  alt={image.alt}*/}
      {/*  height={50}*/}
      {/*  width={50}*/}
      {/*/>*/}
      <PrismicRichText field={description} />
    </div>
  );
};

export default Bio;
