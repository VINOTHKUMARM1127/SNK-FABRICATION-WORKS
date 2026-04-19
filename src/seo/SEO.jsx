import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image }) => {
  const siteName = "S.N.K Fabrication Works";
  const defaultTitle = "S.N.K Fabrication Works | Premium Fabrication in Bangalore";
  const defaultDescription = "Top-tier fabrication services in Bangalore with 7+ years of experience. Specialist in Designer Gates, SS Railings, High-Pressure Pipelines, Truss Works, and CNC Facades. High-Quality Finish & On-Time Delivery.";
  const defaultKeywords = "fabrication works Bangalore, structural steel Bangalore, designer gates Bangalore, SS railings Bangalore, industrial truss work, CNC laser cutting service Bangalore, premium welding services, S.N.K Fabrication, Naveenkumar Sivashankaran";
  const ogImage = image || "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200";
  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#E65100" />
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <meta name="geo.position" content="13.0911;77.5855" />
      <meta name="ICBM" content="13.0911, 77.5855" />
    </Helmet>
  );
};

export default SEO;
