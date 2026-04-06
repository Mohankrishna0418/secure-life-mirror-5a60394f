import { Fence } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import grillsBg from "../../assets/gallery/bird-spikes-1.jpeg";

const BirdSpikes = () => (
  <ServicePageTemplate
    bgImage={grillsBg}
    icon={<Fence className="w-3.5 h-3.5" />}
    badge="Bird Spikes"
    title="Humane Bird Spike Solutions"
    subtitle="Effective, humane bird deterrent for ledges, parapets, and building exteriors."
    description="Our bird spikes are a humane way to prevent birds from roosting on your property. Made from durable stainless steel or polycarbonate, they are virtually invisible from a distance and don't harm birds."
    features={[
      "100% humane — doesn't harm birds",
      "Stainless steel or polycarbonate options",
      "UV-resistant and weatherproof",
      "Easy to install on any surface",
      "Virtually invisible from ground level",
      "Maintenance-free solution",
    ]}
    cards={[
      { title: "Ledges", desc: "Prevent roosting on window ledges" },
      { title: "Parapets", desc: "Protect building parapets and edges" },
      { title: "AC Units", desc: "Keep birds off outdoor AC units" },
      { title: "Signage", desc: "Protect commercial signage" },
      { title: "Solar Panels", desc: "Prevent nesting under panels" },
      { title: "Gutters", desc: "Keep gutters clean and clear" },
    ]}
    cardsTitle="Applications"
    cardsSubtitle="Where We Install Bird Spikes"
    warranty="3 Year Warranty"
  />
);

export default BirdSpikes;
