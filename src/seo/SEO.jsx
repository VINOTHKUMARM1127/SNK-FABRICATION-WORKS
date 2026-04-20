import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image }) => {
  const siteName = "S.N.K Fabrication Works";
  const defaultTitle = "S.N.K Fabrication Works | Premium Industrial & Residential Fabrication in Bangalore";
  const defaultDescription = "Bangalore's most trusted fabrication partner with 7+ years of expertise. Specializing in Designer Gates, SS Railings, Industrial Truss Works, CNC Cutting, and custom metal solutions. Quality craftsmanship and on-time delivery guaranteed.";
  const defaultKeywords = "fabrication works Bangalore, MS fabrication Bangalore, designer gates Bangalore, SS railings Bangalore, industrial truss work Bangalore, CNC laser cutting service, premium welding services, S.N.K Fabrication, Naveenkumar Sivashankaran, welding contractors Bangalore, metal fabrication workshop Bangalore";
  const ogImage = image || "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200";
  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : 'https://snk-fabrication-works.vercel.app/';

  // Structured Data (JSON-LD) for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "S.N.K Fabrication Works",
    "image": ogImage,
    "@id": "https://snk-fabrication-works.vercel.app/",
    "url": "https://snk-fabrication-works.vercel.app/",
    "telephone": "+91 7204097229",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "66/3, Shivanna Building, Allasandra, Near Manipal Research Centre",
      "addressLocality": "Bangalore",
      "postalCode": "560065",
      "addressRegion": "KA",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0873339,
      "longitude": 77.589993
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://wa.me/917204097229"
    ]
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#E65100" />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en-in" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

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
      <meta name="geo.position" content="13.0873339;77.589993" />
      <meta name="ICBM" content="13.0873339, 77.589993" />

      {/* Inject Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
