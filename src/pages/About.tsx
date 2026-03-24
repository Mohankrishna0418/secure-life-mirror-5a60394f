import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Shield,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";
import heroBg from "@/assets/hero-bg.jpeg";

const values = [
  {
    icon: Shield,
    title: "Quality First",
    desc: "We never compromise on material quality.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Your family's safety is our top priority.",
  },
  {
    icon: Award,
    title: "Professional Service",
    desc: "Trained teams ensure precise fitting.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Building lasting relationships through reliable service.",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Founded",
    desc: "Started with a vision for quality safety solutions",
  },
  {
    year: "2017",
    title: "1,000 Installations",
    desc: "First major milestone achieved",
  },
  {
    year: "2020",
    title: "Expanded Services",
    desc: "Added invisible grills and bird spikes",
  },
  {
    year: "2022",
    title: "Pan-India Presence",
    desc: "Expanded to 10+ major cities",
  },
  {
    year: "2024",
    title: "10,000+ Installations",
    desc: "Protecting homes and businesses nationwide",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="relative py-24 flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              About Us
            </h1>

            <p className="text-white/80">
              Over 10 years dedicated to protecting homes with premium safety
              solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-xs uppercase tracking-widest mb-3 block">
                Our Story
              </span>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Making Homes Safer, One Install at a Time
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2014 in Mumbai, SafetyNets Pro has grown to become
                one of India's most trusted safety solution providers. We
                started with pigeon nets and now offer a complete range
                including invisible grills, child safety nets, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to premium materials and professional
                installation has earned us the trust of thousands.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Target,
                  title: "Mission",
                  desc: "Premium safety solutions for every Indian home.",
                },
                {
                  icon: Eye,
                  title: "Vision",
                  desc: "India's most trusted safety solutions provider.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-lg p-5 shadow-card border border-border text-center"
                >
                  <div className="w-12 h-12 mx-auto gradient-primary rounded-md flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-medium text-xs uppercase tracking-widest mb-3 block">
              Values
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground">
              What We Stand For
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-lg p-5 shadow-card border border-border text-center hover:shadow-card-hover transition-shadow"
              >
                <div className="w-11 h-11 mx-auto gradient-primary rounded-md flex items-center justify-center mb-3">
                  <v.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                  {v.title}
                </h3>
                <p className="text-xs text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-medium text-xs uppercase tracking-widest mb-3 block">
              Journey
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground">
              Our Milestones
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-card rounded-lg p-5 border border-border shadow-card"
              >
                <span className="text-xl font-display font-bold text-primary shrink-0 w-14">
                  {m.year}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm">
                    {m.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">
            Why Customers Trust Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {[
              "Premium UV-resistant materials with warranty",
              "Professional installation by trained experts",
              "Free site inspection and measurement",
              "Same-day service for urgent needs",
              "Transparent pricing, no hidden charges",
              "Free maintenance for the first year",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 bg-card rounded-lg p-3.5 border border-border"
              >
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
