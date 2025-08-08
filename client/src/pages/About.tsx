import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Award, X } from "lucide-react";
import { useState } from "react";

// Certificate data with direct image URLs
const certifications = [
  {
    id: 1,
    title: "Authorized Distributor Certificate",
    subtitle: "WHEM Trading PLC Official Certificate",
    image: "/cert1.jpg"
  },
  {
    id: 2,
    title: "Product Quality Certificate",
    subtitle: "HUAYUE Product Certificate",
    image: "/cert2.png"
  },
  {
    id: 3,
    title: "50 Year Warranty",
    subtitle: "PP-R Product Warranty Certificate",
    image: "/cert3.png"
  },
  {
    id: 4,
    title: "ECAE Test Report - 63mm",
    subtitle: "PPR Pipe Testing Results",
    image: "/cert4.jpg"
  },
  {
    id: 5,
    title: "ECAE Test Report - 32mm", 
    subtitle: "PPR Pipe Testing Results",
    image: "/cert5.jpg"
  },
  {
    id: 6,
    title: "Ethiopian Conformity Assessment",
    subtitle: "Enterprise Standards License",
    image: "/cert6.png"
  },
  {
    id: 7,
    title: "Ethiopian Conformity Assessment",
    subtitle: "Enterprise Certificate",
    image: "/cert7.png"
  },
  {
    id: 8,
    title: "Ethiopian Standard License",
    subtitle: "PPR Pipe Standards Mark",
    image: "/cert8.jpg"
  },
  {
    id: 9,
    title: "Mizena Product Certificate",
    subtitle: "Product Quality Certification",
    image: "/cert9.jpg"
  },
  {
    id: 10,
    title: "Product Test Report",
    subtitle: "HUAYUE Plastic Pipe Fittings",
    image: "/cert10.png"
  },
  {
    id: 11,
    title: "ECAE Test Report - 25mm",
    subtitle: "PPR Pipe Testing Results", 
    image: "/cert11.jpg"
  },
  {
    id: 12,
    title: "ECAE Test Report - 50mm",
    subtitle: "PPR Pipe Testing Results",
    image: "/cert12.jpg"
  }
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Huayue Plastics Industry
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Leading the industry in innovative plastic manufacturing solutions with over two decades of excellence, 
            delivering quality products under our HUAYUE industrial and EDIER consumer brands.
          </p>
        </div>

        {/* Mission, Vision & Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize the plastics industry through innovative manufacturing processes, sustainable practices, 
              and exceptional customer service that exceeds expectations.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" className="text-white">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the global leader in sustainable plastic solutions, setting industry standards for quality, 
              innovation, and environmental responsibility worldwide.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" className="text-white">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 leading-relaxed">
              Quality, integrity, innovation, and customer-centricity guide everything we do. We believe in building lasting partnerships.
            </p>
          </div>
        </div>

        {/* Our Product Lines */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Product Lines</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Discover our comprehensive range of industrial piping solutions designed for various applications and industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* HUAYUE Product Line */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="w-full h-48 bg-gray-50 rounded-lg mb-6 flex items-center justify-center">
                  <svg width="120" height="80" viewBox="0 0 120 80" className="text-brand-accent">
                    <rect x="10" y="30" width="100" height="20" fill="currentColor" rx="10"/>
                    <rect x="20" y="20" width="80" height="40" fill="none" stroke="currentColor" strokeWidth="2" rx="20"/>
                    <circle cx="30" cy="40" r="8" fill="currentColor"/>
                    <circle cx="90" cy="40" r="8" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-brand-accent mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900">HUAYUE</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Heavy-duty steel pipes and fittings designed for extreme industrial conditions.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
                  <span className="text-gray-700">High-pressure applications</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
                  <span className="text-gray-700">Corrosion resistant coating</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
                  <span className="text-gray-700">20-300mm diameter range</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
                  <span className="text-gray-700">PN16 & PN20 pressure ratings</span>
                </div>
              </div>

              <Button 
                asChild
                className="w-full bg-brand-accent hover:bg-green-700 text-white"
                data-testid="button-view-huayue-products"
              >
                <Link href="/products/huayue">View HUAYUE Products →</Link>
              </Button>
            </div>

            {/* EDIER Product Line */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="w-full h-48 bg-gray-50 rounded-lg mb-6 flex items-center justify-center">
                  <svg width="120" height="80" viewBox="0 0 120 80" className="text-brand-accent">
                    <path d="M20 40 L50 20 L80 40 L100 25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="20" cy="40" r="6" fill="currentColor"/>
                    <circle cx="50" cy="20" r="6" fill="currentColor"/>
                    <circle cx="80" cy="40" r="6" fill="currentColor"/>
                    <circle cx="100" cy="25" r="6" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex items-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-brand-accent mr-3">
                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">EDIER</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Precision-engineered piping systems for pharmaceutical and clean energy industries.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
                  <span className="text-gray-700">Pharmaceutical-grade materials</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
                  <span className="text-gray-700">Food-safe coatings</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
                  <span className="text-gray-700">FDA approved components</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
                  <span className="text-gray-700">Clean room certified</span>
                </div>
              </div>

              <Button 
                asChild
                className="w-full bg-brand-accent hover:bg-green-700 text-white"
                data-testid="button-view-edier-products"
              >
                <Link href="/products/edier">View EDIER Products →</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide our operations and decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Excellence */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-brand-accent">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We strive for excellence in everything we do, from product quality to customer service.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-600">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We continuously seek new ways to improve our products and processes.
              </p>
            </div>

            {/* Integrity */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-purple-600">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Integrity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We conduct business ethically and transparently, building trust with all stakeholders.
              </p>
            </div>

            {/* Sustainability */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-green-600">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.99.66C7.92 16.88 9.4 12.87 15 11.22c5.6-1.65 7.08-5.66 9.19-10.88l-1.99-.66C20.1 7.83 18 2 17 8z" fill="currentColor"/>
                  <ellipse cx="4.5" cy="9.5" rx="2.5" ry="4.5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Sustainability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are committed to environmentally responsible manufacturing and operations.
              </p>
            </div>
          </div>
        </div>

        {/* Our Certifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted quality, proven performance. View our comprehensive certification portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedImage(cert.image)}
                data-testid={`cert-card-${cert.id}`}
              >
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center p-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300x400/28a745/ffffff?text=Certificate+" + cert.id;
                    }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{cert.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced leaders driving our company's vision and success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Alemayehu Tadesse - CEO */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Alemayehu</div>
                  <div className="text-sm text-gray-600 mb-1">Tadesse - Chief</div>
                  <div className="text-sm text-gray-600">Executive Officer</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alemayehu Tadesse</h3>
              <p className="text-brand-accent font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                25+ years in industrial manufacturing and global business development.
              </p>
            </div>

            {/* Meron Habtamu - CTO */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Meron</div>
                  <div className="text-sm text-gray-600 mb-1">Habtamu - Chief</div>
                  <div className="text-sm text-gray-600 mb-1">Technology</div>
                  <div className="text-sm text-gray-600">Officer</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Meron Habtamu</h3>
              <p className="text-brand-accent font-semibold mb-4">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert in materials engineering and product innovation with 20+ years experience.
              </p>
            </div>

            {/* Dawit Kebede - COO */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Dawit Kebede</div>
                  <div className="text-sm text-gray-600 mb-1">Chief Operations</div>
                  <div className="text-sm text-gray-600">Officer</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dawit Kebede</h3>
              <p className="text-brand-accent font-semibold mb-4">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Operations excellence and supply chain optimization specialist with global expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability Commitment Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Sustainability Commitment</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Environmental responsibility is central to our business philosophy. We are 
                committed to developing sustainable packaging solutions that minimize 
                environmental impact while maintaining the highest quality standards.
              </p>

              <div className="space-y-6">
                {/* Biodegradable Materials */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Biodegradable Materials</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our Edier brand specializes in PLA+PBAT+corn starch/calcium powder materials 
                    that are fully compostable and environmentally friendly.
                  </p>
                </div>

                {/* Waste Reduction */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Waste Reduction</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Advanced manufacturing processes minimize waste and maximize material 
                    efficiency throughout our production cycle.
                  </p>
                </div>

                {/* Green Manufacturing */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Green Manufacturing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Energy-efficient facilities and sustainable practices reduce our carbon footprint 
                    while maintaining production excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="lg:order-last">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <svg width="120" height="120" viewBox="0 0 120 120" className="text-brand-accent mx-auto mb-4">
                    <circle cx="60" cy="60" r="50" fill="currentColor" opacity="0.1"/>
                    <path d="M40 60 L60 40 L80 60 L60 80 Z" fill="currentColor" opacity="0.3"/>
                    <circle cx="60" cy="60" r="25" fill="currentColor" opacity="0.6"/>
                    <path d="M50 60 Q60 45 70 60 Q60 75 50 60" fill="white"/>
                  </svg>
                  <p className="text-brand-accent font-medium text-sm">
                    Sustainable packaging and environmental responsibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Certificate Images */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
            data-testid="modal-overlay"
          >
            <div className="relative max-w-4xl max-h-full bg-white rounded-lg p-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-lg"
                data-testid="button-close-modal"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto max-h-[80vh] object-contain rounded"
                data-testid="modal-image"
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-100 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how Huayue Plastics Industry can help you achieve your manufacturing goals 
              with our innovative solutions and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-brand-accent hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                data-testid="button-start-partnership"
              >
                <Link href="/contact">Start a Partnership</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-gray-400 text-gray-700 hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                data-testid="button-learn-more"
              >
                <Link href="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}