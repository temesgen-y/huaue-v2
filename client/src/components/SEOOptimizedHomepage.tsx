import { CheckCircle, Factory, MapPin, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function SEOOptimizedHomepage() {
  return (
    <main>
      {/* Hero Section with H1 */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Huayue Plastics Industry - Eider & Huayue PPR Piping System
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            Leading plastic factory in Ethiopia specializing in Eider & Huayue PPR piping systems, 
            PPR pipe and fittings. Factory in Kombolcha producing high-quality PVC, PEXA, PE, and PERT pipes 
            for comprehensive water supply systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold">
              <Link href="/products">Explore Our PPR Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About Huayue Plastics Industry - Hongyue Plastic Group
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  <strong>Huayue Plastics Industry</strong> operates as part of the renowned <strong>Hongyue Plastic Group</strong>, 
                  establishing itself as Ethiopia's premier plastic factory specializing in advanced piping solutions. 
                  Our factory in Kombolcha represents over two decades of manufacturing excellence in the plastic industry.
                </p>
                
                <p>
                  We specialize in producing comprehensive <strong>PPR piping systems</strong> under our flagship brands: 
                  <strong>Eider</strong> and <strong>Huayue</strong>. Our product range includes <strong>PPR pipe and fittings</strong>, 
                  <strong>PVC pipe</strong>, <strong>PEXA pipe</strong>, <strong>PE pipe</strong>, and <strong>PERT pipe</strong> 
                  solutions designed for diverse water supply system applications.
                </p>
                
                <p>
                  Our <strong>factory in Ethiopia</strong> operates with state-of-the-art manufacturing technology, 
                  ensuring that every <strong>PPR pipe fitting</strong> meets international quality standards. 
                  We serve both domestic and regional markets with reliable, durable piping solutions.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="flex items-center space-x-3">
                  <Factory className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-700">Factory in Kombolcha</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-700">ISO 13874 Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-700">Plastic Factory in Ethiopia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-700">20+ Years Experience</span>
                </div>
              </div>

              <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/slide-8.jpg" 
                  alt="Huayue Plastics Industry Factory in Kombolcha - Manufacturing Facility" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded shadow-lg">
                  <span className="text-sm text-gray-600">Factory in Kombolcha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive PPR Piping System Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our <strong>Eider & Huayue PPR piping system</strong> offers complete solutions for water supply systems, 
              featuring high-quality <strong>PPR pipe and fittings</strong> designed for residential, commercial, 
              and industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PPR Pipes */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">PPR Pipe Solutions</h3>
                <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/huayue-product-new.jpg" alt="PPR Pipe Products" className="w-full h-full object-contain" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                High-quality <strong>PPR pipe</strong> solutions ranging from 20mm to 50mm diameter, 
                with PN20 and PN16 pressure ratings for reliable water supply systems.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">Corrosion Resistant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">Heat Resistant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">Long-lasting Durability</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Link href="/products/huayue">View PPR Pipes</Link>
              </Button>
            </div>

            {/* PPR Pipe Fittings */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">PPR Pipe Fitting</h3>
                <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/edier-product-new.jpg" alt="PPR Pipe Fitting Products" className="w-full h-full object-contain" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Precision-engineered <strong>PPR pipe fitting</strong> components for seamless connections 
                in water supply systems, ensuring leak-free installations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">Easy Installation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">Leak-proof Connections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">Chemical Resistant</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Link href="/products/edier">View PPR Fittings</Link>
              </Button>
            </div>

            {/* Additional Pipe Types */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Pipe Range</h3>
                <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-500">
                    <div className="text-sm">PVC • PEXA • PE • PERT</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive range including <strong>PVC pipe</strong>, <strong>PEXA pipe</strong>, 
                <strong>PE pipe</strong>, and <strong>PERT pipe</strong> for diverse water supply system requirements.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">Multiple Materials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">Flexible Applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">Custom Solutions</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Link href="/products">Explore All Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Location Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Factory in Kombolcha - Strategic Location in Ethiopia
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Our <strong>factory in Kombolcha</strong> positions us strategically as Ethiopia's leading 
                  <strong>plastic factory in Ethiopia</strong>. This strategic location enables us to serve 
                  both domestic and regional markets efficiently.
                </p>
                
                <p>
                  The <strong>factory in Kombolcha</strong> houses advanced manufacturing facilities for 
                  <strong>PPR piping systems</strong>, ensuring consistent quality in every <strong>PPR pipe and fitting</strong> 
                  we produce. Our proximity to major transportation routes allows for timely delivery 
                  of <strong>water supply system PPR pipes</strong> across Ethiopia and neighboring regions.
                </p>
                
                <p>
                  As part of the <strong>Hongyue Plastic Group</strong>, our <strong>factory in Ethiopia</strong> 
                  maintains the highest standards in plastic manufacturing, producing reliable 
                  <strong>PVC pipe</strong>, <strong>PEXA pipe</strong>, <strong>PE pipe</strong>, and 
                  <strong>PERT pipe</strong> solutions for diverse applications.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/products-warehouse-1.jpg" 
                  alt="Huayue Plastics Industry Factory in Kombolcha - Manufacturing Excellence" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded shadow-lg">
                  <span className="text-sm text-gray-600">Manufacturing Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Partner with Huayue Plastics Industry?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how our <strong>Eider & Huayue PPR piping system</strong> can meet your water supply system needs. 
            From <strong>PPR pipe and fittings</strong> to comprehensive piping solutions, we deliver quality 
            from our <strong>factory in Kombolcha</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold">
              <Link href="/products">Explore Our PPR Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
