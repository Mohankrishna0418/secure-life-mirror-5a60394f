import { Baby } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const ChildSafetyNets = () => (
  <ServicePageTemplate
    icon={<Baby className="w-3.5 h-3.5" />}
    badge="Child Safety Nets"
    title="Child Safety Net Solutions"
    subtitle="Childproof your home with our premium safety nets for complete peace of mind."
    description="Specially designed for homes with young children, our child safety nets meet international safety standards. The tight mesh pattern prevents even small fingers from getting through."
    features={[
      "Meets international child safety standards",
      "Tight mesh prevents finger entrapment",
      "Tamper-proof installation",
      "Soft material won't harm children",
      "Available in multiple colors",
      "Easy to open for emergency access",
    ]}
    cards={[
      { title: "Balcony Railings", desc: "Secure gaps in balcony rails" },
      { title: "Windows", desc: "Prevent climbing accidents" },
      { title: "Staircases", desc: "Block staircase access safely" },
      { title: "Loft Areas", desc: "Safety for mezzanine and loft spaces" },
      { title: "Play Areas", desc: "Secure indoor play zones" },
      { title: "Roof Access", desc: "Block access to roof areas" },
    ]}
    cardsTitle="Applications"
    cardsSubtitle="Where We Install Child Safety Nets"
  />
);

export default ChildSafetyNets;
