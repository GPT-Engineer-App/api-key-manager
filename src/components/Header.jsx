import React from "react";
import { Box, Heading, HStack, Button, Input } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="#005060" p={4}>
      <HStack justify="space-between">
        <Heading size="xl" color="white">
          Tadata
        </Heading>
        <HStack spacing={4}>
          <Button colorScheme="teal" bg="#007d8d">
            APIs
          </Button>
          <Button colorScheme="teal" bg="#007d8d">
            Providers
          </Button>
        </HStack>
        <Input placeholder="Search" bg="#4eacbd" borderColor="#4eacbd" color="white" />
      </HStack>
    </Box>
  );
};

export default Header;
