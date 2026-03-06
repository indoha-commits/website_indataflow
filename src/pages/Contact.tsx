import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import { AnimatedHeaderBackground } from "@/components/ui/animated-header-background";
import { useState } from "react";
import { CheckCircle, Mail } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="section-padding bg-background relative overflow-hidden">
        <AnimatedHeaderBackground />
        
        <div className="container-wide relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Left Column - Info */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-up">
                  Book a walkthrough
                </h1>
                <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-100">
                  See how InDataFlow can transform your logistics operation. Fill out the form and we'll schedule a personalized demo.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "30-minute walkthrough", desc: "See the platform in action with real workflows relevant to your operation." },
                    { title: "Custom configuration preview", desc: "We'll show you how InDataFlow would look for your specific cargo types." },
                    { title: "No commitment required", desc: "Just a conversation about whether InDataFlow is right for you." },
                  ].map((item, index) => (
                    <ScrollAnimation key={item.title} animation="fade-up" delay={index * 100}>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, hsl(var(--home-blue) / 0.15), hsl(var(--home-blue) / 0.08))' }}>
                          <CheckCircle className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>

                {/* Contact Info */}
                <ScrollAnimation animation="fade-up" delay={300}>
                  <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="font-semibold mb-4">Other ways to reach us</h3>
                    <div className="space-y-3">
                      <a href="mailto:hello@indataflow.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>hello@indataflow.com</span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Right Column - Form */}
              <ScrollAnimation animation="scale-in" delay={200}>
                <div className="bg-card rounded-xl border border-border p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, hsl(var(--home-blue) / 0.15), hsl(var(--home-blue) / 0.08))' }}>
                        <CheckCircle className="w-8 h-8 text-accent" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
                      <p className="text-muted-foreground">
                        We'll be in touch within 24 hours to schedule your walkthrough.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" placeholder="Your company name" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" placeholder="Where are you based?" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@company.com" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="volume">Monthly cargo volume (optional)</Label>
                        <Input id="volume" placeholder="e.g., 100-200 shipments" className="h-12" />
                      </div>
                      <Button type="submit" variant="accent" size="lg" className="w-full">
                        Book a walkthrough
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        We'll respond within 24 hours. No spam, ever.
                      </p>
                    </form>
                  )}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}