import HeroSlider from "@/components/HeroSlider";
import HuayueOverview from "@/components/sections/HuayueOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ProductsSection from "@/components/sections/ProductsSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <HuayueOverview />
      <WhyChooseUs />
      <CompanyOverview />
      <ProductsSection />
    </div>
  );
}
