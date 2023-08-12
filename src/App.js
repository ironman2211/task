import React from 'react';
import './index.css';
import Todo from './pages/Todo';
import Headers from './components/Headers.js';
import { Routes,Route } from 'react-router';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  return (
    <div className=" flex  flex-col bg-gray-100">
      <Headers/>
      <Routes>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/shop' element={<Cart/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/about' element={<About/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
