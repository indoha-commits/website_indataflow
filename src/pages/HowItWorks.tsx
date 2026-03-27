import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import { 
  ClipboardList, 
  Eye, 
  Settings, 
  Rocket,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Sign up and describe your operation",
    description: "Tell us about your cargo types, the ports you work with, your typical workflows, and your team structure. This helps us configure InDataFlow for your specific needs.",
    details: [
      "5-minute onboarding questionnaire",
      "No technical knowledge required",
      "Support available via call or chat",
    ],
  },
  {
    icon: Eye,
    number: "02",
    title: "Preview your dashboard",
    description: "See a preview of how your operation will look in InDataFlow. Review the cargo pipeline, document structure, and client portal before going live.",
    details: [
      "Personalized demo environment",
      "See real workflow examples",
      "Provide feedback before launch",
    ],
  },
  {
    icon: Settings,
    number: "03",
    title: "Complete setup",
    description: "Configure your milestones, document requirements, team roles, and client access levels. We help you set up everything correctly the first time.",
    details: [
      "Guided configuration wizard",
      "Import existing data if needed",
      "Team training included",
    ],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Run daily operations",
    description: "Start managing real cargo from day one. Your team uses InDataFlow for every shipment, and your clients get instant visibility.",
    details: [
      "Start with live cargo immediately",
      "Ongoing support and assistance",
      "Regular check-ins during first month",
    ],
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      <PageHeader
        title="From signup to daily operations"
        description="No heavy IT. No months of implementation. InDataFlow is designed for fast onboarding and immediate daily usage."
      />

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <ScrollAnimation
                key={step.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="relative">
                  {/* Vertical Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-10 top-24 bottom-0 w-px bg-gradient-to-b from-accent to-border hidden md:block"></div>
                  )}
                  
                  <div className="flex gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-24 group">
                    {/* Icon */}
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105" style={{ background: 'linear-gradient(135deg, hsl(var(--muted)), hsl(var(--card)))' }}>
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 text-accent-foreground text-sm font-semibold rounded-lg flex items-center justify-center shadow-md" style={{ background: 'var(--gradient-accent)' }}>
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
                What makes InDataFlow different
              </h2>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "Days", label: "Not months", desc: "Go live within a week of signup" },
                { value: "Zero", label: "IT requirements", desc: "No servers, no installations, no IT team needed" },
                { value: "100%", label: "Web-based", desc: "Access from any device, anywhere" },
              ].map((item, index) => (
                <ScrollAnimation key={item.value} animation="scale-in" delay={index * 100}>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-foreground mb-2">{item.value}</div>
                    <div className="text-lg font-medium mb-1">{item.label}</div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-wide text-center relative">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 whitespace-nowrap">
            Ready to get started?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Book a call and we'll walk you through the entire process.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="xl" className="group">
              Book a walkthrough
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
