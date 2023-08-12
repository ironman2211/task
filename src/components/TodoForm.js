import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todosSlice';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo({ text: input, completed: false, id: Date.now() }));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className=' w-full h-14 rounded-xl flex relative '>
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={e => setInput(e.target.value)}
        className='w-full h-full px-5 rounded-xl border-2'
      />
      <button type="submit" className='absolute  right-2 top-2 bottom-1 bg-gray-900 text-white z-50 h-10 hover:scale-105 px-7 rounded-md'>Add</button>
    </form>
  );
};

export default TodoForm;
