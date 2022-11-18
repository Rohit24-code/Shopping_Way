import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Success = () => {
    const cartselector= useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItem:'center',justifyContent:"center" ,marginTop:"10%"}}>
      <Box>
        <Text>Hurray Order Successfull</Text>
        { cartselector.cart.map((e)=>{

         })}
      </Box>
    </div>
  )
}

export default Success
