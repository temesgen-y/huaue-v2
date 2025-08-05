import HeroSection from "@/components/sections/HeroSection";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ProductsSection from "@/components/sections/ProductsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyOverview />
      <ProductsSection />
    </div>
  );
}
