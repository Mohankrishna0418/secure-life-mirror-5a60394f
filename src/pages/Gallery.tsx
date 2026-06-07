import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";

import birdSpikes1 from "@/assets/gallery/bird-spikes-1.jpeg";
import birdSpikes2 from "@/assets/gallery/bird-spikes-2.jpeg";
import birdSpikes3 from "@/assets/gallery/bird-spikes-3.jpeg";
import birdSpikes4 from "@/assets/gallery/bird-spikes-4.jpeg";
import birdSpikes5 from "@/assets/gallery/bird-spikes-5.jpeg";
import sportsNets1 from "@/assets/gallery/sports-nets-1.jpeg";
import sportsNets2 from "@/assets/gallery/sports-nets-2.jpeg";
import sportsNets3 from "@/assets/gallery/sports-nets-3.jpeg";
import sportsNets4 from "@/assets/gallery/sports-nets-4.jpeg";
import sportsNets5 from "@/assets/gallery/sports-nets-5.jpeg";
import balconyNets1 from "@/assets/gallery/balcony-nets-1.jpeg";
import balconyNets2 from "@/assets/gallery/balcony-nets-2.jpeg";
import balconyNets3 from "@/assets/gallery/balcony-nets-3.jpeg";
import balconyNets4 from "@/assets/gallery/balcony-nets-4.jpeg";
import balconyNets5 from "@/assets/gallery/balcony-nets-5.jpeg";
import balconyNets6 from "@/assets/gallery/balcony-nets-6.jpeg";
import balconyNets7 from "@/assets/gallery/balcony-nets-7.jpeg";
import balconyNets8 from "@/assets/gallery/balcony-nets-8.jpeg";
import safetyNets1 from "@/assets/gallery/safety-nets-1.jpeg";
import safetyNets2 from "@/assets/gallery/safety-nets-2.jpeg";
import safetyNets3 from "@/assets/gallery/safety-nets-3.jpeg";
import safetyNets4 from "@/assets/gallery/safety-nets-4.jpeg";
import safetyNets5 from "@/assets/gallery/safety-nets-5.jpeg";
import safetyNets6 from "@/assets/gallery/safety-nets-6.jpeg";
import pigeonNets1 from "@/assets/gallery/pigeon-nets-1.jpeg";
import invisibleGrills1 from "@/assets/gallery/invisible-grills-1.jpeg";
import invisibleGrills2 from "@/assets/gallery/invisible-grills-2.jpeg";
import invisibleGrills3 from "@/assets/gallery/invisible-grills-3.jpeg";
import invisibleGrills4 from "@/assets/gallery/invisible-grills-4.jpeg";
import invisibleGrills5 from "@/assets/gallery/invisible-grills-5.jpeg";
import heroBg from "@/assets/hero-bg1.jpeg";

const categories = [
  "All",
  "Bird Spikes",
  "Sports Nets",
  "Balcony Nets",
  "Safety Nets",
  "Pigeon Nets",
  "Invisible Grills",
] as const;

const images = [
  {
    src: birdSpikes1,
    category: "Bird Spikes",
    alt: "Bird spikes installation",
  },
  { src: birdSpikes2, category: "Bird Spikes", alt: "Bird spikes on ledge" },
  { src: birdSpikes3, category: "Bird Spikes", alt: "Bird spikes on building" },
  { src: birdSpikes4, category: "Bird Spikes", alt: "Bird spikes close-up" },
  { src: birdSpikes5, category: "Bird Spikes", alt: "Bird spikes product" },
  {
    src: sportsNets1,
    category: "Sports Nets",
    alt: "Cricket net installation",
  },
  { src: sportsNets2, category: "Sports Nets", alt: "Sports net enclosure" },
  { src: sportsNets3, category: "Sports Nets", alt: "Green sports net" },
  { src: sportsNets4, category: "Sports Nets", alt: "Sports net side view" },
  { src: sportsNets5, category: "Sports Nets", alt: "Cricket practice net" },
  { src: balconyNets1, category: "Balcony Nets", alt: "Balcony safety net" },
  { src: balconyNets2, category: "Balcony Nets", alt: "Balcony net close-up" },
  { src: balconyNets3, category: "Balcony Nets", alt: "High-rise balcony net" },
  { src: balconyNets4, category: "Balcony Nets", alt: "Balcony net exterior" },
  { src: balconyNets5, category: "Balcony Nets", alt: "Balcony net city view" },
  {
    src: balconyNets6,
    category: "Balcony Nets",
    alt: "Balcony net front view",
  },
  {
    src: balconyNets7,
    category: "Balcony Nets",
    alt: "Balcony net skyline view",
  },
  {
    src: balconyNets8,
    category: "Balcony Nets",
    alt: "Multi-floor balcony nets",
  },
  { src: safetyNets1, category: "Safety Nets", alt: "Staircase safety net" },
  { src: safetyNets2, category: "Safety Nets", alt: "Staircase net top view" },
  {
    src: safetyNets3,
    category: "Safety Nets",
    alt: "Safety net strength test",
  },
  { src: safetyNets4, category: "Safety Nets", alt: "Rappelling installation" },
  {
    src: safetyNets5,
    category: "Safety Nets",
    alt: "Safety net installation team",
  },
  { src: safetyNets6, category: "Safety Nets", alt: "Duct area safety net" },
  { src: pigeonNets1, category: "Pigeon Nets", alt: "Pigeon net on vents" },
  {
    src: invisibleGrills1,
    category: "Invisible Grills",
    alt: "Invisible grill night view",
  },
  {
    src: invisibleGrills2,
    category: "Invisible Grills",
    alt: "Invisible grill balcony",
  },
  {
    src: invisibleGrills3,
    category: "Invisible Grills",
    alt: "Invisible grill with plants",
  },
  {
    src: invisibleGrills4,
    category: "Invisible Grills",
    alt: "Invisible grill evening",
  },
  {
    src: invisibleGrills5,
    category: "Invisible Grills",
    alt: "Invisible grill high-rise",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "All" ? images : images.filter((img) => img.category === filter);

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
              Our Work
            </h1>

            <p className="text-white/80">
              Browse through our completed installations across bird spikes,
              sports nets, and safety nets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
