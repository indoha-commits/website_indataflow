import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const formatUSD = (usd: number) => `$${usd.toLocaleString()}`;
const formatAnnual = (usd: number) => `$${(usd * 12).toLocaleString()}`;

const setupFeatures = [
  "Client operational workflow setup",
  "Cargo reference structure configuration",
  "Document type configuration (BL, invoice, packing list, permits, etc.)",
  "User account setup (procurement / ops / finance viewers)",
  "Training for client team (2 sessions)",
  "Active shipment onboarding",
  "Document archive migration (optional)",
  "30-day implementation support",
];

const plans = [
  {
    name: "Starter",
    icon: "🟢",
    description: "For teams getting started with clear shipment visibility.",
    priceUSD: 600,
    capacity: "Up to 40 shipments/month",
    features: [
      "Cargo timeline dashboard",
      "Document upload + validation tracking",
      "Clearing progress visibility",
      "Storage day counter",
      "Digital archive",
      "Email notifications",
      "Standard support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    icon: "🔵",
    description: "For growing operations that need faster responses and reporting.",
    priceUSD: 1200,
    capacity: "Up to 100 shipments/month",
    features: [
      "Everything in Starter",
      "Priority response SLA",
      "Clearing progress notifications",
      "Weekly shipment summary",
      "Multi-user access (procurement + finance visibility)",
    ],
    highlighted: true,
  },
  {
    name: "High Volume",
    icon: "🟣",
    description: "For enterprises moving 100+ shipments per month.",
    priceLabel: "Custom",
    capacity: "100+ shipments/month",
    features: [
      "Dedicated support",
      "Custom reporting",
      "Multi-department access",
      "Bulk document management",
      "SLA priority",
    ],
    highlighted: false,
  },
];

const includedFeatures = [
  "Cargo timeline dashboard",
  "Document upload + validation tracking",
  "Clearing progress visibility",
  "Storage day counter",
  "Digital archive",
  "Email notifications",
  "Standard support",
];

export default function Pricing() {
  const [showAnnualDiscount, setShowAnnualDiscount] = useState(false);
  const annualPrice = (priceUSD?: number) =>
    priceUSD ? Math.round(priceUSD * 0.9) : null;
  const annualTotal = (priceUSD?: number) =>
    priceUSD ? Math.round(priceUSD * 12 * 0.9) : null;

  return (
    <Layout>
      <PageHeader
        title="Simple, volume-based pricing"
        description="Pricing based on operational volume, not users. No per-seat pricing. No hidden fees."
      />

      {/* Setup */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-4xl mx-auto bg-card rounded-xl border border-border p-8 sm:p-10 shadow-soft">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full inline-flex mb-4">
                    One-time setup
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-foreground">$2,000 one-time</h2>
                  <p className="text-muted-foreground mb-6">
                    This is operational deployment, not software activation.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <Link to="/contact">
                    <Button variant="accent" size="lg">
                      Schedule deployment
                    </Button>
                  </Link>
                  <span className="text-sm text-muted-foreground">One-time operational deployment.</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {setupFeatures.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Monthly plans */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <button
            type="button"
            onClick={() => setShowAnnualDiscount((prev) => !prev)}
            className="max-w-5xl mx-auto mb-8 bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left transition-all hover:border-accent/40"
          >
            <div>
              <h3 className="text-lg font-semibold">Annual discount (10% off)</h3>
              <p className="text-sm text-muted-foreground">Apply the yearly payment discount to any monthly plan (VAT included).</p>
            </div>
            <div className="text-sm font-medium text-accent">
              {showAnnualDiscount ? "Hide yearly pricing" : "Show yearly pricing"}
            </div>
          </button>
          {showAnnualDiscount && (
            <div className="max-w-5xl mx-auto -mt-4 mb-6 text-sm text-muted-foreground">
              Yearly billing applies 10% off the monthly total and is billed upfront.
            </div>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <ScrollAnimation key={plan.name} animation="fade-up" delay={index * 100}>
                <div
                  className={`rounded-xl p-8 border h-full cursor-default transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlighted
                      ? "text-primary-foreground border-primary shadow-elevated scale-105"
                      : "bg-card border-border shadow-soft hover:shadow-medium"
                  }`}
                  style={plan.highlighted ? { background: 'var(--gradient-hero)' } : undefined}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{plan.icon}</span>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>
                  <p className={`text-sm mb-6 leading-relaxed ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <div className="text-3xl font-bold">
                      {plan.priceUSD
                        ? showAnnualDiscount
                          ? `${formatAnnual(annualTotal(plan.priceUSD) ?? plan.priceUSD)} / year`
                          : `${formatUSD(plan.priceUSD)} / month`
                        : plan.priceLabel}
                    </div>
                    {showAnnualDiscount && plan.priceUSD && (
                      <div className={`text-sm mt-2 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {formatUSD(annualPrice(plan.priceUSD) ?? plan.priceUSD)} / month billed yearly
                      </div>
                    )}
                  </div>
                  <div className={`text-sm mb-3 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.capacity}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5" />
                        <span className={plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant={plan.highlighted ? "accent" : "outline"} className="w-full">
                      Start subscription
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="section-padding text-primary-foreground relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-white/80 font-medium tracking-wider uppercase text-sm mb-3">What's Included</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">All plans include</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-4 sm:gap-y-6">
              {includedFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-4 py-4 border-b border-primary-foreground/10">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-primary-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-primary-foreground/60 mt-12 text-sm">
              We don't charge you for running your operation properly — unlimited users and clients on all plans.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="bg-card rounded-xl border border-border overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-12">
                    <div className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full inline-block mb-4">
                      For Large-Scale Operations
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Enterprise</h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Custom deployment and dedicated support for organizations processing high volumes across multiple regions.
                    </p>
                    <Link to="/contact">
                      <Button variant="default" size="lg" className="group">
                        Talk to our team
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="p-6 sm:p-8 lg:p-12 border-t md:border-t-0 md:border-l border-border" style={{ background: 'var(--gradient-surface)' }}>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                      Enterprise includes
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: "Unlimited cargo volume", desc: "No monthly caps or overage fees" },
                        { label: "SLA-backed support", desc: "Guaranteed response times with dedicated contacts" },
                        { label: "Regional rollout", desc: "Multi-location deployment with localized workflows" },
                        { label: "Security review", desc: "Compliance documentation and audit support" },
                        { label: "Custom integrations", desc: "API access and third-party system connections" },
                        { label: "Dedicated onboarding", desc: "White-glove setup with your operations team" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-foreground">{item.label}</span>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <h2 className="text-2xl font-bold mb-8 text-center text-foreground">Common questions</h2>
            </ScrollAnimation>
            <div className="space-y-6">
              {[
                { q: "What counts as a cargo?", a: "A cargo is any shipment you create in InDataFlow, regardless of size or number of containers." },
                { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle." },
                { q: "What happens if I exceed my cargo limit?", a: "We'll notify you when you're approaching your limit. You can upgrade your plan or we can discuss overage pricing." },
                { q: "Is there a contract?", a: "We offer monthly and annual billing. Annual plans come with a discount. No long-term contracts required." },
              ].map((item, index) => (
                <ScrollAnimation key={item.q} animation="fade-up" delay={index * 80}>
                  <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/20 hover:shadow-soft transition-all duration-300">
                    <h3 className="font-semibold mb-2">{item.q}</h3>
                    <p className="text-muted-foreground">{item.a}</p>
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
            Book a call to discuss your needs and get a personalized quote.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="xl" className="group">
              Get started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
