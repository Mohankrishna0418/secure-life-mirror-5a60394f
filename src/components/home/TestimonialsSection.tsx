import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { id: 1, name: "Amit Patel", role: "Mumbai", content: "Excellent pigeon net installation! Professional team, completed in 3 hours. No more pigeon problems — 2 years and zero issues.", rating: 5 },
  { id: 2, name: "Priya Sharma", role: "Bangalore", content: "Got balcony safety nets for my kids. The invisible grills look elegant and give complete peace of mind. Highly recommend!", rating: 5 },
  { id: 3, name: "Rahul Verma", role: "Pune", content: "My cats love the balcony now! Pet safety net is strong and barely visible. Great quality and professional installation.", rating: 5 },
  { id: 4, name: "Sneha Reddy", role: "Hyderabad", content: "Sports nets for our backyard cricket area. Top-notch quality, perfect installation. Kids practice every day!", rating: 5 },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-medium text-xs uppercase tracking-widest mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">What Customers Say</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="bg-card rounded-xl border border-border p-8 shadow-card"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonials[idx].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{testimonials[idx].content}"</p>
              <div>
                <div className="font-display font-semibold text-foreground text-sm">{testimonials[idx].name}</div>
                <div className="text-xs text-muted-foreground">{testimonials[idx].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-3 mt-6">
            <Button variant="outline" size="icon" className="rounded-full w-8 h-8" onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>
            <Button variant="outline" size="icon" className="rounded-full w-8 h-8" onClick={() => setIdx((idx + 1) % testimonials.length)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
