import { Grid3X3 } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const InvisibleGrills = () => (
  <ServicePageTemplate
    icon={<Grid3X3 className="w-3.5 h-3.5" />}
    badge="Invisible Grills"
    title="Invisible Grill Solutions"
    subtitle="Maximum safety with unobstructed views — the modern alternative to traditional grills."
    description="Our invisible grills use high-tensile stainless steel cables that provide excellent fall protection while maintaining the aesthetic beauty of your home. They replace bulky iron grills with sleek, nearly invisible safety barriers."
    features={[
      "316-grade stainless steel cables",
      "Can withstand 250+ kg load per cable",
      "Corrosion-resistant and rust-proof",
      "Maintains unobstructed views",
      "Modern, sleek appearance",
      "10-year warranty on materials",
    ]}
    cards={[
      { title: "Balconies", desc: "Replace ugly iron grills beautifully" },
      { title: "Windows", desc: "Safety without blocking light" },
      { title: "Staircases", desc: "Modern railing alternatives" },
      { title: "Terraces", desc: "Panoramic views with safety" },
      { title: "Villas", desc: "Premium solutions for luxury homes" },
      { title: "Offices", desc: "Professional safety for workspaces" },
    ]}
    cardsTitle="Applications"
    cardsSubtitle="Where We Install Invisible Grills"
    warranty="10 Year Warranty"
  />
);

export default InvisibleGrills;
