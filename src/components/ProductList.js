import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { id: 2, name: 'Product 2', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { id: 3, name: 'Product 3', price: 20, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { id: 4, name: 'Product 1', price: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { id: 5, name: 'Product 2', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { id: 6, name: 'Product 3', price: 20, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
];

const ProductList = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex w-3/5  flex-col items-start justify-start gap-5 p-7">
            <h2 className='text-xl mb-5'>Products</h2>

            {products.map(product => (
                <div key={product.id} className="p-4 bg-gray-200 shadow-xl h-fit w-full rounded-xl flex items-end justify-between text-xl">
                    <div className='flex flex-col items-start justify-between gap-2 w-4/5'>
                        <h2 className='font-bold'>{product.name}</h2>
                        <p className='text-sm'>{
                            product.description
                        }
                        </p>
                    </div>

                    <div className='flex flex-col items-end gap-3'>
                        <b>

                            ₹{product.price}
                        </b>
                        <button className=' bg-gray-900 text-white hover:scale-105 p-2 text-sm rounded-md ' onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
