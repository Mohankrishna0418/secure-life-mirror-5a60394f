import { Link } from "react-router-dom";
import { ArrowRight, Bird, Home, Baby, Dog, Grid3X3, Target, Fence } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Bird, title: "Pigeon Nets", desc: "Keep pigeons away from balconies, windows & terraces.", link: "/services/pigeon-nets", image: "/images/pigeon-nets.jpg" },
  { icon: Home, title: "Balcony Nets", desc: "Prevent falls with high-quality balcony safety nets.", link: "/services/balcony-nets", image: "/images/balcony-nets.jpg" },
  { icon: Baby, title: "Child Safety", desc: "Childproof windows, balconies & staircases.", link: "/services/child-safety-nets", image: "/images/child-safety-nets.jpg" },
  { icon: Dog, title: "Pet Safety", desc: "Keep pets safe from balcony & terrace falls.", link: "/services/pet-safety-nets", image: "/images/pet-safety-nets.jpg" },
  { icon: Grid3X3, title: "Invisible Grills", desc: "Unobstructed views with maximum safety.", link: "/services/invisible-grills", image: "/images/invisible-grills.jpg" },
  { icon: Target, title: "Sports Nets", desc: "Professional-grade nets for sports facilities.", link: "/services/sports-nets", image: "/images/sports-nets.jpg" },
  { icon: Fence, title: "Bird Spikes", desc: "Humane bird deterrent for ledges & parapets.", link: "/services/bird-spikes", image: "/images/bird-spikes.jpg" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-medium text-xs uppercase tracking-widest mb-3 block">Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">What We Offer</h2>
          <p className="text-muted-foreground">Complete range of safety solutions for homes, apartments & commercial spaces.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={s.link} className="group block bg-card rounded-lg border border-border overflow-hidden hover:shadow-card-hover hover:border-primary/30 transition-all">
                <div className="h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-semibold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center text-xs font-medium text-primary group-hover:gap-2 gap-1 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
