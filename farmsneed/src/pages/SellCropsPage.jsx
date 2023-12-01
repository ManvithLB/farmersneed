// SellCropsPage.jsx
import React, { useState } from "react";
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const SellCropsPage = () => {
  const [cropDetails, setCropDetails] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCropDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the crop details to a backend or store in your application
    console.log("Crop details submitted:", cropDetails);
  };

  return (
    <>
    <Navbar></Navbar>
    <Container maxW="container.md" mt={8}>
      <Heading as="h2" mb={4}>
        Sell Your Crops
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Crop Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={cropDetails.name}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Crop Description</FormLabel>
          <Textarea
            name="description"
            value={cropDetails.description}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Price per Unit</FormLabel>
          <Input
            type="number"
            name="price"
            value={cropDetails.price}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Quantity Available</FormLabel>
          <Input
            type="number"
            name="quantity"
            value={cropDetails.quantity}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        {/* <FormControl mb={4}>
          <FormLabel>Image URL</FormLabel>
          <Input
            type="text"
            name="image"
            value={cropDetails.image}
            onChange={handleInputChange}
          />
        </FormControl> */}
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </form>
    </Container>
    </>
  );
};

export default SellCropsPage;
