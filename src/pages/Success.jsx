import { Box, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Success = () => {
    const cartselector= useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItem:'center',justifyContent:"center" ,marginTop:"5%"}}>
      <Box>
        <Heading size="lg">Hurray Order Successfull</Heading>
        { cartselector.cart.map((e)=>{
          
       return <Card
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
        </Card>;
         })}
         <Heading size="sm" mt="10px">Thank You For Shopping With Us</Heading>
      </Box>
    </div>
  )
}

export default Success
