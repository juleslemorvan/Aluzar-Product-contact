import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bottleUrl from "../assets/bottle.webp";
import fondUrl from "../assets/fond.avif";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function HeroSection() {
  return (
    <Box
      minH="100vh"
      w="100%"
      position="relative"
      backgroundImage={`url(${fondUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Gradient overlay cinématique */}
      <Box
        position="absolute"
        inset={0}
        background="linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.6) 100%)"
      />

      {/* Badge — dissocié en haut de la page */}
      <MotionBox
        position="absolute"
        top={{ base: 7, md: 10 }}
        zIndex={3}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <Box
          display="inline-flex"
          alignItems="center"
          gap={2}
          border="1px solid rgba(245,222,179,0.3)"
          borderRadius="full"
          px={4}
          py="6px"
        >
          <MotionBox
            w="6px"
            h="6px"
            borderRadius="full"
            bg="#cc8655"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <Text
            fontFamily="ITCSouvenir"
            fontSize="xs"
            color="whiteAlpha.700"
            fontWeight={500}
            letterSpacing={2}
            textTransform="uppercase"
          >
            Tequila Premium · Portugal
          </Text>
        </Box>
      </MotionBox>

      {/* Contenu central */}
      <Flex
        position="relative"
        zIndex={2}
        direction="column"
        align="center"
        justify="center"
        px={{ base: 5, md: 10 }}
        w="100%"
        gap={0}
      >
        {/* Titre */}
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          textAlign="center"
        >
          <Heading
            as="h1"
            fontFamily="AbrilFatface"
            fontSize={{ base: "6xl", sm: "7xl", md: "8xl" }}
            color="wheat"
            lineHeight={1}
            letterSpacing="tight"
          >
            Gostaste?
          </Heading>
          <Text
            fontFamily="ITCSouvenir"
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.700"
            mt={3}
            fontWeight={500}
            letterSpacing={1}
          >
            A tequila que vai transformar o teu bar
          </Text>
        </MotionBox>

        {/* Halo + Bouteille */}
        <Box position="relative" mt={{ base: 8, md: 6 }}>
          {/* Halo cuivré synchronisé avec le float */}
          <MotionBox
            position="absolute"
            top="50%"
            left="50%"
            w={{ base: "180px", md: "240px" }}
            h={{ base: "180px", md: "240px" }}
            borderRadius="full"
            bg="#cc8655"
            filter="blur(55px)"
            opacity={0.22}
            style={{ translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22, y: [0, -14, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 3.1 },
              y: { duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 3.2 },
            }}
          />

          {/* Wrapper : animation d'entrée tilt reveal */}
          <MotionBox
            initial={{ opacity: 0, y: 70, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 1.2,
              delay: 2.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "center bottom" }}
          >
            {/* Float infini séparé de l'entrée */}
            <MotionBox
              as="img"
              src={bottleUrl}
              alt="Aluzar Tequila"
              h={{ base: "42vh", sm: "48vh", md: "55vh" }}
              objectFit="contain"
              display="block"
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4.5,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 3.4,
              }}
            />
          </MotionBox>
        </Box>
      </Flex>

      {/* Indicateur de scroll */}
      <MotionBox
        position="absolute"
        bottom={8}
        zIndex={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 3.2, duration: 0.8 },
          y: { duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 3.2 },
        }}
      >
        <Box
          w="24px"
          h="40px"
          border="2px solid"
          borderColor="whiteAlpha.400"
          borderRadius="full"
          display="flex"
          justifyContent="center"
          pt="6px"
        >
          <Box w="3px" h="8px" bg="whiteAlpha.400" borderRadius="full" />
        </Box>
      </MotionBox>
    </Box>
  );
}
