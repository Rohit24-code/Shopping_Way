import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";


function OrderConfirm() {
     const cartselector = useSelector((state) => state.cart);
     const total=cartselector.total
  return (
    <div>
      <Navbar />

      <Box>
        <Box mt={20} mr="190px" ml="220px">
          <Text>CHOOSE A PAYMENT METHOD</Text>

          <Box border="1px" borderColor="orange.300" p={3} mt="20px" mr="250px">
            <Text color="orange.300" fontSize="xs" fontWeight="200">
              Please note that only cards that use 3D Secure are accepted.
              Contact your bank to activate it or for
              <br /> further instructions.
            </Text>
          </Box>

          <Flex mt="50px" gap="5px">
            <Box
              border="1px"
              borderColor="black"
              textAlign="center"
              boxShadow="rgb(0,0,0,0.75px)"
            >
              <img
                src="https://static.zara.net/static/images/payment/payment/icon-payment-mastercard.svg"
                alt=""
              />
              <span>MASTERCARD</span>
            </Box>

            <Box
              border="1px"
              borderColor="black"
              textAlign="center"
              boxShadow="rgb(0,0,0,0.75px)"
            >
              <img
                src="https://static.zara.net/static/images/payment/payment/icon-payment-amex_2.svg"
                alt=""
              />
              <span>AMERICAN EXPRESS</span>
            </Box>

            <Box
              border="1px"
              borderColor="black"
              textAlign="center"
              boxShadow="rgb(0,0,0,0.75px)"
            >
              <img
                src="https://static.zara.net/static/images/payment/payment/ru-pay.svg"
                alt=""
              />
              <span>RUPAY</span>
            </Box>

            <Box
              border="1px"
              borderColor="black"
              textAlign="center"
              boxShadow="rgb(0,0,0,0.75px)"
            >
              <img
                src="https://static.zara.net/static/images/payment/payment/net-banking.svg"
                alt=""
              />
              <span>NETBANK</span>
            </Box>

            <Box border="1px" borderColor="black" textAlign="center">
              <img
                src="https://static.zara.net/static/images/payment/payment/upi.svg"
                alt=""
              />
              <span>UPI</span>
            </Box>
          </Flex>

          <Box bgColor="white">
            <Flex
              justify="center"
              align="center"
              pos="fixed"
              bottom="1px"
              right="50%"
              gap="20px"
              boxShadow="rgb(0,0,0,0.75px)"
              _hover={{ cursor: "pointer", padding: "5px" }}
            >
              <Box bgColor="white">
                <Text fontSize="xs" lineHeight="12px" fontWeight="700">
                  TOTAL ₹ {total.toFixed(2)}
                </Text>
                <Text fontSize="xs" lineHeight="12px">
                  INCLUDING GST{" "}
                </Text>
                <Text fontSize="xs" lineHeight="12px">
                  * EXCL SHIPPING COST
                </Text>
              </Box>
              <Box>
                <Link to="/success">
                  <Button
                    width="250px"
                    bg="black"
                    color="white"
                    alignItems="center"
                  >
                    Continue
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default OrderConfirm;
