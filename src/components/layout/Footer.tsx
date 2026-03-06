import { Link } from "react-router-dom";
import logoImage from "@/assets/indataflow-logo.png";

const footerLinks = {
  product: [
    { name: "Product", href: "/product" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Case Study", href: "/case-study" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="text-foreground relative overflow-hidden" style={{ background: 'var(--gradient-cta)' }}>
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src={logoImage} alt="InDataFlow" className="h-14 w-auto brightness-0 invert home-logo" />
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed">
              The operating system for port-to-warehouse logistics operations.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-foreground">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-foreground">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-foreground">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-12 pt-8">
          <p className="text-center text-sm text-foreground/80 font-medium mb-6">
            Built from real cargo operations — not theoretical workflows.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} InDataFlow. All rights reserved.
            </p>
            <p className="text-sm text-foreground/60">
              Built for logistics operators who need control, not complexity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
