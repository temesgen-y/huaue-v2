import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ProductSlide {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const productSlides: ProductSlide[] = [
  {
    id: 1,
    title: "INDUSTRIAL GRADE PIPES",
    description: "Heavy-duty piping solutions for demanding industrial applications",
    buttonText: "Industrial Solutions",
    buttonLink: "/products/huayue",
    image: "/images/industrial-pipes-1.svg"
  },
  {
    id: 2,
    title: "PRECISION MOLDED COMPONENTS",
    description: "High-precision plastic components manufactured to exact specifications",
    buttonText: "View Components",
    buttonLink: "/products/huayue",
    image: "/images/precision-components-2.svg"
  },
  {
    id: 3,
    title: "CHEMICAL RESISTANT FITTINGS",
    description: "Corrosion-resistant fittings for chemical processing industries",
    buttonText: "Chemical Solutions",
    buttonLink: "/products/huayue",
    image: "/images/chemical-fittings-3.svg"
  },
  {
    id: 4,
    title: "AUTOMOTIVE PLASTIC PARTS",
    description: "Lightweight, durable plastic parts for automotive applications",
    buttonText: "Automotive Range",
    buttonLink: "/products/huayue",
    image: "/images/automotive-parts-4.svg"
  },
  {
    id: 5,
    title: "FOOD GRADE CONTAINERS",
    description: "FDA-approved containers for safe food storage and transport",
    buttonText: "Food Solutions",
    buttonLink: "/products/edier",
    image: "/images/food-containers-5.svg"
  },
  {
    id: 6,
    title: "MEDICAL DEVICE COMPONENTS",
    description: "Biocompatible plastic components for medical device manufacturing",
    buttonText: "Medical Solutions",
    buttonLink: "/products/huayue",
    image: "/images/medical-components-6.svg"
  },
  {
    id: 7,
    title: "ELECTRICAL HOUSINGS",
    description: "Flame-retardant housings for electrical and electronic applications",
    buttonText: "Electrical Solutions",
    buttonLink: "/products/huayue",
    image: "/images/electrical-housings-7.svg"
  },
  {
    id: 8,
    title: "CONSUMER PACKAGING",
    description: "Eco-friendly packaging solutions for consumer products",
    buttonText: "Packaging Solutions",
    buttonLink: "/products/edier",
    image: "/images/consumer-packaging-8.svg"
  },
  {
    id: 9,
    title: "CONSTRUCTION MATERIALS",
    description: "Weather-resistant materials for construction and building applications",
    buttonText: "Construction Range",
    buttonLink: "/products/huayue",
    image: "/images/construction-materials-9.svg"
  },
  {
    id: 10,
    title: "MARINE COMPONENTS",
    description: "Salt-water resistant components for marine and offshore applications",
    buttonText: "Marine Solutions",
    buttonLink: "/products/huayue",
    image: "/images/marine-components-10.svg"
  },
  {
    id: 11,
    title: "AEROSPACE PARTS",
    description: "Lightweight, high-strength components for aerospace applications",
    buttonText: "Aerospace Solutions",
    buttonLink: "/products/huayue",
    image: "/images/aerospace-parts-11.svg"
  },
  {
    id: 12,
    title: "AGRICULTURAL EQUIPMENT",
    description: "Durable plastic components for agricultural machinery and equipment",
    buttonText: "Agricultural Range",
    buttonLink: "/products/huayue",
    image: "/images/agricultural-equipment-12.svg"
  },
  {
    id: 13,
    title: "TEXTILE MACHINERY PARTS",
    description: "Precision components for textile manufacturing equipment",
    buttonText: "Textile Solutions",
    buttonLink: "/products/huayue",
    image: "/images/textile-parts-13.svg"
  },
  {
    id: 14,
    title: "ENERGY SECTOR COMPONENTS",
    description: "Specialized components for renewable energy and power generation",
    buttonText: "Energy Solutions",
    buttonLink: "/products/huayue",
    image: "/images/energy-components-14.svg"
  },
  {
    id: 15,
    title: "CUSTOM MOLDING SERVICES",
    description: "Bespoke plastic molding solutions tailored to your specifications",
    buttonText: "Custom Solutions",
    buttonLink: "/contact",
    image: "/images/custom-molding-15.svg"
  }
];

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productSlides.length) % productSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentProduct = productSlides[currentSlide];

  return (
    <section className="relative bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Carousel */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Slide Content */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-500">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30">
              <img 
                src={currentProduct.image}
                alt={currentProduct.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a default manufacturing background
                  e.currentTarget.src = "/images/hero-manufacturing.svg";
                }}
              />
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 text-center text-white max-w-4xl px-6">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-testid="carousel-title">
                {currentProduct.title}
              </h2>
              <p className="text-lg lg:text-xl mb-8 text-gray-200" data-testid="carousel-description">
                {currentProduct.description}
              </p>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
                data-testid={`button-${currentProduct.buttonText.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Link href={currentProduct.buttonLink}>
                  {currentProduct.buttonText}
                </Link>
              </Button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-200"
            data-testid="button-carousel-prev"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-200"
            data-testid="button-carousel-next"
            aria-label="Next slide"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {productSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-green-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              data-testid={`dot-indicator-${index}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">
            {currentSlide + 1} of {productSlides.length}
          </span>
        </div>
      </div>
    </section>
  );
}