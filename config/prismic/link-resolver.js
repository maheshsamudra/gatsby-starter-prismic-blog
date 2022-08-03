exports.linkResolver = (doc) => {
  switch (doc.type) {
    case "post":
      return `/blog/${doc.uid}`;

    default:
      if (!doc.uid) return "/";
      return doc.uid;
  }
};
