import { VIPHeroSection } from "@/components/VIPHeroSection";
import { VIPBeforeAfterCarousel } from "@/components/VIPBeforeAfterCarousel";
import { VIPBenefitsSection } from "@/components/VIPBenefitsSection";
import { VIPAuthoritySection } from "@/components/VIPAuthoritySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <VIPHeroSection />
      <VIPBeforeAfterCarousel />
      <VIPBenefitsSection />
      <VIPAuthoritySection />
      <Footer />
    </div>
  );
};

export default Index;
