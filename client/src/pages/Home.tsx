import HeroSlider from "@/components/HeroSlider";
import HuayueOverview from "@/components/sections/HuayueOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import OurProductLines from "@/components/sections/OurProductLines";
import QualityAssurance from "@/components/sections/QualityAssurance";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ProductsSection from "@/components/sections/ProductsSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <HuayueOverview />
      <WhyChooseUs />
      <OurProductLines />
      <QualityAssurance />
      <CompanyOverview />
      <ProductsSection />
    </div>
  );
}
