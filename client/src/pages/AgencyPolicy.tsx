import { Handshake, Shield, Truck, Recycle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const policies = [
  {
    icon: Handshake,
    title: "Partnership Terms",
    content: [
      "We establish long-term partnerships based on mutual trust, transparent communication, and shared success.",
      "Our partnership terms are designed to be fair and beneficial for all parties involved.",
      "We offer flexible contract structures to accommodate different business models and requirements.",
      "Regular partnership reviews ensure continuous improvement and alignment of objectives."
    ]
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    content: [
      "All our products come with comprehensive quality guarantees backed by ISO certifications.",
      "We stand behind our manufacturing processes with warranty coverage on all products.",
      "Quality issues are addressed within 48 hours with immediate corrective action plans.",
      "Continuous quality monitoring ensures consistent product excellence across all product lines."
    ]
  },
  {
    icon: Truck,
    title: "Delivery & Logistics",
    content: [
      "We maintain efficient supply chain management to ensure timely delivery worldwide.",
      "Our logistics network covers global markets with reliable shipping partners and tracking systems.",
      "Standard delivery times range from 2-4 weeks depending on product complexity and destination.",
      "Emergency delivery options available for critical orders with expedited processing."
    ]
  },
  {
    icon: Recycle,
    title: "Environmental Responsibility",
    content: [
      "Our environmental policy emphasizes sustainable practices and waste reduction.",
      "We prioritize the use of eco-friendly materials and recyclable components wherever possible.",
      "Carbon footprint reduction initiatives are implemented across all manufacturing processes.",
      "Regular environmental audits ensure compliance with international sustainability standards."
    ]
  }
];

const additionalPolicies = [
  {
    title: "Pricing & Payment Terms",
    details: [
      "Competitive pricing with volume discounts for large orders",
      "Flexible payment terms including 30, 60, and 90-day options",
      "Multiple currency support for international transactions",
      "Transparent pricing with no hidden fees or charges"
    ]
  },
  {
    title: "Intellectual Property",
    details: [
      "Strict confidentiality agreements for all custom projects",
      "Client IP protection with comprehensive non-disclosure agreements",
      "Joint IP development opportunities for innovative solutions",
      "Licensing options available for proprietary technologies"
    ]
  },
  {
    title: "Technical Support",
    details: [
      "24/7 technical support hotline for critical issues",
      "On-site technical consultation and training services",
      "Comprehensive product documentation and specifications",
      "Regular software updates and technical bulletins"
    ]
  }
];

export default function AgencyPolicy() {
  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Agency Policy
          </h1>
          <p className="text-xl corporate-gray max-w-3xl mx-auto">
            Our comprehensive policies ensure transparent and professional business relationships 
            built on trust, quality, and mutual success.
          </p>
        </div>

        {/* Main Policies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {policies.map((policy, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-4">
                    <policy.icon className="text-white" size={24} />
                  </div>
                  {policy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {policy.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="corporate-gray flex items-start">
                      <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Policies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Policy Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalPolicies.map((policy, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 corporate-blue">{policy.title}</h3>
                <ul className="space-y-2">
                  {policy.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="corporate-gray text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Certifications */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Industry Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Shield className="text-blue-600 mr-2" size={16} />
                  <span>ISO 9001:2015 Quality Management System</span>
                </li>
                <li className="flex items-center">
                  <Shield className="text-blue-600 mr-2" size={16} />
                  <span>ISO 14001 Environmental Management</span>
                </li>
                <li className="flex items-center">
                  <Shield className="text-blue-600 mr-2" size={16} />
                  <span>OHSAS 18001 Occupational Health & Safety</span>
                </li>
                <li className="flex items-center">
                  <Shield className="text-blue-600 mr-2" size={16} />
                  <span>FDA Compliance for Food-Grade Products</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">Environmental Compliance</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Recycle className="text-green-600 mr-2" size={16} />
                  <span>RoHS Directive Compliance</span>
                </li>
                <li className="flex items-center">
                  <Recycle className="text-green-600 mr-2" size={16} />
                  <span>REACH Regulation Adherence</span>
                </li>
                <li className="flex items-center">
                  <Recycle className="text-green-600 mr-2" size={16} />
                  <span>Circular Economy Principles</span>
                </li>
                <li className="flex items-center">
                  <Recycle className="text-green-600 mr-2" size={16} />
                  <span>Carbon Neutral Manufacturing Goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact for Policy Questions */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6">Questions About Our Policies?</h2>
            <p className="text-xl corporate-gray mb-8 max-w-2xl mx-auto">
              Our policy team is available to clarify any aspects of our business practices 
              and help you understand how they apply to your specific situation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <h4 className="font-semibold mb-2">General Inquiries</h4>
                <p className="corporate-gray text-sm">policy@huayueplastics.com</p>
                <p className="corporate-gray text-sm">+86-21-1234-5678</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Legal & Compliance</h4>
                <p className="corporate-gray text-sm">legal@huayueplastics.com</p>
                <p className="corporate-gray text-sm">+86-21-1234-5679</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Environmental Policy</h4>
                <p className="corporate-gray text-sm">environment@huayueplastics.com</p>
                <p className="corporate-gray text-sm">+86-21-1234-5680</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
