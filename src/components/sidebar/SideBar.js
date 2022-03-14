import React from 'react';
import {
  chakra,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Flex,
  Text,
  useDisclosure
} from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

const StyledDrawer = chakra(Drawer, {
  display: 'flex',
});

const SideBar = () => {
  return (
    <div>
      <StyledDrawer
        placement='left'
        isOpen={true}
        variant="permanent"
        size='xs'
        useInert={false}
      >
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </StyledDrawer>
    </div>
  )
}

export default SideBar;