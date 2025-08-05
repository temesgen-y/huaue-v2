import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { text: "ISO 13874 standards" },
  { text: "24/7 Support" },
  { text: "Regional delivery available across selected areas" },
  { text: "Custom Solutions" }
];

export default function HuayueOverview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              HUAYUE PLASTICS INDUSTRY
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                HUAYUE PLASTICS INDUSTRY P.L.C produces two major product brands: EDIER 
                and HUAYUE PP-R pipes and fittings. The factory has the capability to 
                manufacture PP-R pipes and fittings ranging from 20mm to 50mm in diameter, 
                with pressure ratings of PN20 and PN16.
              </p>
              
              <p>
                Committed to quality and reliability, EDIER and HUAYUE PP-R products comply 
                with ISO 13874 standards and are manufactured using high-quality Korean-
                origin PP-R resin, ensuring superior strength, durability, and safety for both hot 
                and cold water applications. HUAYUE PLASTICS INDUSTRY P.L.C. operates 
                alongside its sister company, HUAYU Textile Industry, within the same industrial 
                compound, reinforcing its commitment to excellence across multiple sectors.
              </p>
              
              <p>
                HUAYUE PLASTICS INDUSTRY P.L.C. operates alongside its sister company, 
                HUAYU Textile Industry, within the same industrial compound, reinforcing its 
                commitment to excellence across multiple sectors.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 my-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-brand-accent flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-brand-accent hover:bg-brand-accent-dark text-white px-6 py-3 rounded font-medium"
              data-testid="button-learn-more-about-us"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/images/huayue-manufacturing-facility.svg" 
                alt="Huayue Plastics Manufacturing Facility" 
                className="w-full h-96 object-cover"
                data-testid="img-manufacturing-facility"
              />
              <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded shadow-lg">
                <span className="text-sm text-gray-600">Huayue Plastics Manufacturing Facility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}