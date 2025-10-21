import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'product' | 'breadcrumb' | 'article';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let structuredData;
    
    switch (type) {
      case 'organization':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Huayue Plastics Industry',
          alternateName: ['Huayue Plastics', 'Hongyue Plastic Group'],
          url: 'https://huayue-plastics.com',
          logo: 'https://huayue-plastics.com/logo.png',
          description: 'Leading plastic factory in Ethiopia specializing in Eider & Huayue PPR piping systems, PPR pipe and fittings. Factory in Kombolcha producing PVC, PEXA, PE, PERT pipes for water supply systems.',
          foundingDate: '2000',
          numberOfEmployees: '100-500',
          industry: 'Plastic Manufacturing',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'ET',
            addressRegion: 'Amhara',
            addressLocality: 'Kombolcha',
            streetAddress: 'Industrial Zone, Kombolcha',
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
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Eider & Huayue PPR Piping System',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'Eider & Huayue PPR Piping System',
                  description: 'Complete PPR piping systems including PPR pipe and fittings for water supply systems',
                  brand: 'Eider & Huayue',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'PPR Pipe and Fittings',
                  description: 'High-quality PPR pipe and PPR pipe fitting solutions for residential and commercial applications',
                  brand: 'Huayue',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'PVC Pipe Solutions',
                  description: 'Durable PVC pipe solutions for various water supply system applications',
                  brand: 'Huayue',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'PEXA Pipe Systems',
                  description: 'Advanced PEXA pipe systems for flexible water supply applications',
                  brand: 'Huayue',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'PE Pipe and PERT Pipe',
                  description: 'Polyethylene PE pipe and PERT pipe solutions for specialized applications',
                  brand: 'Huayue',
                },
              },
            ],
          },
          ...data,
        };
        break;
        
      case 'product':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: data.name || 'PPR Pipes and Fittings',
          description: data.description || 'High-quality PPR pipes and fittings for industrial and commercial applications',
          brand: {
            '@type': 'Brand',
            name: data.brand || 'Huayue Plastics',
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Huayue Plastics Industry',
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
              name: 'Huayue Plastics Industry',
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
        break;
        
      case 'breadcrumb':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.breadcrumbs || [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://huayue-plastics.com',
            },
          ],
        };
        break;
        
      case 'article':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline || 'Huayue Plastics Industry News',
          description: data.description || 'Latest news and updates from Huayue Plastics Industry',
          author: {
            '@type': 'Organization',
            name: 'Huayue Plastics Industry',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Huayue Plastics Industry',
            logo: {
              '@type': 'ImageObject',
              url: 'https://huayue-plastics.com/logo.png',
            },
          },
          datePublished: data.datePublished || new Date().toISOString(),
          dateModified: data.dateModified || new Date().toISOString(),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url || 'https://huayue-plastics.com/news',
          },
          ...data,
        };
        break;
        
      default:
        structuredData = data;
    }
    
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);
  
  return null;
}

// Predefined structured data configurations
export const structuredDataConfig = {
  organization: {
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
  },
  
  huayueProduct: {
    name: 'Eider & Huayue PPR Piping System',
    description: 'Complete PPR piping systems including PPR pipe and fittings for water supply systems. Industrial-grade solutions designed for extreme conditions with high-pressure applications, corrosion resistance, and exceptional durability.',
    brand: 'Eider & Huayue',
    applicationCategory: 'Water Supply System PPR Pipes',
    material: 'PPR (Polypropylene Random Copolymer)',
    features: [
      'High-pressure applications',
      'Corrosion resistant coating',
      '20-50mm diameter range',
      'PN16 & PN20 pressure ratings',
      'Water supply system applications',
    ],
  },
  
  edierProduct: {
    name: 'PPR Pipe and Fittings Collection',
    description: 'Comprehensive collection of PPR pipe and PPR pipe fitting solutions including PVC pipe, PEXA pipe, PE pipe, and PERT pipe for diverse water supply system applications.',
    brand: 'Huayue',
    applicationCategory: 'Water Supply System PPR Pipes',
    material: 'PPR, PVC, PEXA, PE, PERT',
    features: [
      'Multiple pipe materials',
      'Easy installation',
      'Leak-proof connections',
      'Chemical resistant',
      'Flexible applications',
    ],
  },
};
