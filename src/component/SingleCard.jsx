import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ADD, ADD_CART_ITEMS } from "../store/Cart/cart.type";

const SingleCard = ({ one, width }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const useselector = useSelector((state) => state.cart);

  const [qty, setQty] = useState(1);
  const handleQuantity = (e) => {
    setQty(+e.target.value);
  };

  const handleClick = (e) => {
    let findone = useselector.cart.find((el) => el.id === e.id);
    if (findone === undefined) {
      dispatch({
        type: ADD_CART_ITEMS,
        payload: { ...e, qty: qty },
      });
      dispatch({ type: "TOTAL" });
      toast({
        title: "Product Added",
        position: "top",
        description: "New product have been added .",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else {
      dispatch({
        type: ADD,
        payload: e.id,
      });
      dispatch({ type: "TOTAL" });
      toast({
        title: "Product Added",
        position: "top",
        description: "Product Quantity have been increased.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: width }}
          src={one.image}
          alt={one.title}
        />

        <Stack>
          <CardBody>
            <Heading size="lg"> {one.title}</Heading>

            <Text py="50px">{one.description}</Text>

            <select
              onChange={handleQuantity}
              style={{ background: "black", color: "white" }}
            >
              <option>Choose Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </CardBody>

          <CardFooter>
            <Button
              variant="solid"
              colorScheme="blue"
              ml="35%"
              onClick={() => handleClick(one)}
            >
              Add To Cart
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default SingleCard;
