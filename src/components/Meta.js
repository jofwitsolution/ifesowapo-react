import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Ifesowapo CICS",
  description:
    "Ifesowapo CICS farmers cooperative is dedicated to change people's orientation to an agricultural value chain using both proven and innovative methods.",
  keywords:
    "Ifesowapo CICS, Ifesowapo, farmers, cooperative, Nigeria, agriculture",
};

export default Meta;
