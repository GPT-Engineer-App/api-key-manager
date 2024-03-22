import React, { useState } from "react";
import { Box, VStack, HStack, Image, Text, Heading, Input, Button, Table, Thead, Tbody, Tr, Th, Td, Progress, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from "@chakra-ui/react";
import Banner from "../components/Banner";

const Index = () => {
  const [name, setName] = useState("John Doe");
  const [company, setCompany] = useState("Acme Inc.");
  const [email, setEmail] = useState("john.doe@example.com");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const apiKeys = [
    {
      api: "Weather API",
      cost: 50,
      validUntil: "2023-12-31",
      callsUsed: 500,
      totalCalls: 1000,
    },
    {
      api: "Geocoding API",
      cost: 25,
      validUntil: "2023-09-30",
      callsUsed: 200,
      totalCalls: 500,
    },
    {
      api: "News API",
      cost: 75,
      validUntil: "2024-03-31",
      callsUsed: 800,
      totalCalls: 2000,
    },
  ];

  return (
    <Box bg="gray.100" minH="100vh">
      <Banner />
      <VStack spacing={8} align="stretch" mt={16}>
        <HStack spacing={8} align="center">
          <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTAxNDk5NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" boxSize="150px" objectFit="cover" borderRadius="full" />
          <VStack align="start" spacing={2}>
            <Heading size="xl" color="brand.800">
              {name}
            </Heading>
            <Text fontSize="lg" color="gray.600">
              {company}
            </Text>
            <Text fontSize="lg" color="gray.600">
              {email}
            </Text>
            <HStack>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
              <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </HStack>
            <Button bg="brand.700" color="white" onClick={onOpen}>
              View/Reset Password
            </Button>
          </VStack>
        </HStack>
        <Box overflowX="auto">
          <Table variant="simple" colorScheme="teal" size="lg">
            <Thead>
              <Tr>
                <Th>API</Th>
                <Th>Cost</Th>
                <Th>Valid Until</Th>
                <Th>Calls Used</Th>
              </Tr>
            </Thead>
            <Tbody>
              {apiKeys.map((key, index) => (
                <Tr key={index}>
                  <Td>{key.api}</Td>
                  <Td>${key.cost}</Td>
                  <Td>{key.validUntil}</Td>
                  <Td>
                    <Progress value={(key.callsUsed / key.totalCalls) * 100} size="sm" colorScheme="brand" />
                    {key.callsUsed} / {key.totalCalls}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Current Password: ********</Text>
            <Input placeholder="New Password" type="password" mt={4} />
          </ModalBody>
          <ModalFooter>
            <Button bg="brand.700" color="white" mr={3} onClick={onClose}>
              Reset Password
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
