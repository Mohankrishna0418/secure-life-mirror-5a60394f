import { Home } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const BalconyNets = () => (
  <ServicePageTemplate
    icon={<Home className="w-3.5 h-3.5" />}
    badge="Balcony Safety Nets"
    title="Premium Balcony Safety Nets"
    subtitle="Prevent accidental falls with our durable, transparent balcony safety nets."
    description="Our balcony safety nets provide reliable fall protection for high-rise apartments. Made from high-tensile nylon, they are strong enough to hold significant weight while remaining virtually invisible."
    features={[
      "High-tensile strength nylon material",
      "Can withstand up to 500 kg load",
      "UV-resistant and all-weather proof",
      "Transparent design preserves views",
      "Custom-fitted to any balcony shape",
      "Professional installation in 2-3 hours",
    ]}
    cards={[
      { title: "High-Rise Apartments", desc: "Essential safety for upper floors" },
      { title: "Duplex Balconies", desc: "Full coverage for multi-level spaces" },
      { title: "Open Terraces", desc: "Secure open areas safely" },
      { title: "Staircases", desc: "Prevent falls on open staircases" },
      { title: "Swimming Pools", desc: "Safety coverage for pool areas" },
      { title: "Construction Sites", desc: "Temporary safety barriers" },
    ]}
    cardsTitle="Applications"
    cardsSubtitle="Where We Install Balcony Nets"
  />
);

export default BalconyNets;
