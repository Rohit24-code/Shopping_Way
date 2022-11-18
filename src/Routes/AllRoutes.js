import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import OrderConfirm from '../pages/OrderConfirm'
import ProductDetail from '../pages/ProductDetail'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productdetails" element={<ProductDetail/>}/>
      <Route path="/orderconfirm" element={<OrderConfirm/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
    </Routes>
  )
}

export default AllRoutes
