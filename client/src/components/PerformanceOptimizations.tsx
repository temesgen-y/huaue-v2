import { useEffect } from 'react';

export default function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/images/hero-bg.jpg',
        '/images/logo.png',
        '/favicon.ico',
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        if (resource.endsWith('.jpg') || resource.endsWith('.png')) {
          link.as = 'image';
        }
        document.head.appendChild(link);
      });
    };

    // Add resource hints for better performance
    const addResourceHints = () => {
      const hints = [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      ];

      hints.forEach((hint) => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossorigin) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Add performance monitoring
    const addPerformanceMonitoring = () => {
      // Monitor Core Web Vitals
      if ('web-vital' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page load time: ${loadTime}ms`);
      });
    };

    // Execute optimizations
    preloadCriticalResources();
    addResourceHints();
    optimizeImages();
    addPerformanceMonitoring();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
}

// Image optimization component
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false 
}: OptimizedImageProps) {
  return (
    <img
      src={priority ? src : undefined}
      data-src={priority ? undefined : src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

// Preload component for critical resources
interface PreloadProps {
  href: string;
  as: 'image' | 'script' | 'style' | 'font' | 'fetch';
  type?: string;
  crossorigin?: boolean;
}

export function Preload({ href, as, type, crossorigin }: PreloadProps) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    if (crossorigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [href, as, type, crossorigin]);

  return null;
}
