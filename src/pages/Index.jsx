import { Box, Flex, Grid, Heading, Image, Text, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: "$29.99",
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0fGVufDB8fHx8MTcwOTkzNTgzN3ww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    name: "Stylish Jeans",
    description: "Perfect fit denim jeans",
    price: "$59.99",
    imageUrl: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZWFuc3xlbnwwfHx8fDE3MDk5MzU4Mzd8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    name: "Sneakers",
    description: "Trendy sneakers for everyday wear",
    price: "$79.99",
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmVha2Vyc3xlbnwwfHx8fDE3MDk5MzU4Mzd8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 4,
    name: "Leather Jacket",
    description: "Premium quality leather jacket",
    price: "$199.99",
    imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0fGVufDB8fHx8MTcwOTkzNTgzN3ww&ixlib=rb-4.0.3&q=80&w=1080',
  },
];

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.400");

  return (
    <Box p={4}>
      <Heading mb={6} textAlign="center">
        Welcome to Our Clothing Store
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {products.map((product) => (
          <Box key={product.id} bg={bg} borderRadius="lg" boxShadow="md" overflow="hidden">
            <Image src={product.imageUrl} alt={product.name} loading="lazy" />
            <Box p={4}>
              <Heading as="h3" size="lg" mb={2}>
                {product.name}
              </Heading>
              <Text color={color} mb={4}>
                {product.description}
              </Text>
              <Text fontWeight="bold" mb={4}>
                {product.price}
              </Text>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
                  Add to Cart
                </Button>
                <Flex alignItems="center">
                  <Button variant="ghost" colorScheme="teal">
                    <FaHeart />
                  </Button>
                  <Button variant="ghost" colorScheme="teal">
                    <FaSearch />
                  </Button>
                </Flex>
              </Stack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
