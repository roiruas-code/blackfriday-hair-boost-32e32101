import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ProductsSection />
      <TestimonialsCarousel />
      <BenefitsSection />
      <AuthoritySection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
