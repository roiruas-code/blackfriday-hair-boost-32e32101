import { VIPHeroSection } from "@/components/VIPHeroSection";
import { VIPBeforeAfterCarousel } from "@/components/VIPBeforeAfterCarousel";
import { VIPBenefitsSection } from "@/components/VIPBenefitsSection";
import { VIPAuthoritySection } from "@/components/VIPAuthoritySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <VIPHeroSection />
      <VIPBeforeAfterCarousel />
      <VIPBenefitsSection />
      <VIPAuthoritySection />
    </div>
  );
};

export default Index;
