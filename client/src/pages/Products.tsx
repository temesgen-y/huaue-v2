import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Products() {
  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Product Lines
          </h1>
          <p className="text-xl corporate-gray max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality plastic products designed to meet diverse industry needs across multiple sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* HUAYUE PPR Pipes and Fittings */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-600 mb-4">HUAYUE PPR Pipes and Fittings</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <img 
                  src="/huayue-product-new.jpg" 
                  alt="HUAYUE PPR Pipes Bundle with cityscape logo" 
                  className="w-full h-48 object-contain mx-auto"
                />
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-sm leading-relaxed">
                HUAYUE PPR pipes and fittings designed for extreme industrial conditions. Built to 
                withstand high pressure and corrosive environments with exceptional durability.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">High Durability: Resistant to corrosion, chemicals, and scaling ensuring longevity in various applications.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Heat Resistance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Pressure Resistance</p>
                </div>
              </div>
            </div>

            <Button 
              asChild
              className="bg-brand-accent hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium w-full"
              data-testid="button-explore-huayue-products"
            >
              <Link href="/products/huayue">
                Explore HUAYUE Products
              </Link>
            </Button>
          </div>

          {/* EDIER PPR Piping Systems */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-600 mb-4">EDIER PPR Piping Systems</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 relative">
                <img 
                  src="/edier-product-new.jpg" 
                  alt="EDIER PPR Pipe Fittings in packaging" 
                  className="w-full h-48 object-contain mx-auto"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    EDIER Easy Install
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-sm leading-relaxed">
                Precision-engineered piping systems for pharmaceutical, food processing, and clean 
                energy applications. Designed for absolute purity and contamination-free fluid 
                transport.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Lightweight & Easy Installation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Pressure Resistance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Low Thermal Conductivity: Reduces heat loss in hot water systems, improving energy efficiency.</p>
                </div>
              </div>
            </div>

            <Button 
              asChild
              className="bg-brand-accent hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium w-full"
              data-testid="button-explore-edier-systems"
            >
              <Link href="/products/edier">
                Explore EDIER Systems
              </Link>
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="corporate-gray mb-6">
              Our experienced team can develop tailored plastic solutions to meet your specific requirements.
            </p>
            <Button 
              asChild
              className="bg-corporate-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200"
              data-testid="button-contact-custom"
            >
              <Link href="/contact">
                Contact Us for Custom Solutions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
