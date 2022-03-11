import React from "react";

import {
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
} from '@chakra-ui/core'

export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
            <Text>placeholder if empty</Text>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}