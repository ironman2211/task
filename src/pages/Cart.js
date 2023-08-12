import React from 'react'
import ProductList from '../components/ProductList'
import ShoppingCart from '../components/ShoppingCart'

const Cart = () => {
  return (
    <div className="bg-gray-100 h-screen w-full p-10 flex  justify-between ">
        <ProductList />
        <ShoppingCart />
    </div>
  )
}

export default Cart
