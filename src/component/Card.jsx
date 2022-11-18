import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';

const ItemCard = ({id,image,title,description,price}) => {
    const nav=useNavigate()
  return (
    <Card maxW="sm" mt={10} cursor="pointer" onClick={()=>{
       nav(`productdetails/${id}`)
    }}>
      <CardBody>
        <Image
        height="75%"
          src={image}
          alt={title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          {/* <Text>
           {description}
          </Text> */}
          <Text color="blue.600" fontSize="2xl">
            ₹{price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default ItemCard
