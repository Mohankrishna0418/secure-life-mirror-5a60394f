import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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

const categories = ["All", "Bird Spikes", "Sports Nets", "Balcony Nets", "Safety Nets", "Pigeon Nets", "Invisible Grills"] as const;

const images = [
  { src: birdSpikes1, category: "Bird Spikes", alt: "Bird spikes installation" },
  { src: birdSpikes2, category: "Bird Spikes", alt: "Bird spikes on ledge" },
  { src: birdSpikes3, category: "Bird Spikes", alt: "Bird spikes on building" },
  { src: birdSpikes4, category: "Bird Spikes", alt: "Bird spikes close-up" },
  { src: birdSpikes5, category: "Bird Spikes", alt: "Bird spikes product" },
  { src: sportsNets1, category: "Sports Nets", alt: "Cricket net installation" },
  { src: sportsNets2, category: "Sports Nets", alt: "Sports net enclosure" },
  { src: sportsNets3, category: "Sports Nets", alt: "Green sports net" },
  { src: sportsNets4, category: "Sports Nets", alt: "Sports net side view" },
  { src: sportsNets5, category: "Sports Nets", alt: "Cricket practice net" },
  { src: balconyNets1, category: "Balcony Nets", alt: "Balcony safety net" },
  { src: balconyNets2, category: "Balcony Nets", alt: "Balcony net close-up" },
  { src: balconyNets3, category: "Balcony Nets", alt: "High-rise balcony net" },
  { src: balconyNets4, category: "Balcony Nets", alt: "Balcony net exterior" },
  { src: balconyNets5, category: "Balcony Nets", alt: "Balcony net city view" },
  { src: balconyNets6, category: "Balcony Nets", alt: "Balcony net front view" },
  { src: balconyNets7, category: "Balcony Nets", alt: "Balcony net skyline view" },
  { src: balconyNets8, category: "Balcony Nets", alt: "Multi-floor balcony nets" },
  { src: safetyNets1, category: "Safety Nets", alt: "Staircase safety net" },
  { src: safetyNets2, category: "Safety Nets", alt: "Staircase net top view" },
  { src: safetyNets3, category: "Safety Nets", alt: "Safety net strength test" },
  { src: safetyNets4, category: "Safety Nets", alt: "Rappelling installation" },
  { src: safetyNets5, category: "Safety Nets", alt: "Safety net installation team" },
  { src: safetyNets6, category: "Safety Nets", alt: "Duct area safety net" },
  { src: pigeonNets1, category: "Pigeon Nets", alt: "Pigeon net on vents" },
  { src: invisibleGrills1, category: "Invisible Grills", alt: "Invisible grill night view" },
  { src: invisibleGrills2, category: "Invisible Grills", alt: "Invisible grill balcony" },
  { src: invisibleGrills3, category: "Invisible Grills", alt: "Invisible grill with plants" },
  { src: invisibleGrills4, category: "Invisible Grills", alt: "Invisible grill evening" },
  { src: invisibleGrills5, category: "Invisible Grills", alt: "Invisible grill high-rise" },
];

const Gallery = () => {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-foreground text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-medium text-xs uppercase tracking-widest mb-3 block">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Gallery</h1>
            <p className="text-white/70 max-w-xl mx-auto">
              Browse through our completed installations across bird spikes, sports nets, and safety nets.
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
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
