import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { LiveMetrics } from "@/components/home/LiveMetrics";
import { CustomerLogos } from "@/components/home/CustomerLogos";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ProofSection } from "@/components/home/ProofSection";
import { MiniDemo } from "@/components/home/MiniDemo";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { CTASection } from "@/components/home/CTASection";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ScrollAnimation>
        <ProblemSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <SolutionSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <ProofSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <HowItWorksPreview />
      </ScrollAnimation>
      <ScrollAnimation>
        <CTASection />
      </ScrollAnimation>
    </Layout>
  );
};

export default Index;
