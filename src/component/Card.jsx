import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";


const ItemCard = ({ id, image, title,  price }) => {
  const nav = useNavigate();
  return (
    <Card
      maxW="sm"
      mt={10}
      cursor="pointer"
      onClick={() => {
        nav(`productdetails/${id}`);
      }}
    >
      <CardBody>
        <Image height="75%" src={image} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ₹{price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
