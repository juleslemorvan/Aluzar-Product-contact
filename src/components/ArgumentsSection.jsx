import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const argumentsList = [
  "100% Agave Azul",
  "Perfil aromático rico em agave",
  "Sem aditivos",
  "Final suave e persistente",
  "Agave colhido entre 6 e 8 anos, no ponto ideal de maturação",
  "Sem uso de difusor",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const WhatsAppIcon = () => (
  <Box as="svg" w="20px" h="20px" viewBox="0 0 24 24" fill="white" flexShrink={0}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </Box>
);

export default function ArgumentsSection({ whatsappNumber }) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Experimentei%20a%20Aluzar%20e%20quero%20saber%20mais.`;

  return (
    <Box bg="#0f2318" py={{ base: 16, md: 24 }} px={{ base: 5, md: 10 }}>

      {/* Titre de section */}
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
          Porquê a Aluzar?
        </Heading>
        <Text
          fontFamily="ITCSouvenir"
          fontSize={{ base: "sm", md: "md" }}
          color="whiteAlpha.600"
          mt={3}
          fontWeight={500}
          maxW="360px"
          mx="auto"
        >
          Cada detalhe foi pensado para te oferecer o melhor.
        </Text>
      </MotionBox>

      {/* Liste d'arguments */}
      <MotionFlex
        direction="column"
        gap={4}
        maxW="580px"
        mx="auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {argumentsList.map((arg, index) => (
          <MotionBox key={index} variants={itemVariants}>
            <Box
              bg="rgba(255,255,255,0.04)"
              border="1px solid rgba(245,222,179,0.15)"
              borderRadius="xl"
              px={{ base: 5, md: 6 }}
              py={{ base: 4, md: 4 }}
              _hover={{
                bg: "rgba(204,134,85,0.12)",
                borderColor: "rgba(245,222,179,0.3)",
                transform: "translateX(6px)",
              }}
              transition="all 0.3s ease"
            >
              <Flex align="center" gap={4}>
                <Flex
                  w="34px"
                  h="34px"
                  flexShrink={0}
                  align="center"
                  justify="center"
                  borderRadius="full"
                  bg="#cc8655"
                  color="white"
                  fontFamily="AbrilFatface"
                  fontSize="sm"
                >
                  {index + 1}
                </Flex>
                <Text
                  color="wheat"
                  fontFamily="ITCSouvenir"
                  fontWeight={700}
                  fontSize={{ base: "sm", md: "md" }}
                  lineHeight={1.4}
                >
                  {arg}
                </Text>
              </Flex>
            </Box>
          </MotionBox>
        ))}
      </MotionFlex>

      {/* Accroche prix */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        maxW="580px"
        mx="auto"
        mt={{ base: 10, md: 12 }}
        bg="rgba(204,134,85,0.12)"
        border="1px solid rgba(204,134,85,0.3)"
        borderRadius="2xl"
        px={{ base: 6, md: 10 }}
        py={{ base: 5, md: 6 }}
      >
        <Text
          fontFamily="ITCSouvenir"
          fontWeight={700}
          fontSize={{ base: "md", sm: "lg", md: "xl" }}
          color="wheat"
          textAlign="center"
          lineHeight={1.6}
        >
          99,7% de probabilidade de a nossa tequila ser mais barata do que a
          que utilizam atualmente.
        </Text>
      </MotionBox>

      {/* CTA mid-page */}
      <MotionBox
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        display="flex"
        justifyContent="center"
        mt={{ base: 8, md: 10 }}
      >
        <MotionBox
          as="a"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          display="inline-flex"
          alignItems="center"
          gap={3}
          bg="#25D366"
          color="white"
          px={7}
          py={4}
          borderRadius="full"
          fontFamily="ITCSouvenir"
          fontWeight={700}
          fontSize={{ base: "md", md: "lg" }}
          letterSpacing={0.5}
          boxShadow="0 4px 24px rgba(37,211,102,0.35)"
          textDecoration="none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppIcon />
          Quero saber mais sobre a Aluzar
        </MotionBox>
      </MotionBox>
    </Box>
  );
}
