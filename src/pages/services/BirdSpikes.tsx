import { Fence, Phone } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import grillsBg from "../../assets/gallery/bird-spikes-1.jpeg";

const BirdSpikes = () => (
  <>
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
    {/* Floating Action Buttons */}
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a
        href="tel:+919611565755"
        className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Call"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919611565755"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.26 4.89L2 22l5.25-1.37A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.82 14.24c-.24.67-1.39 1.28-1.91 1.36-.49.08-1.12.11-1.81-.11-.42-.14-.96-.31-1.66-.61-2.92-1.26-4.83-4.21-4.98-4.41-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.27-.29.58-.36.77-.36.19 0 .39 0 .56.01.18.01.42-.07.66.51.24.58.81 1.99.88 2.14.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.37-.44.49-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.13 1.18 1.04 2.18 1.37 2.49 1.53.31.15.49.13.67-.08.18-.2.78-.91.99-1.22.2-.31.41-.26.69-.15.29.1 1.82.86 2.13 1.02.31.15.51.23.58.36.07.12.07.73-.17 1.4z" />
        </svg>
      </a>
    </div>
  </>
);

export default BirdSpikes;
