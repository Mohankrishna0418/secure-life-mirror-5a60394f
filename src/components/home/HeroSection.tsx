import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center gradient-hero overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-px h-40 bg-primary/20 rotate-45" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/15 text-primary-foreground/80 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border border-primary/20">
              <CheckCircle className="w-3.5 h-3.5" />
              10,000+ Installations Completed
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] mb-5">
              Safety Nets That
              <br />
              <span className="text-secondary">Protect What Matters</span>
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-xl leading-relaxed">
              Professional installation of pigeon nets, balcony safety nets, invisible grills & more.
              Durable, barely visible, and built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium w-full sm:w-auto">
                  Get Free Quote <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <a href="tel:+911234567890">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground bg-transparent hover:bg-primary-foreground/5 w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-1.5" /> Call Now
                </Button>
              </a>
            </div>

            <div className="flex gap-10 mt-12 pt-8 border-t border-primary-foreground/10">
              {[
                { val: "10+", label: "Years" },
                { val: "10K+", label: "Installs" },
                { val: "4.8★", label: "Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-display font-bold text-secondary">{s.val}</div>
                  <div className="text-xs text-primary-foreground/50">{s.label}</div>
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
