import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const qualitySteps = [
  {
    step: "1",
    title: "Raw Material Inspection",
    description: "Every batch of raw materials undergoes comprehensive testing before production begins."
  },
  {
    step: "2", 
    title: "In-Process Quality Control",
    description: "Continuous monitoring and testing throughout the manufacturing process."
  },
  {
    step: "3",
    title: "Final Product Testing", 
    description: "Complete quality verification before products leave our facility."
  },
  {
    step: "4",
    title: "Documentation & Traceability",
    description: "Full documentation trail for complete product traceability."
  }
];

export default function QualityAssurance() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Our Quality Assurance Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rigorous testing and validation at every step
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Process Steps */}
          <div className="space-y-6">
            {qualitySteps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4"
                data-testid={`quality-step-${step.step}`}
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Check Icon */}
                <div className="flex-shrink-0">
                  <CheckCircle className="text-brand-accent" size={20} />
                </div>
              </div>
            ))}

            {/* Additional Quality Info */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">ISO</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black">ISO 13874 Certified</h4>
                  <p className="text-sm text-gray-600">International quality standards compliance</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-brand-accent">99.8%</div>
                  <div className="text-xs text-gray-600">Pass Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-accent">24/7</div>
                  <div className="text-xs text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Process Flow Image */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/images/quality-assurance-process.svg" 
                alt="Quality Assurance Manufacturing Process" 
                className="w-full h-96 object-cover"
                data-testid="img-quality-process"
              />
              <div className="absolute bottom-4 right-4 bg-brand-accent text-white px-3 py-2 rounded shadow-lg">
                <Button 
                  size="sm"
                  className="bg-transparent hover:bg-white hover:text-brand-accent text-white border border-white text-xs"
                  data-testid="button-iso-certified"
                >
                  ISO Certified
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}