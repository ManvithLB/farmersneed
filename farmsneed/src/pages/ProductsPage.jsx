import React, { useState } from "react";
import {
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  Square,
  Select,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import products from "../data/products";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div>
      <Navbar />
      <Container maxW="container.lg" mt={8}>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          mb={4}
        >
          <option value="All">All Categories</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          {filteredProducts.map((product) => (
            <GridItem key={product.id} boxShadow="md" p={4} borderRadius="md">
              <Square size="200px" mb={4}>
                <Image
                  src={`url_to_your_image_folder/${product.id}.jpg`}
                  alt={product.name}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  borderRadius="md"
                />
              </Square>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                {product.name}
              </Text>
              <Text mb={2}>{product.description}</Text>
              <Text fontWeight="bold" mb={2}>
                ${product.price}
              </Text>
              <Button colorScheme="teal" variant="outline">
                Buy Now
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsPage;
