import React from "react";
import { Box, Heading, HStack, Input, Button } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box bg="#005060" p={4}>
      <HStack justify="space-between">
        <Heading size="md" color="white">
          tadata
        </Heading>
        <HStack>
          <Button colorScheme="teal" bg="#007d8d">
            APIs
          </Button>
          <Button colorScheme="teal" bg="#007d8d">
            Providers
          </Button>
        </HStack>
        <Input placeholder="Search" bg="#4eacbd" color="white" />
      </HStack>
    </Box>
  );
};

export default Banner;
