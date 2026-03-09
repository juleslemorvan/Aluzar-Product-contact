import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bgUrl from "../assets/aluzar4.webp";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// ⬅️ Remplace avec tes vrais témoignages
const testimonials = [
  {
    quote:
      "A melhor tequila que já servi no meu bar. Os clientes adoram e pedem sempre mais.",
    author: "João Santos",
    role: "Bar Manager, Lisboa",
  },
  {
    quote:
      "Preço competitivo, qualidade premium. Uma combinação rara no mercado português.",
    author: "Maria Costa",
    role: "Proprietária, Porto",
  },
  {
    quote:
      "100% Agave Azul sem aditivos — exatamente o que os meus clientes procuram.",
    author: "Pedro Alves",
    role: "Chef Bartender, Cascais",
  },
];

export default function Testimonial() {
  return (
    <Box
      position="relative"
      py={{ base: 16, md: 24 }}
      px={{ base: 5, md: 10 }}
      backgroundImage={`url(${bgUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      overflow="hidden"
    >
      <Box position="absolute" inset={0} bg="rgba(5,20,10,0.8)" />

      <Box position="relative" zIndex={2} maxW="960px" mx="auto">
        <MotionBox
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={{ base: 10, md: 14 }}
        >
          <Heading
            fontFamily="AbrilFatface"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="wheat"
          >
            O que dizem
          </Heading>
        </MotionBox>

        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 5, md: 6 }}
        >
          {testimonials.map((t, i) => (
            <MotionBox
              key={i}
              flex={1}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.13 }}
            >
              <Box
                bg="rgba(255,255,255,0.05)"
                border="1px solid rgba(245,222,179,0.12)"
                borderRadius="2xl"
                p={{ base: 6, md: 7 }}
                backdropFilter="blur(8px)"
                h="100%"
                display="flex"
                flexDirection="column"
              >
                <Text
                  color="#cc8655"
                  fontSize="5xl"
                  lineHeight={0.7}
                  mb={5}
                  fontFamily="AbrilFatface"
                >
                  "
                </Text>
                <Text
                  color="whiteAlpha.900"
                  fontFamily="ITCSouvenir"
                  fontWeight={500}
                  fontSize={{ base: "sm", md: "md" }}
                  lineHeight={1.75}
                  flex={1}
                  mb={6}
                >
                  {t.quote}
                </Text>
                <Stack gap={0}>
                  <Text
                    color="wheat"
                    fontFamily="ITCSouvenir"
                    fontWeight={700}
                    fontSize="sm"
                  >
                    {t.author}
                  </Text>
                  <Text
                    color="whiteAlpha.500"
                    fontFamily="ITCSouvenir"
                    fontWeight={500}
                    fontSize="xs"
                  >
                    {t.role}
                  </Text>
                </Stack>
              </Box>
            </MotionBox>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
