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
  useDisclosure,
  Tabs, 
  TabList,
  TabPanels,
  Tab,
  TabPanel ,
} from '@chakra-ui/core';

import FavoritesContext from "../store/favorites-context";

import { LaunchItem } from "./launches";
import { LaunchPadItem } from "./launch-pads";
import { Flex } from "chakra-ui";

export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const favoritesContext = useContext(FavoritesContext);
  const anyLaunches = favoritesContext.launchItems ? favoritesContext.launchItems.length > 0 : false;
  const anyPads = favoritesContext.padItems ? favoritesContext.padItems.length > 0 : false;

  const delFavorite = (item) => {
    favoritesContext.delItem(item)
  };

  return (
    <>
      <Button ref={btnRef}
        onClick={onOpen}
        color='#000'
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

          <DrawerBody overflowY='auto'>

            <Tabs isFitted variant='enclosed'>
              <TabList>
                <Tab>Launches</Tab>
                <Tab>Pads</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  { !anyLaunches && (
                    <Text paddingTop='1rem'>No favorite launches 
                      <span role="img" 
                        aria-label="disappointed face">😞</span> 
                    </Text>
                  )}

                  { anyLaunches && (
                    favoritesContext.launchItems.map((item) => {
                      return (
                        <Box key={item.flight_number}
                          position='relative'
                          paddingTop='1rem'
                        >
                          <Button 
                            position='absolute'
                            top='1rem'
                            right='0px'
                            zIndex='1'
                            onClick={() => delFavorite(item)}
                            padding='0'
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
                </TabPanel>

                <TabPanel>
                  { !anyPads && (
                    <Text paddingTop='1rem'>No favorite launch-pads 
                      <span role="img" 
                        aria-label="disappointed-face">😞</span> 
                    </Text>
                  )}

                  { anyPads && (
                    favoritesContext.padItems.map((item) => {
                      return (
                        <Box key={item.id}
                          position='relative'
                          paddingTop='1rem'
                        >
                          <Button 
                            position='absolute'
                            top='1rem'
                            right='0px'
                            zIndex='1'
                            onClick={() => delFavorite(item)}
                            padding='0'
                          >
                            <span role="img" 
                              aria-label="remove favorite"
                            >❌</span>
                          </Button>  

                          <LaunchPadItem launchPad={item}></LaunchPadItem>
                        </Box>
                      ) 
                    })
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}