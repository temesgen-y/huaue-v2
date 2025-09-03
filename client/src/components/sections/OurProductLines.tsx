import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OurProductLines() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Our Product Lines
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HUAYUE PLASTICS INDUSTRY P.L.C. specializes in producing high-quality PPR pipes and fittings designed for 
            long-lasting and efficient plumbing solutions. Our products are suitable for a wide range of applications, 
            including residential, commercial, and industrial water supply systems. Manufactured with the highest standards, 
            our pipes and fittings ensure superior performance value of installation, and environmental safety.
          </p>
        </div>

        {/* Product Lines Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* HUAYUE Product Line */}
          <div className="bg-gray-50 p-8 rounded-xl">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-sm text-gray-500 mb-2">HUAYUE PPR Pipes and Fittings</div>
              <div className="w-full h-48 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm overflow-hidden">
                <img 
                  src="/huayue-product-new.jpg" 
                  alt="HUAYUE Industrial PPR Products" 
                  className="w-full h-full object-contain"
                  data-testid="img-huayue-products"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-center mb-6 text-sm">
              HUAYUE PPR pipes and fittings designed for extreme industrial 
              conditions. Built to withstand high pressure and corrosive environments 
              with exceptional durability.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-brand-accent flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">High Durability: Resistant to corrosion, chemicals, and scaling ensuring longevity in various applications.</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-brand-accent flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Heat Resistance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-brand-accent flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Pressure Resistance</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              className="w-full bg-brand-accent hover:bg-brand-accent-dark text-white py-3 rounded font-medium"
              data-testid="button-explore-huayue-products"
            >
              Explore HUAYUE Products
            </Button>
          </div>

          {/* EDIER Product Line */}
          <div className="bg-gray-50 p-8 rounded-xl">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-sm text-gray-500 mb-2">EDIER PPR Piping Systems</div>
              <div className="w-full h-48 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm overflow-hidden">
                <img 
                  src="/edier-product-new.jpg" 
                  alt="EDIER Consumer PPR Products" 
                  className="w-full h-full object-contain"
                  data-testid="img-edier-products"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-center mb-6 text-sm">
              Precision-engineered piping systems for pharmaceutical, food 
              processing, and clean energy applications. Designed for absolute purity 
              and contamination-free fluid transport.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-brand-accent flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Lightweight & Easy Installation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-brand-accent flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Pressure Resistance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-brand-accent flex-shrink-0" size={16} />
                <span className="text-sm text-gray-700">Low Thermal Conductivity: Reduces heat loss in hot water systems, improving energy efficiency.</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              className="w-full bg-brand-accent hover:bg-brand-accent-dark text-white py-3 rounded font-medium"
              data-testid="button-explore-edier-systems"
            >
              Explore EDIER Systems
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}