import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai'
import { removeTodo, editTodo, toggleComplete } from '../features/todo/todosSlice';

const  TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  useState(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('todos', todos);
    }, [todos]);
const editTodoHandle = (todo) => {
    console.log('todo', todo);
    dispatch(editTodo({ id: todo.id, text: prompt('Edit task:', todo.text) || todo.text }))
}

  return (
    <ul className='flex w-full flex-col gap-4 py-5  h-full '>
      {todos.map(todo => (
        <li key={todo.id} className=' p-4 border-2 rounded-xl flex items-center justify-between font-mono' >
         <div className='flex gap-4 text-xl'>


          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete({ id: todo.id }))}
            />
          <span className={todo.completed ? 'completed' : ''} >{todo.text}</span>
            </div>
          <div className='flex gap-2'>

          <button className=' bg-orange-400 text-white  z-50 h-7 text-sm py-1 px-2 hover:scale-105 rounded-md' onClick={() =>editTodoHandle(todo)}>
            <FiEdit/>
          </button>
          <button className=' bg-red-600 text-white  z-50 h-7 text-sm py-1 px-2 hover:scale-105 rounded-md' onClick={() => dispatch(removeTodo(todo.id))}>
            <AiFillDelete/>
          </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
