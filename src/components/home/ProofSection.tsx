import { CheckCircle } from "lucide-react";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";

const credibilitySignals = [
  "Live cargo operations in East Africa",
  "Active clearing and forwarding workflows",
  "Port-to-warehouse coverage",
  "Paying clients using the system daily",
];

export function ProofSection() {
  return (
    <section className="section-padding relative overflow-hidden home-theme" style={{ background: 'var(--gradient-surface)' }}>
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Already running live cargo operations.
            </h2>
            <p className="text-lg mb-10 text-muted-foreground">
              "InDataFlow is actively used in real logistics workflows — tracking shipments, validating documents, and coordinating teams daily."
            </p>
          </ScrollAnimation>

          {/* Credibility Signals */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10">
            {credibilitySignals.map((signal, index) => (
              <ScrollAnimation key={signal} animation="fade-up" delay={index * 80}>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{signal}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Quote */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="mt-16 max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border home-card shadow-medium">
              <blockquote className="text-xl text-muted-foreground italic leading-relaxed">
                "InDataFlow replaced three different systems we were using. Now our team and our clients see the same information in real-time."
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden">
                  <img
                    src="/galaxy-logistics-logo.png"
                    alt="Galaxy Logistics"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="font-medium">Operations Manager</div>
                  <div className="text-sm text-muted-foreground">
                    <a 
                      href="https://galaxylogisticsrwanda.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline decoration-dotted underline-offset-2"
                    >
                      Clearing & Forwarding, East Africa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
