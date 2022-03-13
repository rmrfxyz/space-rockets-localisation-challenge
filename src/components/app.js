import React from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Text, Button } from "@chakra-ui/core";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";

import FavoritesPanel from "./favorites-panel";
import FavoritesProvider from "../store/favorites-provider";

import { useTranslation, Trans } from 'react-i18next';

export default function App() {
  return (
    <div>
      <FavoritesProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launches/:launchId" element={<Launch />} />
          <Route path="/launch-pads" element={<LaunchPads />} />
          <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
        </Routes>
      </FavoritesProvider>
    </div>
  );
}

const lngs = {
  en: { nativeName: 'English' },
  da: { nativeName: 'Dansk' }
};

function NavBar() {

  const { i18n } = useTranslation();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg="gray.800"
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        ¡SPACE·R0CKETS!
      </Text>

      <div>
        {Object.keys(lngs).map((lng) => (
          <Button key={lng} 
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} 
            type="submit" 
            onClick={() => i18n.changeLanguage(lng)}
            marginRight='1rem'
            color='#000'
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </div>

      <FavoritesPanel />

    </Flex>
  );
}
