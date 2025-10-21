// SEO utility functions and configurations

export const siteConfig = {
  name: 'Huayue Plastics Industry',
  shortName: 'Huayue Plastics',
  description: 'Leading manufacturer of high-quality PPR pipes and fittings. HUAYUE industrial solutions and EDIER precision systems for pharmaceutical, food processing, and clean energy applications.',
  url: 'https://huayue-plastics.com',
  ogImage: 'https://huayue-plastics.com/og-image.jpg',
  creator: 'Huayue Plastics Industry',
  keywords: [
    'PPR pipes',
    'plastic fittings',
    'Huayue',
    'EDIER',
    'industrial pipes',
    'pharmaceutical pipes',
    'food grade pipes',
    'clean energy systems',
    'plastic manufacturing',
    'Ethiopia',
    'piping solutions',
    'industrial fittings',
    'precision pipes',
    'corrosion resistant',
    'high pressure pipes',
  ],
};

// Generate meta tags for different pages
export const generateMetaTags = (page: string, customData?: any) => {
  const baseMeta = {
    title: `${siteConfig.name} - Premium PPR Pipes & Fittings`,
    description: siteConfig.description,
    keywords: siteConfig.keywords.join(', '),
    url: siteConfig.url,
    image: siteConfig.ogImage,
  };

  const pageConfigs = {
    home: {
      title: `${siteConfig.name} - Premium PPR Pipes & Fittings | HUAYUE & EDIER Brands`,
      description: 'Leading manufacturer of high-quality PPR pipes and fittings. HUAYUE industrial solutions and EDIER precision systems for pharmaceutical, food processing, and clean energy applications. 20+ years of excellence.',
      keywords: 'PPR pipes, plastic fittings, Huayue, EDIER, industrial pipes, pharmaceutical pipes, food grade pipes, clean energy systems, plastic manufacturing, Ethiopia',
    },
    about: {
      title: `About Us - ${siteConfig.name} | Leading PPR Pipe Manufacturer`,
      description: 'Learn about Huayue Plastics Industry, a leading manufacturer of PPR pipes and fittings with 20+ years of excellence. Discover our mission, vision, values, and commitment to quality.',
      keywords: 'about Huayue, plastic manufacturing company, PPR pipe manufacturer, industrial pipes, company history, mission vision values',
    },
    products: {
      title: `Our Products - HUAYUE & EDIER PPR Pipes & Fittings | ${siteConfig.name}`,
      description: 'Explore our comprehensive range of PPR pipes and fittings. HUAYUE industrial solutions and EDIER precision systems for various applications including pharmaceutical, food processing, and clean energy.',
      keywords: 'PPR pipes, plastic fittings, HUAYUE products, EDIER systems, industrial pipes, pharmaceutical pipes, food grade pipes',
    },
    huayueProducts: {
      title: `HUAYUE PPR Pipes & Fittings - Industrial Grade Solutions | ${siteConfig.name}`,
      description: 'Discover HUAYUE industrial-grade PPR pipes and fittings designed for extreme conditions. High-pressure applications, corrosion resistance, and exceptional durability for industrial use.',
      keywords: 'HUAYUE pipes, industrial PPR pipes, high pressure pipes, corrosion resistant pipes, industrial fittings, heavy duty pipes',
    },
    edierProducts: {
      title: `EDIER PPR Piping Systems - Precision Solutions | ${siteConfig.name}`,
      description: 'Explore EDIER precision-engineered PPR piping systems for pharmaceutical, food processing, and clean energy applications. FDA approved, food-safe, and clean room certified.',
      keywords: 'EDIER pipes, pharmaceutical pipes, food grade pipes, clean energy systems, precision pipes, FDA approved pipes',
    },
    contact: {
      title: `Contact Us - ${siteConfig.name} | Get in Touch`,
      description: 'Contact Huayue Plastics Industry for inquiries about our PPR pipes and fittings. Get quotes, technical support, and partnership opportunities. Professional service guaranteed.',
      keywords: 'contact Huayue, PPR pipe quotes, technical support, partnership, customer service, get in touch',
    },
    news: {
      title: `News & Updates - ${siteConfig.name} | Latest Industry News`,
      description: 'Stay updated with the latest news, industry insights, and company updates from Huayue Plastics Industry. Discover new products, innovations, and market trends.',
      keywords: 'plastic industry news, PPR pipe updates, manufacturing news, industry insights, company updates',
    },
    agencyPolicy: {
      title: `Agency Policy - ${siteConfig.name} | Partnership Guidelines`,
      description: 'Learn about our agency policy, partnership guidelines, and business terms. Understand our commitment to quality, service standards, and mutual success.',
      keywords: 'agency policy, partnership guidelines, business terms, quality commitment, service standards',
    },
  };

  const pageMeta = pageConfigs[page as keyof typeof pageConfigs] || baseMeta;
  
  return {
    ...baseMeta,
    ...pageMeta,
    ...customData,
  };
};

// Generate structured data for different content types
export const generateStructuredData = (type: string, data: any) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'organization':
      return {
        ...baseStructuredData,
        '@type': 'Organization',
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        foundingDate: '2000',
        numberOfEmployees: '100-500',
        industry: 'Plastic Manufacturing',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'ET',
          addressRegion: 'Addis Ababa',
          addressLocality: 'Addis Ababa',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+251-XXX-XXXXXX',
          contactType: 'customer service',
          availableLanguage: ['English', 'Amharic'],
        },
        sameAs: [
          'https://www.facebook.com/huayueplastics',
          'https://www.linkedin.com/company/huayue-plastics',
          'https://twitter.com/huayueplastics',
        ],
        ...data,
      };

    case 'product':
      return {
        ...baseStructuredData,
        '@type': 'Product',
        name: data.name || 'PPR Pipes and Fittings',
        description: data.description || 'High-quality PPR pipes and fittings for industrial and commercial applications',
        brand: {
          '@type': 'Brand',
          name: data.brand || siteConfig.name,
        },
        manufacturer: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        category: 'Plastic Pipes and Fittings',
        material: 'PPR (Polypropylene Random Copolymer)',
        applicationCategory: data.applicationCategory || 'Industrial Piping',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'ETB',
          seller: {
            '@type': 'Organization',
            name: siteConfig.name,
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '150',
          bestRating: '5',
          worstRating: '1',
        },
        ...data,
      };

    case 'breadcrumb':
      return {
        ...baseStructuredData,
        '@type': 'BreadcrumbList',
        itemListElement: data.breadcrumbs || [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.url,
          },
        ],
      };

    case 'article':
      return {
        ...baseStructuredData,
        '@type': 'Article',
        headline: data.headline || `${siteConfig.name} News`,
        description: data.description || 'Latest news and updates from Huayue Plastics Industry',
        author: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          logo: {
            '@type': 'ImageObject',
            url: `${siteConfig.url}/logo.png`,
          },
        },
        datePublished: data.datePublished || new Date().toISOString(),
        dateModified: data.dateModified || new Date().toISOString(),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url || `${siteConfig.url}/news`,
        },
        ...data,
      };

    default:
      return {
        ...baseStructuredData,
        ...data,
      };
  }
};

// SEO validation helpers
export const validateSEO = (data: any) => {
  const errors: string[] = [];

  // Title validation
  if (!data.title || data.title.length < 30 || data.title.length > 60) {
    errors.push('Title should be between 30-60 characters');
  }

  // Description validation
  if (!data.description || data.description.length < 120 || data.description.length > 160) {
    errors.push('Description should be between 120-160 characters');
  }

  // Keywords validation
  if (!data.keywords || data.keywords.split(',').length < 5) {
    errors.push('Keywords should include at least 5 relevant terms');
  }

  return errors;
};

// Generate sitemap entries
export const generateSitemapEntries = () => {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString().split('T')[0];

  return [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/huayue`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/edier`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/agency-policy`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5,
    },
  ];
};
