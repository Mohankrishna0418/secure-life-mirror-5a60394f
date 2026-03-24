import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PigeonNets from "./pages/services/PigeonNets";
import BalconyNets from "./pages/services/BalconyNets";
import ChildSafetyNets from "./pages/services/ChildSafetyNets";
import PetSafetyNets from "./pages/services/PetSafetyNets";
import InvisibleGrills from "./pages/services/InvisibleGrills";
import SportsNets from "./pages/services/SportsNets";
import BirdSpikes from "./pages/services/BirdSpikes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/pigeon-nets" element={<PigeonNets />} />
          <Route path="/services/balcony-nets" element={<BalconyNets />} />
          <Route path="/services/child-safety-nets" element={<ChildSafetyNets />} />
          <Route path="/services/pet-safety-nets" element={<PetSafetyNets />} />
          <Route path="/services/invisible-grills" element={<InvisibleGrills />} />
          <Route path="/services/sports-nets" element={<SportsNets />} />
          <Route path="/services/bird-spikes" element={<BirdSpikes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
