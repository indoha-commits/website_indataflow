import { ReactNode } from "react";
import { AnimatedHeaderBackground } from "@/components/ui/animated-header-background";
import { AnimatedWords } from "@/components/ui/animated-text";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <AnimatedHeaderBackground />
      
      <div className="container-wide relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-foreground" style={{ fontWeight: 750 }}>
            <AnimatedWords text={title} staggerDelay={80} />
          </h1>
          {description && (
            <p className="text-lg text-muted-foreground animate-fade-up animation-delay-100">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
