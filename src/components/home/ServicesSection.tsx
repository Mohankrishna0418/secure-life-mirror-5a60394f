import { Link } from "react-router-dom";
import { ArrowRight, Bird, Home, Baby, Dog, Grid3X3, Target, Fence } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Bird, title: "Pigeon Nets", desc: "Pigeon Safety Nets provide effective protection against birds entering balconies, windows, and open spaces. Made from durable, weather-resistant materials, these nets help maintain hygiene, prevent bird nesting, and keep residential and commercial properties clean and safe.", link: "/services/pigeon-nets", image: "/images/image3.png" },
  { icon: Home, title: "Balcony Nets", desc: "Balcony Safety Nets provide reliable protection for children, pets, and families while maintaining proper ventilation. Made from durable, weather-resistant materials, these nets help prevent accidental falls and keep pigeons away, making balconies safer and cleaner.", link: "/services/balcony-nets", image: "/images/image1.png" },
  { icon: Baby, title: "Child Safety", desc: "Children Safety Nets provide added protection for kids in balconies, windows, staircases, and open spaces. Made from durable materials, these nets help reduce fall risks, offering parents greater peace of mind and creating a safer home environment.", link: "/services/child-safety-nets", image: "/images/image5.png" },
  { icon: Dog, title: "Pet Safety", desc: "Pet Safety Nets provide a secure and protective environment for pets, preventing cats and dogs from accidentally falling or escaping through balconies, windows, and open spaces. Made from durable, high-quality materials, these nets ensure pet safety while allowing fresh air and natural light into your home.", link: "/services/pet-safety-nets", image: "/images/image.png" },
  { icon: Grid3X3, title: "Invisible Grills", desc: "Balcony Invisible Grills offer modern safety and style for residential apartments and homes. Made with strong stainless steel cables, they provide reliable protection for children and pets while maintaining ventilation, natural light, and beautiful balcony views.", link: "/services/invisible-grills", image: "/images/image2.png" },
  { icon: Target, title: "Sports Nets", desc: "Cricket Practice Nets provide a safe and convenient space for players to improve batting, bowling, and fielding skills. Made from durable materials, these nets help contain cricket balls and support regular practice in schools, academies, and sports grounds.", link: "/services/sports-nets", image: "/images/image9.png" },
  { icon: Fence, title: "Bird Spikes", desc: "Bird Spikes provide an effective solution to prevent pigeons and other birds from landing on ledges, rooftops, and window sills. Durable and easy to maintain, they help keep buildings cleaner and protect properties from bird-related mess.", link: "/services/bird-spikes", image: "/images/image8.png" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
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
            <h3 className="font-display font-semibold text-foreground">
              {s.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {s.desc}
          </p>

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
