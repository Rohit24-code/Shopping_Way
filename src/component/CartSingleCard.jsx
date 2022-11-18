import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { DELETE_CART_ITEMS } from '../store/Cart/cart.type';
const CartSingleCard = ({one}) => {
    const dispatch=useDispatch()
      const handleDelete = (id) => {
        dispatch({type:DELETE_CART_ITEMS,payload:id});
        dispatch({ type: "TOTAL" });
      };

      const handleSub=(id)=>{
         dispatch({ type: "SUB", payload: id });
         dispatch({ type: "TOTAL"});
      }
      const handleAdd=(id)=>{
        // console.log("handleAdd",id)
           dispatch({ type: "ADD", payload: id });
           dispatch({ type: "TOTAL"});
      }
  return (
    <div>
      <Card
        size="md"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "100px" }}
          src={one.image}
          alt={one.title}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{one.title}</Heading>

            <Box display="flex" gap="5px" mt="20%">
              <Button variant="solid" colorScheme="blue" onClick={one.qty===0?handleDelete(one.id):()=>handleSub(one.id)}>
                -
              </Button>
              <Text>Quantity:{one.qty}</Text>
              <Button variant="solid" colorScheme="blue" onClick={()=>handleAdd(one.id)}>
                +
              </Button>
            </Box>
          </CardBody>

          <CardFooter>
            <Button
              variant="solid"
              colorScheme="red"
              onClick={() => handleDelete(one.id)}
            >
              Delete
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

export default CartSingleCard
