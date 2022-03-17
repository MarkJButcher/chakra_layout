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

const StyledDrawer = chakra(Box, {
  position: 'fixed',
});

const SideBar = () => {
  return (
    <Flex
      position='absolute'
      height='100vh'
      width='23vw'
      minWidth='300px'
      maxWidth='380px'
      backgroundColor='white'
      borderRightColor='grey'
      borderRightWidth={1}
    ></Flex>
  )
}

export default SideBar;