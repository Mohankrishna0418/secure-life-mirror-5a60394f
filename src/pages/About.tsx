import { motion } from "framer-motion";
import {Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";
import heroBg from "@/assets/hero-bg1.jpeg";

const About = () => {
  return (
    <Layout>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-10 right-6 z-50 flex flex-col gap-3">
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
              installation, and reliable service that customers can trust. We
              focus on making homes safer while maintaining the beauty and
              openness of your living spaces.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
