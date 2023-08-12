import { createSlice } from '@reduxjs/toolkit';
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const initialState =savedTodos;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      const updatedState = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(updatedState));
      return updatedState;
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }

      localStorage.setItem('todos', JSON.stringify(state));
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem('todos', JSON.stringify(state));
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleComplete } = todosSlice.actions;
export default todosSlice.reducer;
