import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../Components/Add-Product/AddProduct'
import Favorites from '../Components/Favorites-Page/Favorites'
import Home from '../Components/Home/Home'
import Navbar from '../Components/Navbar/Navbar'
import ProductsDetail from '../Components/ProductDetails/ProductsDetail'

const AuthRoutes = () => {
  return (
    <div>
         <Navbar />

      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/ProductsDetail/:id"  element={<ProductsDetail />} />
         <Route path="/Favorites" element={<Favorites />} />
         <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </div>
  )
}

export default AuthRoutes