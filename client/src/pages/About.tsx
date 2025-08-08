import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Award, X } from "lucide-react";
import { useState } from "react";

const achievements = [
  "ISO 9001:2015 Quality Management Certified",
  "Environmentally Responsible Manufacturing",
  "24/7 Customer Support and Service",
  "Global Supply Chain Network",
  "R&D Investment of 15% Annual Revenue",
  "Zero-Defect Quality Guarantee"
];

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Continuously pushing the boundaries of plastic manufacturing technology and sustainable practices."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building long-term partnerships through exceptional service and tailored solutions."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Maintaining the highest standards in every aspect of our manufacturing and service delivery."
  }
];

const certifications = [
  {
    id: 1,
    title: "50 Year Warranty",
    subtitle: "PP-R Built to Last, Guaranteed",
    image: "/images/cert-50-year-warranty.svg"
  },
  {
    id: 2,
    title: "Sole Authorized Distributor",
    subtitle: "WHEM Trading PLC Certificate",
    image: "/images/cert-authorized-distributor.svg"
  },
  {
    id: 3,
    title: "Alternative Distributor Certificate",
    subtitle: "Huayue Plastics Industry Certificate",
    image: "/images/cert-alternative-distributor.svg"
  },
  {
    id: 4,
    title: "ECAE Test Report - 63mm",
    subtitle: "PPR Pipe Testing Results",
    image: "/images/cert-ecae-test-63mm.svg"
  },
  {
    id: 5,
    title: "ECAE Test Report - 32mm",
    subtitle: "PPR Pipe Testing Results",
    image: "/images/cert-ecae-test-32mm.svg"
  },
  {
    id: 6,
    title: "Ethiopian Conformity Assessment",
    subtitle: "Enterprise Standards License",
    image: "/images/cert-ethiopian-conformity-1.svg"
  },
  {
    id: 7,
    title: "Ethiopian Conformity Assessment",
    subtitle: "Enterprise Certificate",
    image: "/images/cert-ethiopian-conformity-2.svg"
  },
  {
    id: 8,
    title: "Alternative Ethiopian Conformity",
    subtitle: "Assessment Certificate",
    image: "/images/cert-ethiopian-alt-conformity.svg"
  }
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Huayue Plastics Industry
          </h1>
          <p className="text-xl corporate-gray max-w-3xl mx-auto">
            Leading the plastics industry with innovation, quality, and sustainability for over two decades.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Story & Mission
            </h2>
            <p className="text-lg corporate-gray mb-6">
              Founded with a vision to revolutionize the plastics industry, Huayue Plastics Industry has been at the forefront of innovation for over two decades. We combine traditional craftsmanship with cutting-edge technology to deliver superior products that meet the evolving needs of our global customers.
            </p>
            <p className="text-lg corporate-gray mb-8">
              Our commitment to quality, sustainability, and customer satisfaction has made us a trusted partner for businesses worldwide. We continuously invest in research and development to stay ahead of industry trends and deliver solutions that drive our customers' success.
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Huayue Plastics manufacturing facility" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Mission, Vision & Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To deliver innovative, high-quality industrial pipe solutions that enable our customers to build safe, efficient, and sustainable infrastructure for global markets.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the leading industrial pipe manufacturer globally, recognized for innovation, sustainability, and unwavering commitment to customer success. Look forward to the future.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Values</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Quality, integrity, innovation, and customer-centricity guide everything we do. We believe in building lasting partnerships.
              </p>
            </div>
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
                <img 
                  src="/images/huayue-industrial.svg" 
                  alt="HUAYUE Heavy-duty Steel Pipes" 
                  className="w-full h-48 object-contain mb-6 bg-gray-50 rounded-lg"
                />
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
                <img 
                  src="/images/edier-consumer.svg" 
                  alt="EDIER Precision Piping Systems" 
                  className="w-full h-48 object-contain mb-6 bg-gray-50 rounded-lg"
                />
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



        {/* Leadership & Team */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Leadership & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 corporate-blue">Executive Leadership</h3>
              <p className="corporate-gray mb-4">
                Our leadership team brings decades of combined experience in plastics manufacturing, 
                engineering, and business development. They guide our strategic vision and ensure 
                operational excellence across all divisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 corporate-blue">Technical Expertise</h3>
              <p className="corporate-gray mb-4">
                Our engineering and technical teams consist of industry experts with advanced degrees 
                in materials science, chemical engineering, and manufacturing technology. This expertise 
                drives innovation and quality in every product we create.
              </p>
            </div>
          </div>
        </div>

        {/* Our Certifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted quality, proven performance.
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
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{cert.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{cert.subtitle}</p>
              </div>
            ))}
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
            <p className="text-xl corporate-gray mb-8 max-w-2xl mx-auto">
              Discover how Huayue Plastics Industry can help you achieve your manufacturing goals 
              with our innovative solutions and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-corporate-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
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
