import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Shield, Truck, Award } from "lucide-react";

const productCategories = [
  {
    title: "Industrial Components",
    description: "High-precision injection molded parts for automotive, aerospace, and machinery applications.",
    features: ["Automotive Grade", "Aerospace Certified", "High Precision", "Custom Design"],
    image: "https://images.unsplash.com/photo-1565976469828-1084a3c20877?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
  {
    title: "Specialized Materials",
    description: "Advanced polymer compounds designed for extreme conditions and specialized applications.",
    features: ["Heat Resistant", "Chemical Resistant", "UV Stable", "Food Grade"],
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
  {
    title: "Custom Solutions",
    description: "Bespoke plastic manufacturing solutions tailored to your specific industrial requirements.",
    features: ["Custom Design", "Rapid Prototyping", "Volume Production", "Quality Testing"],
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
];

const specifications = [
  {
    icon: Settings,
    title: "Manufacturing Standards",
    details: "ISO 9001:2015 certified manufacturing processes with strict quality control at every stage.",
  },
  {
    icon: Shield,
    title: "Material Certifications",
    details: "FDA, RoHS, and REACH compliant materials ensuring safety and environmental responsibility.",
  },
  {
    icon: Truck,
    title: "Global Delivery",
    details: "Worldwide shipping capabilities with secure packaging and tracking for all orders.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    details: "Comprehensive warranty coverage and quality assurance on all industrial products.",
  },
];

export default function HuayueProducts() {
  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Huayue Industrial Products
          </h1>
          <p className="text-xl corporate-gray max-w-3xl mx-auto mb-8">
            Premium quality plastic components engineered for demanding industrial applications. 
            Our Huayue product line delivers exceptional performance, durability, and precision.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-blue-100 text-blue-800">ISO 9001:2015 Certified</Badge>
            <Badge className="bg-blue-100 text-blue-800">25+ Years Experience</Badge>
            <Badge className="bg-blue-100 text-blue-800">Global Supply Chain</Badge>
          </div>
        </div>

        {/* Product Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <CardHeader>
                <CardTitle className="corporate-blue">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="corporate-gray mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Product Specifications & Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{spec.title}</h3>
                <p className="corporate-gray text-sm">{spec.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Industrial Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 corporate-blue">Automotive Industry</h3>
              <p className="corporate-gray">Interior components, under-hood parts, electrical housings, and structural elements.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 corporate-blue">Aerospace & Defense</h3>
              <p className="corporate-gray">Lightweight components, insulation materials, and precision-engineered parts.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 corporate-blue">Heavy Machinery</h3>
              <p className="corporate-gray">Wear-resistant parts, protective housings, and custom industrial components.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Industrial Needs?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our technical team is ready to help you find the perfect Huayue solution for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                data-testid="button-request-quote"
              >
                <Link href="/contact">Request Quote</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                data-testid="button-technical-support"
              >
                <Link href="/contact">Technical Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
