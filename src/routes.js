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
  InputRightElement,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton
} from "@chakra-ui/react"
import { EditIcon, DownloadIcon, SearchIcon, CloseIcon } from '@chakra-ui/icons'

const Page1 = () => {
  return (
    <Flex
      width='80vw'
      justifyContent='flex-end'
    >
      <Box p='1' >
        <InputGroup
          width='300px'
          borderBottomColor='grey'>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            variant="outline"
            placeholder={`Search`}
          />
          <InputRightElement
            pointerEvents="none"
            children={<CloseIcon color="gray.300" />}
          />
        </InputGroup>
      </Box>
      <Box p='1'>
        <Button padding={3} color='black' ml='4' onClick={() => { }}>
          <DownloadIcon />
        </Button>
      </Box>
      <Box p='1'>
        <Button padding={3} color='black' mr='4' onClick={() => { }}>
          <EditIcon name='edit' w={4} h={4} />
        </Button>
      </Box>
    </Flex>
  )
}

const Routes = () => {
  return (
    <Flex style={{
      height: "100vh",
      paddingLeft: 340,
      paddingTop: 10,
    }}>
      <Page1 />
    </Flex>
  );
}

export default Routes;