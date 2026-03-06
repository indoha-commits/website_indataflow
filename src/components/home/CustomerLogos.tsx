import { ScrollAnimation } from "@/hooks/use-scroll-animation";

const customers = [
  { name: "Kigali Mining Corp", logo: "KMC" },
  { name: "Rwanda Tea Importers", logo: "RTI" },
  { name: "East Africa Freight", logo: "EAF" },
  { name: "Butare Electronics", logo: "BE" },
  { name: "Gisenyi Coffee", logo: "GC" },
];

export function CustomerLogos() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <ScrollAnimation>
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
            Trusted by logistics operators across East Africa
          </p>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {customers.map((customer, index) => (
            <ScrollAnimation key={customer.name} animation="fade-up" delay={index * 80}>
              <div className="w-32 h-16 flex items-center justify-center bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-soft transition-all group">
                <span className="text-xl font-bold text-muted-foreground/40 group-hover:text-primary/60 transition-colors font-mono">
                  {customer.logo}
                </span>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
