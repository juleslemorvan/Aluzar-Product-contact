import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bgUrl from "../assets/aluzar13.webp";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const stats = [
  { value: "100%", label: "Agave Azul" },
  { value: "6–8", label: "Anos de maturação" },
  { value: "0", label: "Aditivos" },
];

export default function OriginSection() {
  return (
    <Box
      position="relative"
      minH={{ base: "75vh", md: "65vh" }}
      backgroundImage={`url(${bgUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="absolute" inset={0} bg="rgba(5,20,10,0.72)" />

      <Flex
        position="relative"
        zIndex={2}
        direction="column"
        align="center"
        textAlign="center"
        px={{ base: 6, md: 10 }}
        py={{ base: 16, md: 20 }}
        maxW="680px"
        mx="auto"
        gap={0}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <Heading
            fontFamily="AbrilFatface"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="wheat"
            mb={5}
          >
            Feita para durar
          </Heading>
          <Text
            fontFamily="ITCSouvenir"
            fontWeight={500}
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.800"
            lineHeight={1.8}
          >
            Destilada em Jalisco, México, com agave azul colhido no ponto
            ideal de maturação. Sem atalhos, sem difusores, sem aditivos.
            Só tequila pura.
          </Text>
        </MotionBox>

        {/* Stats */}
        <MotionFlex
          gap={{ base: 10, md: 16 }}
          mt={{ base: 12, md: 14 }}
          justify="center"
          wrap="wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {stats.map((stat, i) => (
            <Box key={i} textAlign="center">
              <Text
                fontFamily="AbrilFatface"
                fontSize={{ base: "4xl", md: "5xl" }}
                color="#cc8655"
                lineHeight={1}
              >
                {stat.value}
              </Text>
              <Text
                fontFamily="ITCSouvenir"
                fontWeight={500}
                fontSize={{ base: "xs", md: "sm" }}
                color="whiteAlpha.600"
                mt={2}
                letterSpacing={1}
                textTransform="uppercase"
              >
                {stat.label}
              </Text>
            </Box>
          ))}
        </MotionFlex>
      </Flex>
    </Box>
  );
}
