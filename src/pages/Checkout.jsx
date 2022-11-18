import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartSingleCard from '../component/CartSingleCard';
import SingleCard from '../component/SingleCard';

const Checkout = () => {
     const cartselector = useSelector((state) => state.cart);
     const nav= useNavigate()
     console.log(cartselector.cart)
  return (
    <div>
      <div>
        {cartselector.cart &&
          cartselector.cart.map((one) => {
             console.log("checkout",one);
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
        <Text fontSize="3xl">TOTAL:{cartselector.total}</Text>
        <Button onClick={() => nav("/orderconfirm")}>Proceed To Payment</Button>
      </div>
    </div>
  );
}

export default Checkout
