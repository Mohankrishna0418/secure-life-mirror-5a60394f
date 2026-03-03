import { Target } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const SportsNets = () => (
  <ServicePageTemplate
    icon={<Target className="w-3.5 h-3.5" />}
    badge="Sports Nets"
    title="Professional Sports Nets"
    subtitle="High-quality sports nets for cricket, football, badminton, and more."
    description="Our sports nets are designed for professional and recreational use. Made from heavy-duty nylon with reinforced edges, they withstand intense impact and outdoor conditions."
    features={[
      "Heavy-duty nylon construction",
      "Reinforced edges and corners",
      "UV-resistant for outdoor use",
      "Available in multiple mesh sizes",
      "Custom sizes available",
      "Professional-grade durability",
    ]}
    cards={[
      { title: "Cricket Nets", desc: "Practice nets for batting and bowling" },
      { title: "Football Goals", desc: "Goal nets for football fields" },
      { title: "Badminton Courts", desc: "Court dividers and boundary nets" },
      { title: "Tennis Courts", desc: "Boundary and practice nets" },
      { title: "Swimming Pools", desc: "Safety nets for pool areas" },
      { title: "Golf Ranges", desc: "Driving range containment nets" },
    ]}
    cardsTitle="Applications"
    cardsSubtitle="Sports We Cover"
  />
);

export default SportsNets;
