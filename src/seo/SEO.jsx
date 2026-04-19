import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const defaultTitle = "S.N.K Fabrication Works | Premium Fabrication in Bangalore";
  const defaultDescription = "High-quality fabrication works in Bangalore. 7+ Years Experience. We specialize in steel gate fabrication, grills, railings, truss work, pipeline installation, and custom welding services.";
  const defaultKeywords = "fabrication works in Bangalore, steel gate fabrication Bangalore, welding services Bangalore, S.N.K Fabrication Works, grills, railings, truss work";

  return (
    <Helmet>
      <title>{title ? `${title} | S.N.K Fabrication Works` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={title ? `${title} | S.N.K Fabrication Works` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};

export default SEO;
