import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden home-theme" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container-wide">
        <ScrollAnimation animation="fade-up">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-4 whitespace-nowrap inline-block">
              This is not a reporting tool. It's how your operation runs.
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              "See how InDataFlow brings structure, accountability, and clarity to daily cargo operations."
            </p>
            <Link to="/contact">
              <Button 
                variant="accent" 
                size="xl"
                className="group"
              >
                Book a walkthrough
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
