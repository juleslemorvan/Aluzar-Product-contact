import { useRef, useEffect, useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// ⬅️ Remplace avec tes vrais établissements
const establishments = [
  { name: "Bar Topo", city: "Lisboa", type: "Bar", coords: [38.7223, -9.1393] },
  { name: "Pavilhão Chinês", city: "Lisboa", type: "Bar", coords: [38.7165, -9.1484] },
  { name: "Zé da Mouraria", city: "Lisboa", type: "Restaurante", coords: [38.7164, -9.1313] },
  { name: "Time Out Market", city: "Lisboa", type: "Bar", coords: [38.7065, -9.1464] },
  { name: "Aduela Bar", city: "Porto", type: "Bar", coords: [41.1436, -8.6162] },
  { name: "Restaurante DOP", city: "Porto", type: "Restaurante", coords: [41.1413, -8.6159] },
  { name: "Vinologia", city: "Porto", type: "Bar", coords: [41.1404, -8.6134] },
  { name: "Beira Mar", city: "Cascais", type: "Bar", coords: [38.6979, -9.4215] },
  { name: "Sunset Bar", city: "Albufeira", type: "Bar", coords: [37.0890, -8.2503] },
  { name: "Taberna Alentejana", city: "Évora", type: "Restaurante", coords: [38.5714, -7.9071] },
  { name: "Cocktails do Minho", city: "Braga", type: "Bar", coords: [41.5454, -8.4265] },
  { name: "Mondego Bar", city: "Coimbra", type: "Bar", coords: [40.2033, -8.4103] },
];

const stats = [
  { target: 12, suffix: "", label: "estabelecimentos" },
  { target: 7, suffix: "", label: "cidades" },
  { target: 500, suffix: "+", label: "garrafas servidas" },
];

// Marqueur personnalisé couleur #cc8655
const createIcon = () =>
  new L.DivIcon({
    className: "",
    html: `<div style="
      width:14px;height:14px;
      background:#cc8655;
      border:2.5px solid rgba(255,255,255,0.7);
      border-radius:50%;
      box-shadow:0 0 10px rgba(204,134,85,0.9);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
  });

// Compteur animé
function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const stepDuration = 1400 / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.floor((step / steps) * target));
      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function PresencaSection() {
  const countersRef = useRef(null);
  const inView = useInView(countersRef, { once: true, amount: 0.5 });
  const icon = createIcon();

  return (
    <Box bg="#0f2318" py={{ base: 16, md: 24 }}>
      {/* Titre */}
      <Box px={{ base: 5, md: 10 }}>
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
            Já presentes em todo o país
          </Heading>
          <Text
            fontFamily="ITCSouvenir"
            fontWeight={500}
            fontSize={{ base: "sm", md: "md" }}
            color="whiteAlpha.600"
            mt={3}
            maxW="380px"
            mx="auto"
          >
            De Lisboa ao Algarve, a Aluzar já se serve nas melhores mesas.
          </Text>
        </MotionBox>

        {/* Compteurs */}
        <MotionFlex
          ref={countersRef}
          justify="center"
          gap={{ base: 8, md: 20 }}
          wrap="wrap"
          mb={{ base: 12, md: 14 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <Box key={i} textAlign="center">
              <Text
                fontFamily="AbrilFatface"
                fontSize={{ base: "5xl", md: "6xl" }}
                color="#cc8655"
                lineHeight={1}
              >
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  inView={inView}
                />
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
      </Box>

      {/* Carte */}
      <MotionBox
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        mx={{ base: 4, md: 10 }}
        borderRadius="2xl"
        overflow="hidden"
        border="1px solid rgba(245,222,179,0.1)"
        h={{ base: "320px", md: "460px" }}
      >
        <MapContainer
          center={[39.5, -8.0]}
          zoom={6}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {establishments.map((place, i) => (
            <Marker key={i} position={place.coords} icon={icon}>
              <Popup>
                <Box p={1}>
                  <Text fontWeight="bold" fontSize="sm" color="#0f2318">
                    {place.name}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {place.type} · {place.city}
                  </Text>
                </Box>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </MotionBox>
    </Box>
  );
}
