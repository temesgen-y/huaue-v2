import HeroSlider from "@/components/HeroSlider";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ProductsSection from "@/components/sections/ProductsSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <CompanyOverview />
      <ProductsSection />
    </div>
  );
}
