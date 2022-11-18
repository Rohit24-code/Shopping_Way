import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartSingleCard from "../component/CartSingleCard";

const Checkout = () => {
  const cartselector = useSelector((state) => state.cart);
  const nav = useNavigate();
  return (
    <div>
      <div>
        {cartselector.cart &&
          cartselector.cart.map((one) => {
            console.log("checkout", one);
            return <CartSingleCard key={one.id} one={one} />;
          })}
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        <Text fontSize="3xl">TOTAL:{cartselector.total.toFixed(2)}</Text>
        <Button onClick={() => nav("/orderconfirm")}>Proceed To Payment</Button>
      </div>
    </div>
  );
};

export default Checkout;
