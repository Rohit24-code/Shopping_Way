import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import OrderConfirm from '../pages/OrderConfirm'
import ProductDetail from '../pages/ProductDetail'
import Success from '../pages/Success'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productdetails/:id" element={<ProductDetail/>}/>
      <Route path="/orderconfirm" element={<OrderConfirm/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/success" element={<Success/>}/>
    </Routes>
  )
}

export default AllRoutes
