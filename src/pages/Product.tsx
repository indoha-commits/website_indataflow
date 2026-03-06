import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import { 
  Package, 
  FileCheck, 
  Clock, 
  Activity,
  Eye,
  Upload,
  CheckCircle,
  Shield,
  Users,
  Lock,
  Timer,
  FileText,
  ArrowRight
} from "lucide-react";

const internalFeatures = [
  {
    icon: Package,
    title: "Cargo creation",
    description: "Create and manage cargo entries with all required details in one place.",
  },
  {
    icon: FileCheck,
    title: "Document validation",
    description: "Upload, validate, and track all cargo-related documents.",
  },
  {
    icon: Clock,
    title: "Timeline & milestones",
    description: "Define and track every milestone from port to warehouse.",
  },
  {
    icon: Activity,
    title: "Activity log",
    description: "Complete audit trail of every action taken on each cargo.",
  },
];

const clientFeatures = [
  {
    icon: Eye,
    title: "Shipment visibility",
    description: "Clients see real-time status of their cargo without calling you.",
  },
  {
    icon: Upload,
    title: "Required documents upload",
    description: "Clients can upload required documents directly to the system.",
  },
  {
    icon: CheckCircle,
    title: "Status timeline",
    description: "Visual timeline showing exactly where cargo is in the process.",
  },
  {
    icon: Shield,
    title: "Proof & audit trail",
    description: "Complete transparency with timestamped records of all updates.",
  },
];

const scaleFeatures = [
  {
    icon: Users,
    title: "Multi-tenant",
    description: "Serve multiple clients from a single installation.",
  },
  {
    icon: Lock,
    title: "Secure access",
    description: "Role-based access control for your team and clients.",
  },
  {
    icon: Timer,
    title: "SLA-ready",
    description: "Built-in SLA tracking and alerting.",
  },
  {
    icon: FileText,
    title: "Audit-grade logs",
    description: "Compliance-ready logging for every operation.",
  },
];

export default function Product() {
  return (
    <Layout>
      <PageHeader
        title="The complete platform for logistics operations"
        description="Everything you need to manage cargo, documents, and client visibility in one system."
      >
        <Link to="/contact">
          <Button variant="accent" size="xl" className="mt-8 animate-fade-up animation-delay-200">
            See it in action
          </Button>
        </Link>
      </PageHeader>

      {/* Internal Operations */}
      <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimation animation="slide-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Internal Operations Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your command center for daily cargo operations. See everything, control everything.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {internalFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, hsl(var(--home-blue) / 0.15), hsl(var(--home-blue) / 0.08))' }}>
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
            
            {/* Screenshot */}
            <ScrollAnimation animation="slide-right" delay={100}>
              <div className="aspect-[2/1] bg-card rounded-xl border border-border home-card shadow-elevated overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/internal_dashboard2.png"
                  alt="Internal operations dashboard preview"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Client Dashboard */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Screenshot */}
            <ScrollAnimation animation="slide-left" className="order-2 md:order-1">
              <div className="aspect-[2/1] bg-card rounded-xl border border-border home-card shadow-elevated overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/SECONDTRY.png"
                  alt="Client dashboard preview"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-right" delay={100} className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Client Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Give your clients visibility without giving up control. They see what they need, when they need it.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {clientFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, hsl(var(--home-blue) / 0.15), hsl(var(--home-blue) / 0.08))' }}>
                      <feature.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Built for Scale */}
      <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
        <div className="container-wide">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Built for scale
              </h2>
              <p className="text-lg text-muted-foreground">
                Enterprise-grade infrastructure for growing logistics operations.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {scaleFeatures.map((feature, index) => (
              <ScrollAnimation
                key={feature.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="bg-card rounded-xl p-6 border border-border shadow-soft text-center h-full hover:-translate-y-1 hover:shadow-medium transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, hsl(var(--home-blue) / 0.15), hsl(var(--home-blue) / 0.08))' }}>
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-wide text-center relative">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 whitespace-nowrap">
            Ready to see InDataFlow in action?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Book a walkthrough and see how it fits your operation.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="xl" className="group">
              Book a demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
