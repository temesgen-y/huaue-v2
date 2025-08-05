import HeroSection from "@/components/sections/HeroSection";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ProductsSection from "@/components/sections/ProductsSection";
import ProductCarousel from "@/components/sections/ProductCarousel";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductCarousel />
      <CompanyOverview />
      <ProductsSection />
    </div>
  );
}
