import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, X, CheckCircle, MessageSquareOff, FileCheck, Shield, Users, ExternalLink, Handshake } from "lucide-react";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";

const beforeIssues = [
  "Cargo status tracked in spreadsheets shared via email",
  "Clients calling daily to ask 'where is my shipment?'",
  "Documents scattered across WhatsApp, email, and local folders",
  "No visibility into which milestone was delayed and why",
  "Disputes with clients over timelines and responsibilities",
];

const outcomes = [
  {
    icon: MessageSquareOff,
    metric: "70%",
    title: "Client communication reduced",
    description: "Clients access the portal instead of calling or messaging for updates.",
  },
  {
    icon: FileCheck,
    metric: "50%",
    title: "Document collection time cut",
    description: "Clients upload required documents directly through the portal with clear requirements.",
  },
  {
    icon: Shield,
    metric: "~0",
    title: "Disputes nearly eliminated",
    description: "Timestamped milestone tracking provides clear accountability and evidence.",
  },
  {
    icon: Users,
    metric: "Days",
    title: "New staff onboarded faster",
    description: "Clear workflows and centralized information make training faster and more effective.",
  },
];

const afterOutcomes = [
  "Single source of truth for all active cargo",
  "Clients check status themselves through their portal",
  "All documents uploaded, validated, and linked to cargo",
  "Clear milestone tracking with timestamps and accountability",
  "Transparent audit trail reduces disputes to near zero",
];

export default function CaseStudy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-surface)' }}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-4 py-2 rounded-full mb-6">
                <CheckCircle className="w-4 h-4" />
                Case Study
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-foreground">
                Running real cargo operations with InDataFlow
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                How a clearing and forwarding agent transformed their operation from fragmented chaos to controlled transparency.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">The Operation</h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                  A mid-sized clearing and forwarding agent operating in West Africa, handling cargo from port arrival through customs clearance to final warehouse delivery. The team of 12 manages approximately 150-200 shipments per month across multiple clients.
                </p>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/5 rounded-full border border-accent/20 hover:border-accent/40 transition-colors group">
                  <Handshake className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">In partnership with</span>
                  <a 
                    href="https://galaxylogistic.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent font-semibold inline-flex items-center gap-1.5 hover:gap-2 transition-all"
                  >
                    Galaxy Logistics
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8">
              {[
                { value: "150+", label: "Shipments/month" },
                { value: "12", label: "Team members" },
                { value: "20+", label: "Active clients" },
              ].map((stat, index) => (
                <ScrollAnimation key={stat.label} animation="scale-in" delay={index * 100}>
                  <div className="bg-card rounded-xl p-4 md:p-8 border border-border text-center hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[100px] md:min-h-[140px]">
                    <div className="text-2xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--gradient-surface)' }}>
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">The Transformation</h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">See the dramatic shift from manual chaos to streamlined operations</p>
              </div>
            </ScrollAnimation>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
              <ScrollAnimation animation="slide-left">
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                      <X className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Before InDataFlow</h3>
                      <p className="text-sm text-muted-foreground">Hours lost daily to manual updates</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {beforeIssues.map((issue) => (
                      <li key={issue} className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                        <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-right">
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-accent/20 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">After InDataFlow</h3>
                      <p className="text-sm text-muted-foreground">Controlled, transparent operations</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {afterOutcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="scale-in">
              <div className="rounded-2xl p-8 md:p-12 lg:p-16 text-center shadow-xl relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
                {/* Glow orb */}
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 animate-glow" style={{ background: 'radial-gradient(circle, hsl(var(--home-blue) / 0.4), transparent)' }} />
                <div className="relative">
                  <div className="flex justify-center mb-8">
                    <svg className="w-16 h-16 text-primary-foreground/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-10 text-primary-foreground leading-relaxed">
                    "We used to spend half our day answering 'where is my cargo?' calls. Now clients check the portal themselves. Our team focuses on actually moving cargo, not reporting on it."
                  </blockquote>
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden mx-auto mb-3">
                        <img
                          src="/galaxy-logistics-logo.png"
                          alt="Galaxy Logistics"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="font-semibold text-primary-foreground">Operations Director</div>
                      <div className="text-sm text-primary-foreground/70">Galaxy clearing and forwarding, East Africa</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--gradient-surface)' }}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">The Implementation</h2>
                <p className="text-muted-foreground text-lg">From signup to full operation in under two weeks</p>
              </div>
            </ScrollAnimation>
            
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 md:-translate-x-px" />
              
              {/* Step 1 */}
              <ScrollAnimation animation="fade-up" delay={0}>
                <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-10">
                  <div className="flex-1 md:text-right order-2 md:order-1">
                    <div className="bg-card border border-border rounded-xl p-6 md:ml-auto md:max-w-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                      <div className="text-sm text-accent font-semibold mb-2">Days 1-3</div>
                      <h3 className="font-bold text-lg mb-2">System Configuration</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Set up cargo types, document requirements, and milestone definitions specific to their operation.</p>
                    </div>
                  </div>
                  <div className="relative z-10 order-1 md:order-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-accent-foreground font-bold shadow-lg" style={{ background: 'var(--gradient-accent)' }}>1</div>
                  </div>
                  <div className="flex-1 order-3 hidden md:block" />
                </div>
              </ScrollAnimation>

              {/* Step 2 */}
              <ScrollAnimation animation="fade-up" delay={100}>
                <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-10">
                  <div className="flex-1 hidden md:block" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-accent-foreground font-bold shadow-lg" style={{ background: 'var(--gradient-accent)' }}>2</div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-card border border-border rounded-xl p-6 md:max-w-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                      <div className="text-sm text-accent font-semibold mb-2">Days 4-7</div>
                      <h3 className="font-bold text-lg mb-2">Team Training & Parallel Tracking</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Staff learned the system while running it alongside existing processes. No disruption to operations.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Step 3 */}
              <ScrollAnimation animation="fade-up" delay={200}>
                <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-10">
                  <div className="flex-1 md:text-right order-2 md:order-1">
                    <div className="bg-card border border-border rounded-xl p-6 md:ml-auto md:max-w-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                      <div className="text-sm text-accent font-semibold mb-2">Day 10</div>
                      <h3 className="font-bold text-lg mb-2">Primary System Switch</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Team confident enough to make InDataFlow their primary system. Legacy spreadsheets retired.</p>
                    </div>
                  </div>
                  <div className="relative z-10 order-1 md:order-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-accent-foreground font-bold shadow-lg" style={{ background: 'var(--gradient-accent)' }}>3</div>
                  </div>
                  <div className="flex-1 order-3 hidden md:block" />
                </div>
              </ScrollAnimation>

              {/* Step 4 */}
              <ScrollAnimation animation="fade-up" delay={300}>
                <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-1 hidden md:block" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-accent-foreground font-bold shadow-lg" style={{ background: 'var(--gradient-accent)' }}>4</div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-card border border-border rounded-xl p-6 md:max-w-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                      <div className="text-sm text-accent font-semibold mb-2">Day 14</div>
                      <h3 className="font-bold text-lg mb-2">Client Portal Live</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">All active clients given portal access. Self-service tracking fully operational.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="mt-14 text-center">
                <div className="inline-flex items-center gap-3 bg-accent/10 text-foreground text-sm px-6 py-3 rounded-full border border-accent/20">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>No IT involvement required. No servers. No complicated integrations.</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Operational Outcomes */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Operational Outcomes</h2>
                <p className="text-muted-foreground text-lg">Measurable improvements within the first month</p>
              </div>
            </ScrollAnimation>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {outcomes.map((outcome, index) => (
                <ScrollAnimation key={outcome.title} animation="fade-up" delay={index * 100}>
                  <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all" style={{ background: 'linear-gradient(135deg, hsl(var(--home-blue) / 0.15), hsl(var(--home-blue) / 0.08))' }}>
                        <outcome.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-foreground mb-1">{outcome.metric}</div>
                        <h3 className="font-bold text-lg mb-2">{outcome.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {outcome.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            
            {/* Financial Impact */}
            <ScrollAnimation animation="scale-in" delay={400}>
              <div className="mt-12 p-8 lg:p-10 border border-accent/20 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, hsl(var(--home-blue) / 0.1), hsl(var(--home-blue) / 0.05))' }}>
                <div className="inline-flex items-center gap-2 text-accent-foreground text-sm font-semibold px-4 py-2 rounded-full mb-6" style={{ background: 'var(--gradient-accent)' }}>
                  <CheckCircle className="w-4 h-4" />
                  Bottom Line Impact
                </div>
                <p className="text-foreground font-medium text-lg leading-relaxed max-w-2xl mx-auto">
                  The operational improvements translated into faster cargo clearance, fewer disputes, and measurable cost savings within the first month.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--gradient-surface)' }}>
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-accent/40 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, hsl(var(--home-blue) / 0.15), hsl(var(--home-blue) / 0.08))' }}>
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold mb-3">Explore More Success Stories</h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      See how other logistics operators transformed their operations with InDataFlow.
                    </p>
                    <Link to="/case-study" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                      View all case studies
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container-wide text-center relative">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 whitespace-nowrap">
              Ready to transform your operation?
            </h2>
            <p className="text-primary-foreground/80 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
              See how this would run inside your operation.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="xl" className="group text-lg px-8 py-6">
                Book a walkthrough
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
}
