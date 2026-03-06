import { CheckCircle, Users, LayoutDashboard, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const internalFeatures = [
  "Complete cargo lifecycle control",
  "Document validation and verification",
  "Milestone tracking with timestamps",
  "Full activity and audit trail",
];

const clientFeatures = [
  "Real-time shipment visibility",
  "Secure document upload portal",
  "Transparent status updates",
  "Fewer calls, fewer disputes",
];

const internalScreens = [
  { title: "Dashboard Overview", description: "Track all active shipments with real-time status updates" },
  { title: "Document Management", description: "Upload, validate, and organize all cargo documentation" },
  { title: "Milestone Tracking", description: "Monitor every step of the cargo lifecycle with timestamps" },
  { title: "Activity Log", description: "Complete audit trail of all operations and changes" },
];

const clientScreens = [
  { title: "Shipment Status", description: "Real-time visibility into your cargo's journey" },
  { title: "Document Portal", description: "Securely upload and access all shipment documents" },
  { title: "Timeline View", description: "Visual progress tracking from origin to destination" },
  { title: "Notifications", description: "Stay updated with automatic status alerts" },
];

export function SolutionSection() {
  const [openModal, setOpenModal] = useState<"internal" | "client" | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentScreens = openModal === "internal" ? internalScreens : clientScreens;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? currentScreens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === currentScreens.length - 1 ? 0 : prev + 1));
  };

  const handleOpen = (type: "internal" | "client") => {
    setOpenModal(type);
    setActiveIndex(0);
  };

  return (
    <section className="section-padding relative overflow-hidden home-theme" style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--card)) 50%, hsl(var(--background)) 100%)' }}>
      <div className="container-wide">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              One system for internal operations and client visibility.
            </h2>
            <p className="text-lg text-muted-foreground">
              "A shared source of truth across your entire cargo operation — without exposing internal complexity."
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Internal Operations */}
          <ScrollAnimation animation="slide-left" className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Internal Operations Dashboard</h3>
            </div>
            
            {/* Clickable Screenshot */}
            <button
              onClick={() => handleOpen("internal")}
              className="w-full max-w-[600px] mx-auto aspect-[2/1] bg-muted/50 rounded-xl border border-border home-card mb-6 overflow-hidden group cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 relative"
            >
              <InternalDashboardMockup />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Click to explore
                </span>
              </div>
            </button>
            
            <ul className="space-y-3 flex-grow">
              {internalFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>

          {/* Client Dashboard */}
          <ScrollAnimation animation="slide-right" delay={100} className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Client Dashboard</h3>
            </div>
            
            {/* Clickable Screenshot */}
            <button
              onClick={() => handleOpen("client")}
              className="w-full max-w-[600px] mx-auto aspect-[2/1] bg-muted/50 rounded-xl border border-border home-card mb-6 overflow-hidden group cursor-pointer transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 relative"
            >
              <ClientDashboardMockup />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Click to explore
                </span>
              </div>
            </button>
            
            <ul className="space-y-3 flex-grow">
              {clientFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>
        </div>
      </div>

      {/* Expanded Modal */}
      <Dialog open={openModal !== null} onOpenChange={() => setOpenModal(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background border-border overflow-hidden [&>button]:hidden">
          <VisuallyHidden>
            <DialogTitle>
              {openModal === "internal" ? "Internal Operations Dashboard" : "Client Dashboard"} Preview
            </DialogTitle>
          </VisuallyHidden>
          
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  openModal === "internal" ? "bg-primary" : "bg-accent"
                }`}>
                  {openModal === "internal" ? (
                    <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <Users className="w-4 h-4 text-accent-foreground" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">
                    {openModal === "internal" ? "Internal Operations" : "Client Dashboard"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {currentScreens[activeIndex]?.title}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpenModal(null)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center p-6 bg-muted/30 relative overflow-hidden">
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 z-10 p-3 rounded-full bg-background border border-border home-card shadow-lg hover:bg-muted transition-colors"
                aria-label="Previous screen"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div
                className={`w-full max-w-3xl rounded-xl border border-border home-card shadow-2xl overflow-hidden bg-card ${
                  openModal === "internal"
                    ? activeIndex === 1 || activeIndex === 3
                      ? "aspect-[3836/2146]"
                      : activeIndex === 2
                        ? "aspect-[3244/1846]"
                        : "aspect-[3634/1840]"
                    : activeIndex === 0
                      ? "aspect-[2856/2150]"
                      : "aspect-[3466/1846]"
                }`}
              >
                {openModal === "internal" ? (
                  <ExpandedInternalMockup screenIndex={activeIndex} />
                ) : (
                  <ExpandedClientMockup screenIndex={activeIndex} />
                )}
              </div>

              <button
                onClick={handleNext}
                className="absolute right-4 z-10 p-3 rounded-full bg-background border border-border home-card shadow-lg hover:bg-muted transition-colors"
                aria-label="Next screen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Footer with dots and description */}
            <div className="p-4 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">
                {currentScreens[activeIndex]?.description}
              </p>
              <div className="flex justify-center gap-2">
                {currentScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeIndex
                        ? openModal === "internal"
                          ? "bg-primary w-6"
                          : "bg-accent w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to screen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function InternalDashboardMockup() {
  return (
    <div className="relative w-full h-full bg-card">
      <img
        src="/internal_dashboard2.png"
        alt="Internal operations dashboard preview"
        className="absolute inset-0 w-full h-full object-contain object-center"
      />
    </div>
  );
}

function ClientDashboardMockup() {
  return (
    <div className="relative w-full h-full bg-card">
      <img
        src="/SECONDTRY.png"
        alt="Client dashboard preview"
        className="absolute inset-0 w-full h-full object-contain object-center"
      />
    </div>
  );
}

function ClientDashboardMockupLegacy() {
  return (
    <div className="w-full h-full p-4 bg-card"></div>
  );
}

function InternalDashboardMockupLegacy() {
  return (
    <div className="w-full h-full p-4 bg-card">
      <div className="flex items-center justify-between mb-4">
        <div className="h-4 w-32 bg-primary/20 rounded"></div>
        <div className="flex gap-2">
          <div className="h-6 w-20 bg-muted rounded"></div>
          <div className="h-6 w-20 bg-accent/30 rounded"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-muted rounded-lg p-3">
            <div className="h-2 w-16 bg-muted-foreground/20 rounded mb-2"></div>
            <div className="h-6 w-12 bg-primary/30 rounded"></div>
          </div>
        ))}
      </div>
      <div className="bg-muted/30 rounded-lg p-3">
        <div className="flex gap-2 mb-3">
          {['Active', 'Pending', 'Completed'].map((tab, i) => (
            <div key={tab} className={`h-6 px-3 rounded text-xs flex items-center ${i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              {tab}
            </div>
          ))}
        </div>
        {[1, 2, 3].map((row) => (
          <div key={row} className="flex items-center gap-3 py-2 border-t border-border/50">
            <div className="h-3 w-20 bg-muted rounded"></div>
            <div className="h-3 w-28 bg-muted rounded"></div>
            <div className="h-3 w-16 bg-muted rounded"></div>
            <div className="h-5 w-16 bg-accent/30 rounded ml-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpandedInternalMockup({ screenIndex }: { screenIndex: number }) {
  const screens = [
    <img
      key="viewdoc"
      src="/VIEWDOC.png"
      alt="Document review screen"
      className="w-full h-full object-cover"
    />,
    <img
      key="update"
      src="/UPDATE.png"
      alt="Update screen"
      className="w-full h-full object-cover"
    />,
    <img
      key="timeline"
      src="/TIMELINE.png"
      alt="Timeline screen"
      className="w-full h-full object-cover"
    />,
    <img
      key="audit"
      src="/AUDIT.png"
      alt="Audit log screen"
      className="w-full h-full object-cover"
    />,
  ];

  return screens[screenIndex] || screens[0];
}

function ExpandedClientMockup({ screenIndex }: { screenIndex: number }) {
  const screens = [
    <img
      key="c1"
      src="/C_1.png"
      alt="Client dashboard view 1"
      className="w-full h-full object-cover"
    />,
    <img
      key="c2"
      src="/C_2.png"
      alt="Client dashboard view 2"
      className="w-full h-full object-cover"
    />,
    <img
      key="c3"
      src="/C_3.png"
      alt="Client dashboard view 3"
      className="w-full h-full object-cover"
    />,
    <img
      key="c4"
      src="/C_4.png"
      alt="Client dashboard view 4"
      className="w-full h-full object-cover"
    />,
  ];

  return screens[screenIndex] || screens[0];
}
