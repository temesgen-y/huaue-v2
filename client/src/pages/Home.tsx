import HeroSlider from "@/components/HeroSlider";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ProductsSection from "@/components/sections/ProductsSection";
import ProductCarousel from "@/components/sections/ProductCarousel";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <ProductCarousel />
      <CompanyOverview />
      <ProductsSection />
    </div>
  );
}
