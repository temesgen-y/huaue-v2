const clients = [
  { name: "TECH", category: "TECHNOLOGY", color: "text-blue-600" },
  { name: "WATER", category: "WATER SOLUTIONS", color: "text-blue-500" },
  { name: "INFRASTRUCTURE", category: "INFRASTRUCTURE", color: "text-green-600" },
  { name: "MANUFACTURING", category: "MANUFACTURING", color: "text-orange-600" },
  { name: "ENERGY", category: "ENERGY", color: "text-yellow-600" },
  { name: "PIPELINE", category: "PIPELINE", color: "text-blue-700" },
  { name: "GLOBAL", category: "GLOBAL CORP", color: "text-green-500" },
  { name: "CONSTRUCTION", category: "CONSTRUCTION", color: "text-gray-600" },
  { name: "CHEMICAL", category: "CHEMICAL", color: "text-purple-600" },
  { name: "PETRO", category: "PETROLEUM", color: "text-red-600" },
  { name: "URBAN", category: "URBAN PLANNING", color: "text-indigo-600" },
  { name: "MARINE", category: "MARINE", color: "text-cyan-600" },
  { name: "INDUSTRIAL", category: "INDUSTRIAL", color: "text-gray-700" },
  { name: "AUTOMOTIVE", category: "AUTOMOTIVE", color: "text-red-500" },
  { name: "HEALTHCARE", category: "HEALTHCARE", color: "text-pink-600" },
  { name: "TRANSPORT", category: "TRANSPORT", color: "text-blue-800" },
];

export default function TrustedClients() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Our Trusted Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with industry leaders worldwide
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Marquee Content */}
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="mx-8 flex-shrink-0 text-center"
                data-testid={`client-${client.name.toLowerCase()}-1`}
              >
                <div className="w-32 h-24 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center mb-3 hover:shadow-md transition-shadow duration-200">
                  <div className="text-center">
                    <div className={`text-lg font-bold ${client.color}`}>
                      {client.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {client.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Second set of clients for seamless loop */}
            {clients.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="mx-8 flex-shrink-0 text-center"
                data-testid={`client-${client.name.toLowerCase()}-2`}
              >
                <div className="w-32 h-24 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center mb-3 hover:shadow-md transition-shadow duration-200">
                  <div className="text-center">
                    <div className={`text-lg font-bold ${client.color}`}>
                      {client.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {client.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}