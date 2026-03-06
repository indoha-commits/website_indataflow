import { useEffect, useState } from "react";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import { Package, FileCheck, Users, TrendingUp } from "lucide-react";

const metrics = [
  { 
    icon: Package, 
    label: "Shipments Tracked", 
    value: 2847,
    suffix: "+"
  },
  { 
    icon: FileCheck, 
    label: "Documents Processed", 
    value: 12459,
    suffix: "+"
  },
  { 
    icon: Users, 
    label: "Active Users", 
    value: 156,
    suffix: ""
  },
  { 
    icon: TrendingUp, 
    label: "Avg. Time Saved", 
    value: 68,
    suffix: "%"
  },
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export function LiveMetrics() {
  return (
    <section className="section-padding bg-background border-y border-border">
      <div className="container-wide">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Live Operations</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Real logistics happening right now
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <ScrollAnimation key={metric.label} animation="fade-up" delay={index * 100}>
              <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountUp end={metric.value} />
                  {metric.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
