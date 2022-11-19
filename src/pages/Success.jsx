import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

const Success = () => {
  const cartselector = useSelector((state) => state.cart);

  let nday = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = nday[new Date().getDay()];
  let month = monthNames[new Date().getMonth()];
  let date = new Date().getUTCDate();
  const dispatch=useDispatch()
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Box>
          <Box>
            <Heading size="lg">Hurray! Payment successfull</Heading>
            <Heading size="md" ml="25px">
              Transaction Id : {Math.random() * 10 ** 17}
            </Heading>
          </Box>

          {cartselector.cart.map((e) => {
            return (
              <Card
                mt={20}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "50px" }}
                  src={e.image}
                  alt={e.title}
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{e.title}</Heading>
                  </CardBody>
                </Stack>
              </Card>
            );
          })}

          <Box mt={38}>
            <Text fontSize="md" fontWeight={700}>
              HOME DELIVERY
            </Text>
            <Flex
              justify="space-between"
              borderTop="1px"
              borderBottom="1px"
              p="8px"
              borderColor="black.300"
            >
              <Box>
                <Box>
                  <Text>
                    {day} {date} ,{month}
                  </Text>
                </Box>
                <Box>
                  <Text>TRANSPORT RESTRICTIONS MAY APPLY TO SOME AREAS</Text>
                </Box>

                <Box>
                  <Text>FREE SHIPPING FOR ORDERS OVER ₹ 2,990</Text>
                  <Text>DELIVERY TIME FRAMES</Text>
                </Box>
              </Box>

              <Box>
                <Text fontSize="md" fontWeight={700}>
                  Free
                </Text>
              </Box>
            </Flex>
          </Box>

          <Heading size="sm" mt="30px" ml="60px">
            Thank You For Shopping With Us
          </Heading>

          <Box>
            <Link to="/">
              <Button bgColor="#6ea83a" color="white" ml="110px" mt="10px" onClick={()=>{
                dispatch({type:"EMPTY_CART"})
                dispatch({type:"TOTAL"})
                }}>
                Continue Shopping
              </Button>
            </Link>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Success;
