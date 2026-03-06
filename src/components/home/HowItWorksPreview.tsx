import { UserPlus, Eye, Settings, Play } from "lucide-react";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Describe your operation",
    description: "Tell us how your cargo workflows run today.",
  },
  {
    icon: Eye,
    number: "02",
    title: "Preview your dashboard",
    description: "See exactly how InDataFlow fits your operation before going live.",
  },
  {
    icon: Settings,
    number: "03",
    title: "Complete setup",
    description: "We configure documents, milestones, and client access.",
  },
  {
    icon: Play,
    number: "04",
    title: "Run daily operations",
    description: "Manage cargo with clarity from day one.",
  },
];

export function HowItWorksPreview() {
  return (
    <section className="section-padding relative overflow-hidden home-theme" style={{ background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)' }}>
      <div className="container-wide">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">How it works</h2>
            <p className="text-lg text-muted-foreground">
              "From signup to daily operations in days, not months."
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ScrollAnimation
              key={step.title}
              animation="fade-up"
              delay={index * 100}
              className="relative flex"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-border" />
              )}

              <div className="text-center flex flex-col h-full">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-muted rounded-2xl mb-6 group-hover:shadow-medium transition-shadow mx-auto border border-border home-card" style={{ background: 'linear-gradient(135deg, hsl(var(--muted)), hsl(var(--card)))' }}>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground text-sm font-semibold rounded-lg flex items-center justify-center">
                    {step.number}
                  </span>
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
