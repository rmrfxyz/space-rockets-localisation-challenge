import React, { useContext } from "react";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  useDisclosure
} from '@chakra-ui/core';

import FavoritesContext from "../store/favorites-context";

import { LaunchItem } from "./launches";

export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const favoritesContext = useContext(FavoritesContext);
  const anyLaunches = favoritesContext.launchItems.length > 0;

  const delFavorite = (item) => {
    console.dir(item)
    favoritesContext.delLaunchItem(item.flight_number)
  };

  return (
    <>
      <Button ref={btnRef}
        onClick={onOpen}
      >
        Favs
      </Button>

      <Drawer isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            My favorite X-es
          </DrawerHeader>

          <DrawerBody>
            { !anyLaunches && (
              <Text>No saved favorites 
                <span role="img" 
                  aria-label="disappointed face">😞</span> 
              </Text>
            )}

            { anyLaunches && (
              favoritesContext.launchItems.map((item) => {
                return (
                  <Box key={item.flight_number}
                    position='relative'
                  >
                    <Button 
                      position='absolute'
                      top='30px'
                      right='15px'
                      zIndex='1'
                      onClick={() => delFavorite(item)}
                    >
                      <span role="img" 
                        aria-label="remove favorite"
                      >❌</span>
                    </Button>  

                    <LaunchItem launch={item}></LaunchItem>
                  </Box>
                ) 
              })
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}