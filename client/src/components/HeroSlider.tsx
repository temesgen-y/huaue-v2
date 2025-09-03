import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

interface HeroSliderProps {
  slideInterval?: number;
  showPlayPause?: boolean;
  autoPlay?: boolean;
  textPosition?: "left" | "center" | "right";
  overlayOpacity?: number;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/slide-1.jpg",
    title: "Product Inventory Excellence",
    subtitle: "Comprehensive storage and organization systems for all plastic products and materials",
    ctaText: "Explore Products",
    ctaLink: "/products/huayue"
  },
  {
    id: 2,
    image: "/slide-2.jpg",
    title: "Premium PPR Pipes",
    subtitle: "High-quality polypropylene random copolymer pipes for plumbing and industrial applications",
    ctaText: "View Products",
    ctaLink: "/products/huayue"
  },
  {
    id: 3,
    image: "/slide-3.jpg",
    title: "EDER Brand Quality",
    subtitle: "Professional-grade green PPR pipes with superior durability and performance standards",
    ctaText: "Learn More",
    ctaLink: "/products/edier"
  },
  {
    id: 4,
    image: "/slide-4.jpg",
    title: "Organized Storage Solutions",
    subtitle: "Modern warehouse facilities with systematic product organization and quality management",
    ctaText: "About Us",
    ctaLink: "/about"
  },
  {
    id: 5,
    image: "/slide-5.jpg",
    title: "Complete Product Range",
    subtitle: "Comprehensive inventory of pipes, fittings, and accessories for all installation needs",
    ctaText: "Product Catalog",
    ctaLink: "/products/huayue"
  },
  {
    id: 6,
    image: "/slide-6.jpg",
    title: "Quality Control Standards",
    subtitle: "Rigorous quality inspection and testing for all products meeting international standards",
    ctaText: "Quality Policy",
    ctaLink: "/agency-policy"
  },
  {
    id: 7,
    image: "/slide-7.jpg",
    title: "Precision Manufacturing",
    subtitle: "Close-up view of our high-precision pipe manufacturing with detailed specifications",
    ctaText: "Manufacturing",
    ctaLink: "/about"
  },
  {
    id: 8,
    image: "/slide-8.jpg",
    title: "Showroom & Distribution",
    subtitle: "Professional showroom displaying complete product range with expert consultation services",
    ctaText: "Visit Showroom",
    ctaLink: "/contact"
  },
  {
    id: 9,
    image: "/slide-9.jpg",
    title: "EDER Pipe Specifications",
    subtitle: "Premium green EDER pipes with detailed technical specifications for professional use",
    ctaText: "Technical Details",
    ctaLink: "/products/edier"
  },
  {
    id: 10,
    image: "/slide-10.jpg",
    title: "Industrial Grade Products",
    subtitle: "Heavy-duty pipes designed for industrial applications with superior strength and reliability",
    ctaText: "Industrial Solutions",
    ctaLink: "/products/huayue"
  },
  {
    id: 11,
    image: "/slide-11.jpg",
    title: "Precision Engineering",
    subtitle: "Detailed view of pipe specifications showcasing precision engineering and quality standards",
    ctaText: "Engineering Excellence",
    ctaLink: "/about"
  },
  {
    id: 12,
    image: "/slide-12.jpg",
    title: "Complete Product Selection",
    subtitle: "Extensive range of white and colored pipes with various sizes and specifications available",
    ctaText: "Product Range",
    ctaLink: "/products/huayue"
  }
];

export default function HeroSlider({
  slideInterval = 6000,
  showPlayPause = true,
  autoPlay = true,
  textPosition = "left",
  overlayOpacity = 0.4
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentSlide, isTransitioning]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [isPlaying, slideInterval, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide]);

  const currentSlideData = heroSlides[currentSlide];

  const textPositionClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };

  return (
    <section className="relative w-full h-screen overflow-hidden" data-testid="hero-slider">
      {/* Background Images */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : index === (currentSlide - 1 + heroSlides.length) % heroSlides.length
                ? "opacity-0 scale-105 -translate-x-full"
                : index === (currentSlide + 1) % heroSlides.length
                ? "opacity-0 scale-105 translate-x-full"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-500"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`flex flex-col ${textPositionClasses[textPosition]} max-w-4xl ${
            textPosition === "center" ? "mx-auto" : textPosition === "right" ? "ml-auto" : ""
          }`}>
            <div className="space-y-6 transform transition-all duration-1000">
              <h1 
                className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 ${
                  isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
                data-testid="hero-title"
              >
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {currentSlideData.title}
                </span>
              </h1>
              
              <p 
                className={`text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed transition-all duration-1000 delay-200 ${
                  isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
                data-testid="hero-subtitle"
              >
                {currentSlideData.subtitle}
              </p>
              
              {currentSlideData.ctaText && (
                <div className={`transition-all duration-1000 delay-400 ${
                  isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                    data-testid="hero-cta-button"
                  >
                    <a href={currentSlideData.ctaLink}>
                      {currentSlideData.ctaText}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm rounded-full p-3 lg:p-4 transition-all duration-200 hover:scale-110"
        data-testid="hero-prev-button"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white w-6 h-6 lg:w-8 lg:h-8" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm rounded-full p-3 lg:p-4 transition-all duration-200 hover:scale-110"
        data-testid="hero-next-button"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Play/Pause Button */}
      {showPlayPause && (
        <button
          onClick={togglePlayPause}
          className="absolute top-4 lg:top-8 right-4 lg:right-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 lg:p-3 transition-all duration-200 hover:scale-110"
          data-testid="hero-play-pause-button"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <Pause className="text-white w-5 h-5 lg:w-6 lg:h-6" />
          ) : (
            <Play className="text-white w-5 h-5 lg:w-6 lg:h-6 ml-0.5" />
          )}
        </button>
      )}

      {/* Dot Indicators */}
      <div className="absolute bottom-6 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
                index === currentSlide
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              data-testid={`hero-dot-${index}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 w-32 lg:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / heroSlides.length) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 lg:bottom-12 left-4 lg:left-8 z-20 text-white/80 text-sm lg:text-base font-medium">
        <span className="bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}