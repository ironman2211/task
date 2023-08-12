import React from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

const Todo = () => {
  return (
    <div className=" w-full h-fit px-10 py-16 ">
    <div className='w-2/4 mx-auto '>
    <h1 className="text-3xl font-bold mb-10">Tasks For Today</h1>

    <TodoForm />
    <TodoList />
    </div>
  </div>
  )
}

export default Todo
