import { Button } from "@/components/ui/button";
import { Thermometer, Flame, Leaf } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Cold Water PPR Pipes",
    icon: Thermometer,
    features: [
      "Ideal for residential and commercial plumbing",
      "High pressure resistance",
      "Smooth inner surface to reduce friction",
      "Corrosion and scale resistant"
    ]
  },
  {
    id: 2,
    title: "Hot Water PPR Pipes",
    icon: Flame,
    features: [
      "Designed to withstand high temperatures",
      "Perfect for central heating systems",
      "UV and chemical resistant",
      "Long service life"
    ]
  },
  {
    id: 3,
    title: "Green Building Solutions",
    icon: Leaf,
    features: [
      "Energy-efficient piping systems",
      "Lead-free and recyclable material",
      "LEED certified",
      "Eco-friendly options"
    ]
  }
];

export default function ProductPortfolio() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive plastic packaging solutions across multiple industries with focus on 
            quality, sustainability, and innovation.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={product.id}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                data-testid={`product-card-${product.id}`}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-6">
                  {product.title}
                </h3>

                {/* Features List */}
                <ul className="text-left space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-start text-gray-600 text-sm"
                    >
                      <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 px-6"
                  data-testid={`button-learn-more-${product.id}`}
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        {/* View All Products Button */}
        <div className="text-center">
          <Button 
            className="bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-3 text-base"
            data-testid="button-view-all-products"
          >
            View All Products →
          </Button>
        </div>
      </div>
    </section>
  );
}