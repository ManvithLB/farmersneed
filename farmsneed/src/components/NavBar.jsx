import React from "react";
import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { SearchIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={4}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Link as={RouterLink} to="/" textDecoration="none">
          <Text fontSize="lg" fontWeight="bold">
            Farming Store
          </Text>
        </Link>
      </Flex>

      <Box width="40%">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="text" placeholder="Search for products" />
        </InputGroup>
      </Box>

      <Spacer />

      <Flex align="center">
        <Link as={RouterLink} to="/" mr={4} textDecoration="none">
          <Text fontSize="md">HOME</Text>
        </Link>
        <Link as={RouterLink} to="/" mr={4} textDecoration="none">
          <Text fontSize="md">BUY</Text>
        </Link>
        <Link as={RouterLink} to="/sellCrops" mr={4} textDecoration="none">
          <Text fontSize="md">SELL</Text>
        </Link>
        <Link as={RouterLink} to="/contact" mr={4} textDecoration="none">
          <Text fontSize="md">CONTACT</Text>
        </Link>
        <IconButton
          aria-label="Contact Us"
          icon={<ArrowForwardIcon />}
          colorScheme="whiteAlpha"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
