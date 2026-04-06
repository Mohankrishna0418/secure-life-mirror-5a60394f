import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">S</span>
              </div>
              <span className="text-lg font-display font-bold">Vigneshwara Safety Nets</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional safety net installation for homes and commercial spaces. Your trusted partner for complete safety solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-background">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services/pigeon-nets" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-background">Services</h4>
            <ul className="space-y-2">
              {[
                { name: "Pigeon Nets", path: "/services/pigeon-nets" },
                { name: "Balcony Nets", path: "/services/balcony-nets" },
                { name: "Invisible Grills", path: "/services/invisible-grills" },
                { name: "Bird Spikes", path: "/services/bird-spikes" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-background">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">Hospet, T B Dam , Karnataka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919449225472" className="text-muted-foreground hover:text-primary transition-colors text-sm">+91 9449225472</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@vigneshwarasafetynets.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">info@vigneshwarasafetynets.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-muted/20">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Vigneshwara Safety Nets. All rights reserved.</p>
          <div className="flex gap-5 text-xs">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
