import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const steps = [
  {
    number: "01",
    title: "Prova",
    description:
      "Experimenta a Aluzar no teu estabelecimento. Scan do QR code, já provaste.",
  },
  {
    number: "02",
    title: "Escolhe",
    description:
      "Falamos contigo em 15 minutos. Definimos volumes, preços e condições à medida do teu bar.",
  },
  {
    number: "03",
    title: "Serve",
    description:
      "Os teus clientes pedem mais. Tu fazes margem. Toda a gente ganha.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ComoFunciona() {
  return (
    <Box bg="#0a1c10" py={{ base: 16, md: 24 }} px={{ base: 5, md: 10 }}>
      <MotionBox
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        textAlign="center"
        mb={{ base: 12, md: 16 }}
      >
        <Heading
          fontFamily="AbrilFatface"
          fontSize={{ base: "3xl", md: "5xl" }}
          color="wheat"
        >
          Como funciona?
        </Heading>
        <Text
          fontFamily="ITCSouvenir"
          fontWeight={500}
          fontSize={{ base: "sm", md: "md" }}
          color="whiteAlpha.600"
          mt={3}
          maxW="340px"
          mx="auto"
        >
          Da primeira prova à parceria, em 3 passos.
        </Text>
      </MotionBox>

      <MotionFlex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 4 }}
        maxW="860px"
        mx="auto"
        align="stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {steps.map((step, i) => (
          <MotionBox key={i} variants={itemVariants} flex={1}>
            <Box
              h="100%"
              bg="rgba(255,255,255,0.03)"
              border="1px solid rgba(245,222,179,0.1)"
              borderRadius="2xl"
              px={{ base: 6, md: 7 }}
              py={{ base: 7, md: 8 }}
              position="relative"
              overflow="hidden"
              _hover={{
                bg: "rgba(204,134,85,0.07)",
                borderColor: "rgba(204,134,85,0.25)",
              }}
              transition="all 0.3s ease"
            >
              {/* Numéro de fond décoratif */}
              <Text
                position="absolute"
                top="-10px"
                right="16px"
                fontFamily="AbrilFatface"
                fontSize="7xl"
                color="rgba(204,134,85,0.07)"
                userSelect="none"
                lineHeight={1}
              >
                {step.number}
              </Text>

              {/* Numéro visible */}
              <Box
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w="42px"
                h="42px"
                borderRadius="full"
                bg="#cc8655"
                mb={5}
              >
                <Text
                  fontFamily="AbrilFatface"
                  fontSize="lg"
                  color="white"
                  lineHeight={1}
                >
                  {i + 1}
                </Text>
              </Box>

              <Heading
                fontFamily="AbrilFatface"
                fontSize={{ base: "2xl", md: "2xl" }}
                color="wheat"
                mb={3}
              >
                {step.title}
              </Heading>
              <Text
                fontFamily="ITCSouvenir"
                fontWeight={500}
                fontSize={{ base: "sm", md: "md" }}
                color="whiteAlpha.700"
                lineHeight={1.7}
              >
                {step.description}
              </Text>
            </Box>
          </MotionBox>
        ))}
      </MotionFlex>
    </Box>
  );
}
