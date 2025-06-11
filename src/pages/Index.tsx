import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeatureCards />
      <CallToAction />
    </div>
  );
};

export default Index;
