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
          {/* Huayue Products */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Huayue industrial plastic products" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 corporate-blue">
                Huayue Products
              </h2>
              <p className="corporate-gray mb-6 text-lg">
                Premium quality plastic components for industrial applications, including injection molded parts, custom solutions, and specialized materials designed for demanding environments.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-blue-100 text-blue-800 text-sm">Industrial Grade</Badge>
                <Badge className="bg-blue-100 text-blue-800 text-sm">Custom Solutions</Badge>
                <Badge className="bg-blue-100 text-blue-800 text-sm">High Durability</Badge>
                <Badge className="bg-blue-100 text-blue-800 text-sm">ISO Certified</Badge>
              </div>
              <Button 
                asChild
                className="bg-corporate-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 w-full"
                data-testid="button-view-huayue-details"
              >
                <Link href="/products/huayue">
                  View Huayue Products
                </Link>
              </Button>
            </div>
          </div>

          {/* Edier Products */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Edier consumer plastic products" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 corporate-blue">
                Edier Products
              </h2>
              <p className="corporate-gray mb-6 text-lg">
                Consumer-focused plastic products including packaging solutions, household items, and innovative designs for everyday use, emphasizing sustainability and user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-green-100 text-green-800 text-sm">Consumer Grade</Badge>
                <Badge className="bg-green-100 text-green-800 text-sm">Eco-Friendly</Badge>
                <Badge className="bg-green-100 text-green-800 text-sm">Innovative Design</Badge>
                <Badge className="bg-green-100 text-green-800 text-sm">FDA Approved</Badge>
              </div>
              <Button 
                asChild
                className="bg-success-green hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 w-full"
                data-testid="button-view-edier-details"
              >
                <Link href="/products/edier">
                  View Edier Products
                </Link>
              </Button>
            </div>
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
