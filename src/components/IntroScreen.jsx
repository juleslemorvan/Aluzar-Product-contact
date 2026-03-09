import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import logoUrl from "../assets/logo-aluzar.webp";

const MotionBox = motion(Box);

export default function IntroScreen() {
  return (
    <MotionBox
      position="fixed"
      inset={0}
      bg="#cc8655"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={10}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{
        y: "-100vh",
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 },
      }}
    >
      <MotionBox
        as="img"
        src={logoUrl}
        alt="Aluzar Tequila"
        w="280px"
        objectFit="contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.9, ease: "easeOut" },
        }}
      />
    </MotionBox>
  );
}
