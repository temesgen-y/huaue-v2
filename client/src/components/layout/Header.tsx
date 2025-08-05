import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Building2, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActiveLink = (path: string) => location === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/agency-policy", label: "Agency Policy" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home-logo">
            <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center">
              <Building2 className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold corporate-blue">Huayue Plastics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Link */}
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                isActiveLink("/")
                  ? "corporate-blue"
                  : "corporate-gray hover:text-blue-600"
              }`}
              data-testid="link-nav-home"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger 
                className={`font-medium transition-colors duration-200 flex items-center ${
                  location.startsWith("/products")
                    ? "corporate-blue"
                    : "corporate-gray hover:text-blue-600"
                }`}
                data-testid="button-products-dropdown"
              >
                Products <ChevronDown className="ml-1" size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/products/huayue" data-testid="link-huayue-products">
                    Huayue Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/edier" data-testid="link-edier-products">
                    Edier Products
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Navigation Items */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink(item.path)
                    ? "corporate-blue"
                    : "corporate-gray hover:text-blue-600"
                }`}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Home Link */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-lg ${
                    isActiveLink("/")
                      ? "corporate-blue font-semibold"
                      : "corporate-gray"
                  }`}
                  data-testid="link-mobile-home"
                >
                  Home
                </Link>
                
                {/* Products Section */}
                <div className="px-3 py-2">
                  <span className="text-lg font-semibold corporate-gray">Products</span>
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/products/huayue"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 text-base ${
                        isActiveLink("/products/huayue")
                          ? "corporate-blue font-semibold"
                          : "corporate-gray"
                      }`}
                      data-testid="link-mobile-huayue-products"
                    >
                      Huayue Products
                    </Link>
                    <Link
                      href="/products/edier"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 text-base ${
                        isActiveLink("/products/edier")
                          ? "corporate-blue font-semibold"
                          : "corporate-gray"
                      }`}
                      data-testid="link-mobile-edier-products"
                    >
                      Edier Products
                    </Link>
                  </div>
                </div>

                {/* Other Navigation Items */}
                {navItems.slice(1).map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-lg ${
                      isActiveLink(item.path)
                        ? "corporate-blue font-semibold"
                        : "corporate-gray"
                    }`}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
