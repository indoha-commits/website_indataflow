import { useState } from "react";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import { ChevronRight, Package, FileCheck, Clock } from "lucide-react";

const demoSteps = [
  {
    id: "upload",
    icon: FileCheck,
    title: "Upload Document",
    description: "Client uploads customs paperwork",
    action: "Document received"
  },
  {
    id: "verify",
    icon: Package,
    title: "Auto Verification",
    description: "System checks completeness",
    action: "Verified ✓"
  },
  {
    id: "track",
    icon: Clock,
    title: "Real-time Update",
    description: "Client sees status instantly",
    action: "Notified"
  },
];

export function MiniDemo() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section-padding relative overflow-hidden home-theme" style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--card)) 50%, hsl(var(--background)) 100%)' }}>
      <div className="container-wide">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Interactive Demo</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              See it work in 3 steps
            </h2>
            <p className="text-lg text-muted-foreground">
              "Click through a real cargo workflow."
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {demoSteps.map((step, index) => (
              <ScrollAnimation key={step.id} animation="fade-up" delay={index * 100}>
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-full p-6 rounded-xl border-2 transition-all text-left home-card ${
                    activeStep === index
                      ? 'border-primary bg-primary/5 shadow-medium'
                      : 'border-border bg-card hover:border-primary/30'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    activeStep === index ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <div className={`text-sm font-medium flex items-center gap-2 ${
                    activeStep === index ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {step.action}
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="mt-8 p-8 bg-card border border-border home-card rounded-xl">
              <div className="aspect-video bg-muted/50 rounded-lg overflow-hidden">
                <img
                  src="/tt1.png"
                  alt="Upload document preview"
                  className="w-full h-full object-contain transition-all duration-700 ease-out translate-y-0 translate-x-0 scale-100 opacity-100"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
