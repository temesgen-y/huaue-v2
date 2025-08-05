import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/hero-manufacturing.svg" 
          alt="Huayue Plastics Manufacturing" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Leading Innovation in Plastics Manufacturing
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200">
            Huayue Plastics Industry delivers high-quality plastic solutions with cutting-edge technology and sustainable practices for over two decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              data-testid="button-view-products"
            >
              <Link href="/products/huayue">View Our Products</Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-200"
              data-testid="button-get-quote"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
