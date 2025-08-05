import { Button } from "@/components/ui/button";

export default function PartnershipCTA() {
  return (
    <section className="py-16 lg:py-20 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Partner with Our Leading Plastic PPR Solutions?
        </h2>
        
        {/* Subtext */}
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Join over 50 countries worldwide that trust Huayue Group for their packaging needs.
          <br />
          Get a custom quote for your project today.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-white text-brand-accent hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-lg transition-colors duration-200"
            data-testid="button-get-quote"
          >
            Get Quote Now
          </Button>
          
          <Button 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-brand-accent px-8 py-3 text-lg font-medium rounded-lg transition-colors duration-200"
            data-testid="button-agency-policy"
          >
            Agency Policy
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-white/80 text-sm">Countries Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">25+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">10K+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">99.8%</div>
              <div className="text-white/80 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}