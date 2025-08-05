import HeroSlider from "@/components/HeroSlider";
import HuayueOverview from "@/components/sections/HuayueOverview";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ProductsSection from "@/components/sections/ProductsSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <HuayueOverview />
      <CompanyOverview />
      <ProductsSection />
    </div>
  );
}
