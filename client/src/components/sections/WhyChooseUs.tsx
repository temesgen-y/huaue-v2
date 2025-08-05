import { Shield, Zap, Package, DollarSign, Globe, Headphones } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Premium Quality:",
    description: "Manufactured using state-of-the-art technology with strict quality control."
  },
  {
    icon: Zap,
    title: "Reliable Performance",
    description: "High durability and resistance against wear and tear."
  },
  {
    icon: Package,
    title: "Comprehensive Product Range:",
    description: "Covering all plumbing needs from piping to fittings and valves."
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions:",
    description: "Long-lasting materials reduce maintenance and replacement costs."
  },
  {
    icon: Globe,
    title: "Eco-Friendly Materials:",
    description: "Safe for potable water and environmentally sustainable."
  },
  {
    icon: Headphones,
    title: "Excellent Customer Support",
    description: "A dedicated team for technical assistance and sales inquiries."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Why Choose HUAYUE PLASTICS INDUSTRY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key advantages that set us apart from the competition
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              data-testid={`advantage-${advantage.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center">
                  <advantage.icon className="text-white" size={32} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-3">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}