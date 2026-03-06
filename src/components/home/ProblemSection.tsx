import { MessageSquare, FileX, Clock, AlertTriangle } from "lucide-react";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";

const problems = [
  {
    icon: FileX,
    title: "No authoritative cargo record",
    description: "Cargo data scattered across spreadsheets, emails, and chat threads.",
  },
  {
    icon: MessageSquare,
    title: "Client disputes over timelines",
    description: "No shared, timestamped view of where cargo stands.",
  },
  {
    icon: Clock,
    title: "Documents lost between teams",
    description: "Compliance paperwork delayed or misplaced across handoffs.",
  },
  {
    icon: AlertTriangle,
    title: "No accountability per milestone",
    description: "It's unclear who did what, when, and why delays happened.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding relative overflow-hidden home-theme" style={{ background: 'var(--gradient-surface)' }}>
      <div className="container-wide">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Cargo delays, document errors, and client disputes are still managed on WhatsApp and Excel.
            </h2>
            <p className="text-lg text-muted-foreground">
              "Most logistics operations rely on spreadsheets, messages, and emails to track critical cargo information — creating confusion, delays, and accountability gaps."
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <ScrollAnimation key={problem.title} animation="fade-up" delay={index * 100} className="flex">
              <div className="bg-card rounded-xl p-6 border border-border home-card shadow-soft hover:shadow-strong hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-destructive/15 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{problem.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
