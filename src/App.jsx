import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import IntroScreen from "./components/IntroScreen";
import HeroSection from "./components/HeroSection";
import ArgumentsSection from "./components/ArgumentsSection";
import ComoFunciona from "./components/ComoFunciona";
import OriginSection from "./components/OriginSection";
import Testimonial from "./components/Testimonial";
import PresencaSection from "./components/PresencaSection";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

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
      <PresencaSection />
      <Contact whatsappNumber={WHATSAPP_NUMBER} />
      <FloatingWhatsApp number={WHATSAPP_NUMBER} />
    </Box>
  );
}
