import { Settings, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Advanced Manufacturing",
    description: "State-of-the-art equipment and processes ensure consistent quality and precision in every product we manufacture.",
    bgColor: "bg-brand-accent",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Committed to environmental responsibility through eco-friendly materials and sustainable manufacturing processes.",
    bgColor: "bg-brand-accent",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality control standards and ISO certifications guarantee the highest quality in all our products.",
    bgColor: "bg-brand-accent",
  },
];

export default function CompanyOverview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
