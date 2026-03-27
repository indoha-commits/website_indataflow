import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedHeaderBackground } from "@/components/ui/animated-header-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroImages = [
  "/header4.png",
  "/HEADER2.jpeg",
  "/header.png",
  "/HEADER3.jpeg",
];

export function HeroSection() {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);
  return (
    <section className="section-padding pb-8 relative overflow-hidden bg-background home-theme hero-glow grid-bg">
      <AnimatedHeaderBackground />
      {/* Glow orb behind headline */}
      <div
        className="absolute top-[16%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] animate-glow pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--home-blue) / 0.15) 0%, transparent 70%)" }}
      />
      <div className="container-wide relative">
        <div className="max-w-5xl mx-auto text-center mb-4 sm:mb-6 md:mb-7 px-0 relative">
          <div
            className="absolute inset-0 -z-10 opacity-80"
            style={{
              background:
                'radial-gradient(circle at top, rgba(37, 99, 235, 0.25) 0%, transparent 65%)',
            }}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-up text-foreground">
            Operations and client transparency for port-to-warehouse logistics.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 animate-fade-up animation-delay-100">
            InDataFlow is the operating system logistics teams use daily to manage cargo, documents, milestones, and client visibility — from first entry to final delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-200">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                See how it fits your operation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-secondary" size="xl">
                Request access
              </Button>
            </Link>
          </div>
        </div>

        {/* Header Image Carousel */}
        <div className="relative max-w-7xl mx-auto animate-fade-up animation-delay-300">
          <div
            className="relative overflow-hidden"
            style={{
              border: '1px solid rgba(37, 99, 235, 0.35)',
              borderRadius: '12px',
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.05), 0 0 60px rgba(37, 99, 235, 0.15), 0 24px 64px rgba(0,0,0,0.6)',
            }}
          >
            <Carousel
              className="w-full"
              opts={{ loop: true }}
              setApi={setApi}
            >
              <CarouselContent>
                {heroImages.map((src, index) => (
                  <CarouselItem key={src}>
                    <img
                      src={src}
                      alt={`InDataFlow operations preview ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
