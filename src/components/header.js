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

const StyledBox = chakra(Flex, {
  width: '100%',
  height: '100px',
});

const Header = ({ children }) => {
  return (
    <StyledBox
      backgroundColor='pink'
      height="100px"
      width='100%'
    >
      {children}
    </StyledBox>
  )
}

export default Header;