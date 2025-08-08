import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, Lightbulb, Home } from "lucide-react";

const productCategories = [
  {
    title: "Packaging Solutions",
    description: "Sustainable and innovative packaging materials for food, retail, and e-commerce applications.",
    features: ["Food Safe", "Biodegradable Options", "Tamper Evident", "Custom Printing"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
  {
    title: "Household Items",
    description: "Durable and stylish plastic products designed for everyday home use and organization.",
    features: ["BPA Free", "Dishwasher Safe", "Ergonomic Design", "Color Varieties"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
  {
    title: "Innovative Designs",
    description: "Cutting-edge consumer products that combine functionality with aesthetic appeal.",
    features: ["Modern Design", "Multi-Functional", "Easy Maintenance", "Space Saving"],
    image: "https://images.unsplash.com/photo-1558618022-fcd25c85cd6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
];

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    details: "Committed to sustainability with recyclable and biodegradable plastic options.",
  },
  {
    icon: Users,
    title: "Consumer-Centric Design",
    details: "Products designed with the end-user in mind, focusing on usability and aesthetics.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    details: "Continuous research and development to create next-generation consumer products.",
  },
  {
    icon: Home,
    title: "Home & Lifestyle",
    details: "Comprehensive range of products that enhance modern living and organization.",
  },
];

export default function EdierProducts() {
  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <img 
              src="/images/edier-simple-logo.svg" 
              alt="Edier Consumer Products Logo" 
              className="h-20 w-auto mx-auto"
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Edier Consumer Products
          </h1>
          <p className="text-xl corporate-gray max-w-3xl mx-auto mb-8">
            Innovative consumer-focused plastic products that enhance everyday life. 
            Our Edier product line combines functionality, sustainability, and modern design.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-green-100 text-green-800">FDA Approved</Badge>
            <Badge className="bg-green-100 text-green-800">Eco-Friendly</Badge>
            <Badge className="bg-green-100 text-green-800">Award-Winning Design</Badge>
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
                <CardTitle className="text-green-700">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="corporate-gray mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="outline" className="text-xs border-green-300 text-green-700">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Edier Products?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="corporate-gray text-sm">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Focus */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-800">Sustainability Commitment</h2>
              <p className="text-lg corporate-gray mb-6">
                Edier products are designed with environmental responsibility at their core. We use recycled materials, 
                biodegradable options, and sustainable manufacturing processes to minimize our environmental impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Leaf className="text-green-600 mr-3" size={20} />
                  <span>30% recycled content in standard products</span>
                </li>
                <li className="flex items-center">
                  <Leaf className="text-green-600 mr-3" size={20} />
                  <span>Biodegradable packaging options available</span>
                </li>
                <li className="flex items-center">
                  <Leaf className="text-green-600 mr-3" size={20} />
                  <span>Carbon-neutral manufacturing processes</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Sustainable manufacturing"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Product Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Food & Beverage</h3>
              <p className="corporate-gray">Food-safe containers, packaging, utensils, and storage solutions for the culinary industry.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Retail & E-commerce</h3>
              <p className="corporate-gray">Protective packaging, display cases, shopping accessories, and logistics solutions.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Home & Office</h3>
              <p className="corporate-gray">Organization systems, furniture accessories, decorative items, and functional tools.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6">Discover Edier Solutions for Your Business</h2>
            <p className="text-xl mb-8 text-green-100">
              Partner with us to bring innovative, sustainable consumer products to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                data-testid="button-catalog-request"
              >
                <Link href="/contact">Request Catalog</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                data-testid="button-partnership-inquiry"
              >
                <Link href="/contact">Partnership Inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
