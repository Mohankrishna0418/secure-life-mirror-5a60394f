import { Link } from "react-router-dom";
import { ReactNode } from "react";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";

interface ServicePageProps {
  icon: ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cards: { title: string; desc: string }[];
  cardsTitle: string;
  cardsSubtitle: string;
  warranty?: string;
  bgImage?: string;
}

const ServicePageTemplate = ({
  icon,
  badge,
  title,
  subtitle,
  description,
  features,
  cards,
  cardsTitle,
  cardsSubtitle,
  warranty,
  bgImage = "5 Year Warranty",
}: ServicePageProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button - Left aligned */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-white font-medium text-xs uppercase tracking-widest mb-3 block">
              {badge}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>

            <p className="text-white/80 mb-6">{subtitle}</p>

            <Link to="/contact">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Get Free Quote <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-xs uppercase tracking-widest mb-3 block">
                Features
              </span>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Why Choose Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {description}
              </p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { icon: Shield, title: warranty, desc: "Guaranteed" },
                { icon: Clock, title: "Quick Install", desc: "Same day" },
                { icon: Award, title: "Premium", desc: "Best quality" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-lg p-4 border border-border shadow-card text-center"
                >
                  <div className="w-10 h-10 mx-auto gradient-primary rounded-md flex items-center justify-center mb-2">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground text-xs mb-0.5">
                    {item.title}
                  </h4>
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
              {cardsTitle}
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              {cardsSubtitle}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="bg-card rounded-lg p-4 border border-border shadow-card hover:shadow-card-hover transition-shadow h-full">
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                    {c.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicePageTemplate;
