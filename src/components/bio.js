import React from "react";
import { PrismicRichText } from "@prismicio/react";

const Bio = ({ image, description }) => {
  return (
    <div>
      <img src={image.url} alt={image.alt} />
      <PrismicRichText field={description} />
    </div>
  );
};

export default Bio;
