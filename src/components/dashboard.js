import { Box, Stack } from "@chakra-ui/layout";
import SideBar from './sidebar/SideBar';
import Header from './header/header'
import { ChakraProvider } from "@chakra-ui/react";

const Dashboard = ({ children }) => {
  return (
    <Box>
      <ChakraProvider>
        <Header />
        <Box>
          <Stack>
            <SideBar />
          </Stack>
        </Box>
        {children}
      </ChakraProvider>
    </Box>
  );
}

export default Dashboard;
