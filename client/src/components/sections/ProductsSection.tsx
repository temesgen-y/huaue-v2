import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    title: "Huayue Products",
    description: "Premium quality plastic components for industrial applications, including injection molded parts, custom solutions, and specialized materials.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Industrial Grade", "Custom Solutions", "High Durability"],
    buttonColor: "bg-corporate-blue hover:bg-blue-700",
    tagColor: "bg-blue-100 text-blue-800",
    link: "/products/huayue",
  },
  {
    title: "Edier Products",
    description: "Consumer-focused plastic products including packaging solutions, household items, and innovative designs for everyday use.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Consumer Grade", "Eco-Friendly", "Innovative Design"],
    buttonColor: "bg-success-green hover:bg-green-700",
    tagColor: "bg-green-100 text-green-800",
    link: "/products/edier",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Product Lines
          </h2>
          <p className="text-xl corporate-gray max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality plastic products designed to meet diverse industry needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 corporate-blue">
                  {product.title}
                </h3>
                <p className="corporate-gray mb-6">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      className={`${product.tagColor} text-sm`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  asChild
                  className={`${product.buttonColor} text-white px-6 py-3 rounded-lg transition-colors duration-200`}
                  data-testid={`button-view-${product.title.toLowerCase().split(' ')[0]}`}
                >
                  <Link href={product.link}>
                    View {product.title}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
