import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";
import heroBg from "@/assets/hero-bg1.jpeg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h1>

            <p className="text-white/80">
              Providing reliable safety net solutions to protect homes,
              balconies, and open spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Who We Are
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We specialize in providing high-quality safety net solutions for
              homes, apartments, and commercial spaces. Our services include
              pigeon safety nets, balcony safety nets, invisible grills, and
              child safety nets designed to enhance safety and comfort.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our goal is to deliver durable materials, professional
              installation, and reliable service that customers can trust.
              We focus on making homes safer while maintaining the beauty
              and openness of your living spaces.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;