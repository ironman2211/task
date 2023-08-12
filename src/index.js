import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todo/todosSlice';
import cartReducer from './features/cart/cartSlice';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    cart: cartReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router>

    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
