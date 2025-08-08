import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Award } from "lucide-react";

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

export default function About() {
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

        {/* Company Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="corporate-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-200">Products Manufactured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Countries Served</div>
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
