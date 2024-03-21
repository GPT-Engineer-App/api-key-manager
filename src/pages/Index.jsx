import React from "react";
import { Box, Flex, Button, Input, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="#005060" w="100%" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">
          Tadata
        </Text>
        <Box>
          <Button bg="#007d8d" color="white" _hover={{ bg: "#005060" }} mr={2}>
            APIs
          </Button>
          <Button bg="#007d8d" color="white" _hover={{ bg: "#005060" }}>
            Providers
          </Button>
        </Box>
        <Input placeholder="Search" bg="#4eacbd" />
      </Flex>
    </Box>
  );
};

const IndexPage = () => {
  return (
    <Box>
      <Header />
      {}
    </Box>
  );
};

export default IndexPage;
