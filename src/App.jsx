import { Box, Spinner, Center } from "@chakra-ui/react";
import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

import IntroScreen from "./components/IntroScreen";
import HeroSection from "./components/HeroSection";
import ArgumentsSection from "./components/ArgumentsSection";
import ComoFunciona from "./components/ComoFunciona";
import OriginSection from "./components/OriginSection";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// Lazy load : Leaflet est chargé uniquement quand la section est rendue
const PresencaSection = lazy(() => import("./components/PresencaSection"));

// ⬅️ Ton numéro WhatsApp
const WHATSAPP_NUMBER = "33638380634";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box minH="100vh" w="100%" overflowX="hidden">
      <AnimatePresence>{showIntro && <IntroScreen />}</AnimatePresence>
      <HeroSection />
      <ArgumentsSection whatsappNumber={WHATSAPP_NUMBER} />
      <ComoFunciona />
      <OriginSection />
      <Testimonial />
      <Suspense fallback={<Center bg="#0f2318" h="400px"><Spinner color="#cc8655" size="lg" /></Center>}>
        <PresencaSection />
      </Suspense>
      <Contact whatsappNumber={WHATSAPP_NUMBER} />
      <FloatingWhatsApp number={WHATSAPP_NUMBER} />
    </Box>
  );
}
