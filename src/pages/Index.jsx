import React from "react";
import { Box, Flex, Button, Input } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="#005060" w="100%" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Box>Tadata</Box>
        <Box>
          <Button bg="#007d8d" color="white" mr={2}>
            APIs
          </Button>
          <Button bg="#007d8d" color="white">
            Providers
          </Button>
        </Box>
        <Box>
          <Input placeholder="Search..." bg="#4eacbd" border="none" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
