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
      "Regular partnership reviews ensure continuous improvement and alignment of objectives.",
    ],
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    content: [
      "All our products come with comprehensive quality guarantees backed by ISO certifications.",
      "We stand behind our manufacturing processes with warranty coverage on all products.",
      "Quality issues are addressed within 48 hours with immediate corrective action plans.",
      "Continuous quality monitoring ensures consistent product excellence across all product lines.",
    ],
  },
  {
    icon: Truck,
    title: "Delivery & Logistics",
    content: [
      "We maintain efficient supply chain management to ensure timely delivery worldwide.",
      "Our logistics network covers global markets with reliable shipping partners and tracking systems.",
      "Standard delivery times range from 2-4 weeks depending on product complexity and destination.",
      "Emergency delivery options available for critical orders with expedited processing.",
    ],
  },
  {
    icon: Recycle,
    title: "Environmental Responsibility",
    content: [
      "Our environmental policy emphasizes sustainable practices and waste reduction.",
      "We prioritize the use of eco-friendly materials and recyclable components wherever possible.",
      "Carbon footprint reduction initiatives are implemented across all manufacturing processes.",
      "Regular environmental audits ensure compliance with international sustainability standards.",
    ],
  },
];

const additionalPolicies = [
  {
    title: "Pricing & Payment Terms",
    details: [
      "Competitive pricing with volume discounts for large orders",
      "Flexible payment terms including 30, 60, and 90-day options",
      "Multiple currency support for international transactions",
      "Transparent pricing with no hidden fees or charges",
    ],
  },
  {
    title: "Intellectual Property",
    details: [
      "Strict confidentiality agreements for all custom projects",
      "Client IP protection with comprehensive non-disclosure agreements",
      "Joint IP development opportunities for innovative solutions",
      "Licensing options available for proprietary technologies",
    ],
  },
  {
    title: "Technical Support",
    details: [
      "24/7 technical support hotline for critical issues",
      "On-site technical consultation and training services",
      "Comprehensive product documentation and specifications",
      "Regular software updates and technical bulletins",
    ],
  },
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
            Our comprehensive policies ensure transparent and professional
            business relationships built on trust, quality, and mutual success.
          </p>
        </div>

        {/* Main Policies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {policies.map((policy, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
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
                    <li
                      key={itemIndex}
                      className="corporate-gray flex items-start"
                    >
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Additional Policy Information
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalPolicies.map((policy, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 corporate-blue">
                  {policy.title}
                </h3>
                <ul className="space-y-2">
                  {policy.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="corporate-gray text-sm flex items-start"
                    >
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
          <h2 className="text-3xl font-bold text-center mb-8">
            Compliance & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Industry Standards
              </h3>
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
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                Environmental Compliance
              </h3>
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

        {/* Partnership Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to partners, distributors, and global agencies
              worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Row 1 */}
            {/* Exclusive Territory Rights */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path
                    d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Exclusive Territory Rights
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protected market territories for authorized distributors and
                agencies with exclusive selling rights in designated regions.
              </p>
            </div>

            {/* Marketing Support */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path
                    d="M7 14l3-3 3 3 5-5v4h4V7h-6l1 1-4 4-3-3-3 3v2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Marketing Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive marketing materials, training programs, and
                promotional support to help you succeed in your market.
              </p>
            </div>

            {/* Flexible Logistics */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path
                    d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Flexible Logistics
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Global shipping solutions with competitive pricing, reliable
                delivery, and flexible payment terms.
              </p>
            </div>

            {/* Row 2 */}
            {/* Technical Support */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Technical Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated technical team provides product training, application
                guidance, and ongoing support.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All products backed by ISO certifications and comprehensive
                quality control processes.
              </p>
            </div>

            {/* Competitive Pricing */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Competitive Pricing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Volume-based pricing structure with attractive margins for
                partners and bulk order discounts.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Requirements & Application Process Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Partnership Requirements */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Partnership Requirements
              </h2>

              <div className="space-y-6">
                {/* Minimum Annual Purchase Commitment */}
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className="text-white"
                    >
                      <path
                        d="M10 3L4.5 8.5 2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Minimum Annual Purchase Commitment
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Established minimum order quantities to ensure mutual
                      business growth and market development.
                    </p>
                  </div>
                </div>

                {/* Established Distribution Network */}
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className="text-white"
                    >
                      <path
                        d="M10 3L4.5 8.5 2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Established Distribution Network
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Proven distribution channels and customer base in the
                      target market with logistics capabilities.
                    </p>
                  </div>
                </div>

                {/* Local Market Expertise */}
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className="text-white"
                    >
                      <path
                        d="M10 3L4.5 8.5 2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Local Market Expertise
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Deep understanding of local market conditions,
                      regulations, and customer preferences.
                    </p>
                  </div>
                </div>

                {/* Financial Stability */}
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className="text-white"
                    >
                      <path
                        d="M10 3L4.5 8.5 2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Financial Stability
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Demonstrated financial stability and creditworthiness to
                      support ongoing business operations.
                    </p>
                  </div>
                </div>

                {/* Brand Standards Commitment */}
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className="text-white"
                    >
                      <path
                        d="M10 3L4.5 8.5 2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Brand Standards Commitment
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Commitment to maintaining Huayue brand standards and
                      quality reputation in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Application Process */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Application Process
              </h2>

              <div className="space-y-6">
                {/* Step 1 - Initial Application */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Initial Application
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Submit partnership application with company information
                      and market analysis.
                    </p>
                  </div>
                </div>

                {/* Step 2 - Qualification Review */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Qualification Review
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our team reviews your application and conducts financial
                      and market assessment.
                    </p>
                  </div>
                </div>

                {/* Step 3 - Partnership Meeting */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-accent text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Partnership Meeting
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Face-to-face or virtual meeting to discuss terms,
                      territory, and expectations.
                    </p>
                  </div>
                </div>

                {/* Step 4 - Agreement Signing */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Agreement Signing
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Finalize partnership agreement and begin onboarding
                      process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Apply for Partnership Button */}
              <div className="mt-8">
                <button
                  className="w-full bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  data-testid="apply-partnership-button"
                >
                  Apply for Partnership
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Levels Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership Levels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the partnership level that best fits your business goals
              and market presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Regional Distributor */}
            <div className="bg-gray-50 rounded-xl p-8 text-center relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Regional Distributor
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$50K+</div>
              <p className="text-gray-600 mb-6">Annual commitment</p>

              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-white"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Exclusive regional territory
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-white"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    10-15% volume discount
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-white"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Marketing support
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-white"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Technical training
                  </span>
                </div>
              </div>
            </div>

            {/* National Partner - Popular */}
            <div className="bg-brand-accent rounded-xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-brand-accent px-4 py-1 rounded-full text-sm font-semibold">
                  POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                National Partner
              </h3>
              <div className="text-3xl font-bold text-white mb-2">$200K+</div>
              <p className="text-green-100 mb-6">Annual commitment</p>

              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-brand-accent"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-sm">
                    Exclusive country territory
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-brand-accent"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-sm">
                    15-25% volume discount
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-brand-accent"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-sm">
                    Co-marketing programs
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-brand-accent"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-sm">
                    Dedicated account manager
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-brand-accent"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-sm">
                    Custom product development
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Alliance */}
            <div className="bg-gray-50 rounded-xl p-8 text-center relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Strategic Alliance
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                $500K+
              </div>
              <p className="text-gray-600 mb-6">Annual commitment</p>

              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-white"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Multi-country territories
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-white"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    25%+ volume discount
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-white"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Joint venture opportunities
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-white"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Priority production scheduling
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      className="text-white"
                    >
                      <path
                        d="M6.5 2L3 5.5 1.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    Strategic planning support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Policy Questions */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6">
              Questions About Our Policies?
            </h2>
            <p className="text-xl corporate-gray mb-8 max-w-2xl mx-auto">
              Our policy team is available to clarify any aspects of our
              business practices and help you understand how they apply to your
              specific situation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <h4 className="font-semibold mb-2">General Inquiries</h4>
                <p className="corporate-gray text-sm">
                  policy@huayueplastics.com
                </p>
                <p className="corporate-gray text-sm">+251 933 551 2345</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Legal & Compliance</h4>
                <p className="corporate-gray text-sm">
                  legal@huayueplastics.com
                </p>
                <p className="corporate-gray text-sm">+251 91 123 4567</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Environmental Policy</h4>
                <p className="corporate-gray text-sm">
                  environment@huayueplastics.com
                </p>
                <p className="corporate-gray text-sm">+251 91 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
