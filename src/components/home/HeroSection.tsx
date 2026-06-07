import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg1.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Floating Action Buttons */}
      <div className="fixed top-20 right-6 z-50 flex flex-col gap-3">
        {/* Call Button */}
        <a
          href="tel:+919611565755"
          className="bg-red-600 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Call"
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919611565755"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.26 4.89L2 22l5.25-1.37A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.82 14.24c-.24.67-1.39 1.28-1.91 1.36-.49.08-1.12.11-1.81-.11-.42-.14-.96-.31-1.66-.61-2.92-1.26-4.83-4.21-4.98-4.41-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.27-.29.58-.36.77-.36.19 0 .39 0 .56.01.18.01.42-.07.66.51.24.58.81 1.99.88 2.14.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.37-.44.49-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.13 1.18 1.04 2.18 1.37 2.49 1.53.31.15.49.13.67-.08.18-.2.78-.91.99-1.22.2-.31.41-.26.69-.15.29.1 1.82.86 2.13 1.02.31.15.51.23.58.36.07.12.07.73-.17 1.4z" />
          </svg>
        </a>
      </div>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-white px-3 py-1.5 rounded-full text-xs font-medium mb-6 border border-primary/30 backdrop-blur-sm">
              <CheckCircle className="w-3.5 h-3.5" />
              10,000+ Installations Completed
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-5">
              Safety Nets That
              <br />
              <span className="text-secondary">Protect What Matters</span>
            </h1>

            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Professional installation of pigeon nets, balcony safety nets,
              invisible grills & more. Durable, barely visible, and built to
              last.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium w-full sm:w-auto"
                >
                  Get Free Quote <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <a href="tel:+919611565755">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-black bg-white hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 mr-1.5" /> Call Now
                </Button>
              </a>
            </div>

            <div className="flex gap-10 mt-12 pt-8 border-t border-white/15">
              {[
                { val: "10+", label: "Years" },
                { val: "10K+", label: "Installs" },
                { val: "4.8★", label: "Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-display font-bold text-secondary">
                    {s.val}
                  </div>
                  <div className="text-xs text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
