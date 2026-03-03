import { Award, Users, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Award, title: "10+ Years Experience", desc: "A decade of expertise in premium safety net installations." },
  { icon: Shield, title: "Premium Materials", desc: "UV-resistant, weatherproof materials that last for years." },
  { icon: Users, title: "10,000+ Installs", desc: "Trusted by thousands across India." },
  { icon: Clock, title: "Same Day Service", desc: "Quick turnaround within 24-48 hours." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-xs uppercase tracking-widest mb-3 block">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Your Trusted Partner for <span className="text-primary">Complete Safety</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We combine quality materials with professional installation to deliver safety solutions you can rely on.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 rounded-md gradient-primary flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-0.5">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-xl border border-border p-8 shadow-card"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "10K+", label: "Happy Customers" },
                { val: "10+", label: "Cities" },
                { val: "7+", label: "Products" },
                { val: "4.8/5", label: "Rating" },
              ].map((s) => (
                <div key={s.label} className="text-center py-4">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">{s.val}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
