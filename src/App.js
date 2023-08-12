import React from 'react';
import './index.css';
import Todo from './pages/Todo';
import Headers from './components/Headers.js';
import { Routes,Route } from 'react-router';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="h-screen flex  flex-col bg-gray-100">
      <Headers/>
      <Routes>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/shop' element={<Cart/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
