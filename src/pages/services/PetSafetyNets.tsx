import { Dog } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import grillsBg from "../../assets/pet-safety-nets.jpg";

const PetSafetyNets = () => (
  <ServicePageTemplate
    bgImage={grillsBg}
    icon={<Dog className="w-3.5 h-3.5" />}
    badge="Pet Safety Nets"
    title="Pet Safety Net Solutions"
    subtitle="Keep your furry friends safe with our strong, pet-friendly safety nets."
    description="Our pet safety nets are designed to keep cats, dogs, and other pets safe on balconies and terraces. Made from durable, chew-resistant material that withstands pet activity."
    features={[
      "Chew-resistant and claw-proof material",
      "Safe for all pets — cats, dogs, birds",
      "Strong enough for large breeds",
      "Transparent and barely visible",
      "UV-resistant for outdoor use",
      "Easy to install and remove",
    ]}
    cards={[
      { title: "Balconies", desc: "Let pets enjoy fresh air safely" },
      { title: "Windows", desc: "Prevent cats from jumping out" },
      { title: "Terraces", desc: "Create safe outdoor pet spaces" },
      { title: "Gardens", desc: "Keep pets within boundaries" },
      { title: "Stairs", desc: "Block staircase access for pets" },
      { title: "Play Pens", desc: "Create secure pet play areas" },
    ]}
    cardsTitle="Applications"
    cardsSubtitle="Where We Install Pet Safety Nets"
  />
);

export default PetSafetyNets;
