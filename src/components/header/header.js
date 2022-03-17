import React from 'react';
import {
  chakra,
  Button,
  Box,
  Flex,
  Text,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from "@chakra-ui/react"
import { PhoneIcon, AddIcon, CloseIcon, SearchIcon, TriangleDownIcon } from '@chakra-ui/icons';

const Header = ({ children }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      height="90px"
      width='100%'
      borderBottomColor='#ddd'
      borderBottomWidth='2px'
      alignItems='center'
    >
      <Image
        paddingInline='10px'
        ml={4}
        width="200px"
        height="90px"
        src='https://tcap.cloud/wp-content/uploads/2022/02/TCAP_logo.svg' />

      <Box p='3' >
        <InputGroup width='400px'>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            variant="outline"
            placeholder={`Wholesaler`}
            borderBottomColor='#ddd'
            borderBottomWidth='3px'
          />
          <InputRightElement
            pointerEvents="none"
            children={<CloseIcon color="gray.300" />}
          />
        </InputGroup>
      </Box>

      <Box p='3' >
        <InputGroup width='400px'>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            variant="outline"
            placeholder={`Company`}
            borderBottomColor='#ddd'
            borderBottomWidth='3px'
          />
          <InputRightElement
            pointerEvents="none"
            children={<CloseIcon color="gray.300" />}
          />
        </InputGroup>
      </Box>

      <Flex p='3' position='absolute' right='10' width='300px' justifyContent='space-between'>
        <InputGroup width='200px'>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            variant="outline"
            placeholder={`Scope`}
            borderBottomColor='#ddd'
            borderBottomWidth='3px'
          />
          <InputRightElement
            pointerEvents="none"
            children={<TriangleDownIcon color="gray.400" />}
          />
        </InputGroup>
        <Box bg='gray.300' width='40px' height='40px' borderRadius='25' />
      </Flex>
    </Flex>
  )
}

export default Header;