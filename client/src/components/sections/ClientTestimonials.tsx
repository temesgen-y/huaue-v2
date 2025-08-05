const testimonials = [
  {
    id: 1,
    quote: "HUAYUE pipes exceeded our expectations in both quality and delivery time. A reliable partner for industrial infrastructure projects.",
    name: "Amarpal Gatchan",
    title: "Senior Engineer, Structural Solutions",
    avatar: "AG",
    bgColor: "bg-blue-500"
  },
  {
    id: 2,
    quote: "The EDIER fittings were critical for our project's success. Quality is our pharmaceutical pipelines. Precision and reliability at its best.",
    name: "Dr. Maleerat Taye",
    title: "Technical Director, Samphran Manufacturing",
    avatar: "MT",
    bgColor: "bg-teal-500"
  },
  {
    id: 3,
    quote: "Excellent quality and on-time delivery. We've used HUAYUE systems for several major construction projects across Africa - always with great results.",
    name: "Mulagerta Kebede",
    title: "Project Manager, Pan-African Projects Group",
    avatar: "MK",
    bgColor: "bg-green-500"
  },
  {
    id: 4,
    quote: "Outstanding technical support and post-installation service. HUAYUE has been our trusted supplier for water infrastructure projects nationwide.",
    name: "Solomon Asefa",
    title: "Project Director, National Water Works",
    avatar: "SA",
    bgColor: "bg-orange-500"
  },
  {
    id: 5,
    quote: "HUAYUE pipes have consistently met our strict standards for delivery time and quality assurance in industrial infrastructure projects.",
    name: "Jonathan Kim",
    title: "Senior Project Manager",
    avatar: "JK",
    bgColor: "bg-purple-500"
  },
  {
    id: 6,
    quote: "The precision and durability of EDIER consumer products have made them our preferred choice for residential construction projects.",
    name: "Maria Rodriguez",
    title: "Construction Supervisor",
    avatar: "MR",
    bgColor: "bg-pink-500"
  },
  {
    id: 7,
    quote: "Exceptional service and product quality. HUAYUE's technical team provided excellent support throughout our pipeline installation.",
    name: "Ahmed Hassan",
    title: "Engineering Consultant",
    avatar: "AH",
    bgColor: "bg-indigo-500"
  },
  {
    id: 8,
    quote: "Reliable, durable, and cost-effective solutions. HUAYUE has been our go-to supplier for large-scale infrastructure development.",
    name: "Chen Wei",
    title: "Infrastructure Development Manager",
    avatar: "CW",
    bgColor: "bg-red-500"
  }
];

export default function ClientTestimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from industry leaders who trust our piping solutions
          </p>
        </div>

        {/* Testimonials Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Marquee Content */}
          <div className="flex animate-marquee-slow whitespace-nowrap">
            {/* First set of testimonials */}
            {testimonials.map((testimonial) => (
              <div 
                key={`first-${testimonial.id}`}
                className="mx-4 flex-shrink-0 w-80"
                data-testid={`testimonial-${testimonial.id}-1`}
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 h-64">
                  {/* Quote Icon */}
                  <div className="text-4xl text-brand-accent mb-4 font-serif">"</div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 whitespace-normal line-clamp-4">
                    {testimonial.quote}
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center mt-auto">
                    <div className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-bold text-sm mr-3`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-black text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Second set of testimonials for seamless loop */}
            {testimonials.map((testimonial) => (
              <div 
                key={`second-${testimonial.id}`}
                className="mx-4 flex-shrink-0 w-80"
                data-testid={`testimonial-${testimonial.id}-2`}
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 h-64">
                  {/* Quote Icon */}
                  <div className="text-4xl text-brand-accent mb-4 font-serif">"</div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 whitespace-normal line-clamp-4">
                    {testimonial.quote}
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center mt-auto">
                    <div className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-bold text-sm mr-3`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-black text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Join hundreds of satisfied clients worldwide
          </p>
          <button 
            className="bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            data-testid="button-get-quote"
          >
            Get Your Quote Today
          </button>
        </div>
      </div>
    </section>
  );
}