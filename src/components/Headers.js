import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { FcTodoList } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div className='bg-gray-900 h-20 w-full text-white flex items-center justify-between p-10'>
      <h1 className='text-xl tracking-widest'>
      <Link to='/' className='hover:text-gray-400'>LINK</Link>

      </h1>
      <ul>
        <li className='inline-block mr-5' >
            <Link to='/' className='hover:text-gray-400'>Home</Link>
        </li>
        <li className='inline-block mr-5'>
        <Link to='/about' className='hover:text-gray-400'>About</Link>
        </li>
        <li className='inline-block mr-5'>
        <Link to='/contact' className='hover:text-gray-400'>Contact</Link>
        </li>
      </ul>
     <div className='flex gap-4'>
        <button className='text-2xl cursor-pointer '>
        <Link to='/shop' className='hover:text-gray-400'>
             <AiOutlineShoppingCart/>
        </Link>
        </button>
        <button className='text-2xl cursor-pointer'>
        <Link to='/todo' className='hover:text-gray-400'>
            <FcTodoList/>
        </Link>
        </button>
     </div>
    </div>
  )
}

export default Headers
