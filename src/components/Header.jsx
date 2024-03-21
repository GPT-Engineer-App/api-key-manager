import React from "react";
import { Box, Heading, HStack, Input, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="#005060" p={4}>
      <HStack justify="space-between">
        <Heading color="white">Tadata</Heading>
        <HStack>
          <Button colorScheme="teal" bg="#007d8d" _hover={{ bg: "#005060" }}>
            APIs
          </Button>
          <Button colorScheme="teal" bg="#007d8d" _hover={{ bg: "#005060" }}>
            Providers
          </Button>
        </HStack>
        <Input placeholder="Search" bg="#4eacbd" />
      </HStack>
    </Box>
  );
};

export default Header;
