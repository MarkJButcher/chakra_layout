import './App.css';
import { Box, Stack } from "@chakra-ui/layout";
import SideBar from './components/sidebar/SideBar';
import Header from './components/header'
import { ChakraProvider } from "@chakra-ui/react";


function App({ children }) {
  return (
    <Box className="App">
      <ChakraProvider>
        <Header />
        <Box>
          <Stack>
            <SideBar />
          </Stack>
        </Box>
      </ChakraProvider>
    </Box>
  );
}

export default App;
