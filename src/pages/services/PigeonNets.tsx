import { Bird } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import grillsBg from "../../assets/pigeon-nets.jpg";

const PigeonNets = () => (
  <ServicePageTemplate
    bgImage={grillsBg}
    icon={<Bird className="w-3.5 h-3.5" />}
    badge="Pigeon Safety Nets"
    title="Premium Pigeon & Bird Safety Nets"
    subtitle="Keep pigeons away from balconies, windows & terraces without blocking your view."
    description="Our pigeon nets are made from high-density polyethylene (HDPE) that is UV-stabilized and weather-resistant. The transparent design ensures unobstructed views while keeping birds away."
    features={[
      "100% protection from pigeons and birds",
      "UV-resistant and weatherproof material",
      "Transparent and barely visible",
      "Non-toxic and safe for birds",
      "5+ years durability guaranteed",
      "Easy maintenance and cleaning",
    ]}
    cards={[
      { title: "Balconies", desc: "Keep your balcony clean and bird-free" },
      { title: "Windows", desc: "Prevent birds from entering through windows" },
      { title: "Terraces", desc: "Protect your terrace garden and furniture" },
      { title: "Duct Areas", desc: "Cover AC ducts and utility areas" },
      { title: "Parking Areas", desc: "Protect vehicles from bird droppings" },
      { title: "Warehouses", desc: "Industrial-grade protection for large spaces" },
    ]}
    cardsTitle="Applications"
    cardsSubtitle="Where We Install Pigeon Nets"
  />
);

export default PigeonNets;
