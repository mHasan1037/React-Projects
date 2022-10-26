import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Todos from './Todos'
import NewTodo from './NewTodo'

import style from './todoHome.module.css'


const TodoHome = () => {
    const [todos, setTodos] = useState([])

    const removeTodo = (id) =>{
        const newTodo = todos.filter((todo) => todo.id !== id)
        setTodos(newTodo)
    }

    const handleAddTodo = (todo) =>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {id: uuidv4(), todo}]
        })
    }

  return (
    <div className={style.container}>
        <h1 style={{color: 'black', textAlign: 'center', marginBottom: '20px'}}>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo} />
        <Todos todos={todos} onRemoveTodo={removeTodo} />
    </div>
  )
}

export default TodoHome