import { VIPHeroSection } from "@/components/VIPHeroSection";
import { VIPBeforeAfterCarousel } from "@/components/VIPBeforeAfterCarousel";
import { VIPBenefitsSection } from "@/components/VIPBenefitsSection";
import { VIPContactSection } from "@/components/VIPContactSection";
import { VIPAuthoritySection } from "@/components/VIPAuthoritySection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <VIPHeroSection />
      <VIPBeforeAfterCarousel />
      <VIPBenefitsSection />
      <VIPContactSection />
      <TestimonialsCarousel />
      <VIPAuthoritySection />
      <Footer />
    </div>
  );
};

export default Index;
