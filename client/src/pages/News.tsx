import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "New Sustainability Initiative Launched",
    excerpt: "Huayue Plastics announces major investment in eco-friendly manufacturing processes and renewable materials.",
    content: "We are proud to announce our new sustainability initiative that will transform our manufacturing processes over the next three years. This comprehensive program includes investments in renewable energy, waste reduction technologies, and biodegradable material research.",
    date: "March 15, 2024",
    author: "Environmental Team",
    category: "Sustainability",
    image: "/news-1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Technology Expansion Program",
    excerpt: "Investment in advanced automation and AI-driven quality control systems to enhance production efficiency.",
    content: "Our technology expansion program represents a significant step forward in manufacturing excellence. The new AI-driven quality control systems will ensure even higher precision and consistency in our products.",
    date: "March 8, 2024",
    author: "Technology Team",
    category: "Technology",
    image: "/news-2.jpg",
    featured: true
  },
  {
    id: 3,
    title: "International Trade Show Success",
    excerpt: "Outstanding reception at the Global Plastics Expo with new product launches and partnership opportunities.",
    content: "Our participation in the Global Plastics Expo was highly successful, featuring our latest product innovations and establishing new partnerships with international distributors.",
    date: "February 28, 2024",
    author: "Marketing Team",
    category: "Events",
    image: "/news-3.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Q4 2023 Financial Results",
    excerpt: "Strong financial performance with 15% growth in revenue and expansion into new markets.",
    content: "We are pleased to report excellent financial results for Q4 2023, demonstrating the strength of our business model and market position.",
    date: "January 20, 2024",
    author: "Finance Team",
    category: "Financial",
    image: "/news-4.jpg",
    featured: false
  },
  {
    id: 5,
    title: "New Research & Development Center",
    excerpt: "Opening of state-of-the-art R&D facility to accelerate innovation in plastic materials and manufacturing.",
    content: "Our new R&D center will focus on developing next-generation plastic materials with enhanced properties and sustainability features.",
    date: "December 15, 2023",
    author: "R&D Team",
    category: "Innovation",
    image: "/news-5.jpg",
    featured: false
  },
  {
    id: 6,
    title: "ISO 9001:2015 Recertification",
    excerpt: "Successfully renewed our ISO 9001:2015 certification with commendation for quality improvements.",
    content: "We are proud to announce the successful renewal of our ISO 9001:2015 certification, recognizing our commitment to quality excellence.",
    date: "November 30, 2023",
    author: "Quality Team",
    category: "Quality",
    image: "/news-6.jpg",
    featured: false
  }
];

const categories = ["All", "Sustainability", "Technology", "Events", "Financial", "Innovation", "Quality"];

export default function News() {
  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Sustainability": "bg-green-100 text-green-800",
      "Technology": "bg-blue-100 text-blue-800",
      "Events": "bg-purple-100 text-purple-800",
      "Financial": "bg-yellow-100 text-yellow-800",
      "Innovation": "bg-red-100 text-red-800",
      "Quality": "bg-gray-100 text-gray-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl corporate-gray max-w-3xl mx-auto">
            Stay informed about our latest developments, innovations, and industry insights.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full"
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Stories</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm corporate-gray">
                      <Calendar size={14} className="mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="corporate-blue hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="corporate-gray text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm corporate-gray">
                      <User size={14} className="mr-1" />
                      {article.author}
                    </div>
                    <Button variant="ghost" size="sm" data-testid={`read-more-${article.id}`}>
                      Read More <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Recent Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)} variant="outline">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs corporate-gray">
                      <Calendar size={12} className="mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg corporate-blue hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="corporate-gray text-sm mb-3">{article.excerpt}</p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto" data-testid={`read-more-${article.id}`}>
                    Read More <ArrowRight size={12} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="corporate-gray mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, product updates, and industry insights directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
              data-testid="input-newsletter-email"
            />
            <Button 
              className="bg-corporate-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              data-testid="button-subscribe-newsletter"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
