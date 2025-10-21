import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  canonical?: string;
}

export default function SEO({
  title = 'Huayue Plastics Industry - Premium PPR Pipes & Fittings | HUAYUE & EDIER Brands',
  description = 'Leading manufacturer of high-quality PPR pipes and fittings. HUAYUE industrial solutions and EDIER precision systems for pharmaceutical, food processing, and clean energy applications. 20+ years of excellence.',
  keywords = 'PPR pipes, plastic fittings, Huayue, EDIER, industrial pipes, pharmaceutical pipes, food grade pipes, clean energy systems, plastic manufacturing, Ethiopia',
  image = 'https://huayue-plastics.com/og-image.jpg',
  url = 'https://huayue-plastics.com',
  type = 'website',
  noindex = false,
  canonical
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // Open Graph tags
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Huayue Plastics Industry', true);
    
    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    
    // Canonical URL
    if (canonical) {
      updateLinkTag('canonical', canonical);
    }

  }, [title, description, keywords, image, url, type, noindex, canonical]);

  return null;
}

// SEO configurations for different pages
export const seoConfig = {
  home: {
    title: 'Huayue Plastics Industry - Eider & Huayue PPR Piping System',
    description: 'Leading plastic factory in Ethiopia specializing in Eider & Huayue PPR piping systems, PPR pipe and fittings. Factory in Kombolcha producing PVC, PEXA, PE, PERT pipes for water supply systems.',
    keywords: 'Huayue Plastics Industry, Eider Huayue PPR Piping System, Hongyue Plastic Group, PPR Piping System, PPR Pipe and Fittings, PPR Pipe Fitting, PPR Pipe, PVC Pipe, PEXA Pipe, PE Pipe, PERT Pipe, Water Supply System PPR Pipes, Plastic Factory in Ethiopia, PPR pipes Factory in Ethiopia, Factory in Kombolcha',
    url: 'https://huayue-plastics.com/',
  },
  about: {
    title: 'About Us - Huayue Plastics Industry | Leading PPR Pipe Manufacturer',
    description: 'Learn about Huayue Plastics Industry, a leading manufacturer of PPR pipes and fittings with 20+ years of excellence. Discover our mission, vision, values, and commitment to quality.',
    keywords: 'about Huayue, plastic manufacturing company, PPR pipe manufacturer, industrial pipes, company history, mission vision values',
    url: 'https://huayue-plastics.com/about',
  },
  products: {
    title: 'Our Products - HUAYUE & EDIER PPR Pipes & Fittings | Huayue Plastics',
    description: 'Explore our comprehensive range of PPR pipes and fittings. HUAYUE industrial solutions and EDIER precision systems for various applications including pharmaceutical, food processing, and clean energy.',
    keywords: 'PPR pipes, plastic fittings, HUAYUE products, EDIER systems, industrial pipes, pharmaceutical pipes, food grade pipes',
    url: 'https://huayue-plastics.com/products',
  },
  huayueProducts: {
    title: 'HUAYUE PPR Pipes & Fittings - Industrial Grade Solutions | Huayue Plastics',
    description: 'Discover HUAYUE industrial-grade PPR pipes and fittings designed for extreme conditions. High-pressure applications, corrosion resistance, and exceptional durability for industrial use.',
    keywords: 'HUAYUE pipes, industrial PPR pipes, high pressure pipes, corrosion resistant pipes, industrial fittings, heavy duty pipes',
    url: 'https://huayue-plastics.com/products/huayue',
  },
  edierProducts: {
    title: 'EDIER PPR Piping Systems - Precision Solutions | Huayue Plastics',
    description: 'Explore EDIER precision-engineered PPR piping systems for pharmaceutical, food processing, and clean energy applications. FDA approved, food-safe, and clean room certified.',
    keywords: 'EDIER pipes, pharmaceutical pipes, food grade pipes, clean energy systems, precision pipes, FDA approved pipes',
    url: 'https://huayue-plastics.com/products/edier',
  },
  contact: {
    title: 'Contact Us - Huayue Plastics Industry | Get in Touch',
    description: 'Contact Huayue Plastics Industry for inquiries about our PPR pipes and fittings. Get quotes, technical support, and partnership opportunities. Professional service guaranteed.',
    keywords: 'contact Huayue, PPR pipe quotes, technical support, partnership, customer service, get in touch',
    url: 'https://huayue-plastics.com/contact',
  },
  news: {
    title: 'News & Updates - Huayue Plastics Industry | Latest Industry News',
    description: 'Stay updated with the latest news, industry insights, and company updates from Huayue Plastics Industry. Discover new products, innovations, and market trends.',
    keywords: 'plastic industry news, PPR pipe updates, manufacturing news, industry insights, company updates',
    url: 'https://huayue-plastics.com/news',
  },
  agencyPolicy: {
    title: 'Agency Policy - Huayue Plastics Industry | Partnership Guidelines',
    description: 'Learn about our agency policy, partnership guidelines, and business terms. Understand our commitment to quality, service standards, and mutual success.',
    keywords: 'agency policy, partnership guidelines, business terms, quality commitment, service standards',
    url: 'https://huayue-plastics.com/agency-policy',
  },
};
