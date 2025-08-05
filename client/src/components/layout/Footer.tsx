import { Link } from "wouter";
import { Building2, Linkedin, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center">
                <Building2 className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">Huayue Plastics</span>
            </div>
            <p className="text-gray-300 mb-6">
              Leading innovation in plastics manufacturing with a commitment to quality, sustainability, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-corporate-blue transition-colors duration-200" data-testid="link-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-corporate-blue transition-colors duration-200" data-testid="link-facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-corporate-blue transition-colors duration-200" data-testid="link-twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-footer-home">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/products/huayue" className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-footer-huayue">Huayue Products</Link></li>
              <li><Link href="/products/edier" className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-footer-edier">Edier Products</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-footer-news">News</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-service-manufacturing">Custom Manufacturing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-service-consulting">Design Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-service-quality">Quality Testing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-service-logistics">Global Shipping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="link-service-support">Technical Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-start">
                <MapPin className="mt-1 mr-3 flex-shrink-0" size={16} />
                <span>123 Industrial Park Avenue<br />Shanghai, China</span>
              </p>
              <p className="text-gray-300 flex items-center">
                <Phone className="mr-3 flex-shrink-0" size={16} />
                <span>+86-21-1234-5678</span>
              </p>
              <p className="text-gray-300 flex items-center">
                <Mail className="mr-3 flex-shrink-0" size={16} />
                <span>info@huayueplastics.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Huayue Plastics Industry. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200" data-testid="link-terms">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200" data-testid="link-sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
