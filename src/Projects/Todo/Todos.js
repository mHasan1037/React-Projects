import React from 'react'
import Todo from './Todo'
import style from './todos.module.css'

const Todos = (props) => {

  if(props.todos.length === 0){
    return (
      <section className={style.emptyTodos}>
         <h1>No Todo Listed</h1>
      </section>
    )
  }

  return (
    <section className={style.todos}>
        {props.todos.map((todo) => <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveTodo={props.onRemoveTodo} />)}
    </section>
  )
}

export default Todos