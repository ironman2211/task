import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity } from '../features/cart/cartSlice';
import { AiOutlineDelete } from 'react-icons/ai';
const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='w-2/6  rounded-xl  flex-col  items-start justify-start gap-5 p-7 bg-gray-200'>
      <h2 className='text-xl mb-5'>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : null}
      <ul>
        {cart.map(item => (
          <li key={item.id} className="flex items-start justify-between p-2 border-b  ">
            <div className='text-base'>
                <h1>
              {item.name} 

                </h1>
                <h2>

              ₹{item.price}
                </h2>
            </div>
            <div className='flex gap-4'>
              <input
              className='w-20 outline-none h-10 p-1 rounded-md border-2'
                type="number"
                value={item.quantity}
                onChange={e => dispatch(updateItemQuantity({ id: item.id, quantity: parseInt(e.target.value, 10) || 0 }))}
              />
              <button onClick={() => dispatch(removeItem(item.id))} className='h-10 w-10 flex items-center justify-center bg-black text-white text-xl rounded-md'>
                <AiOutlineDelete/>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold flex justify-between text-xl">
        <h3>
        Subtotal:
        </h3>
      <h3>
      ₹ {calculateSubtotal()}
      </h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
