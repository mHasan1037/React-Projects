import React, { useState } from 'react'
import style from './newTodo.module.css'

const NewTodo = (props) => {
    const [todo, setTodo] = useState({title: '', desc: ''})
    const { title, desc } = todo

    const handleChange = (event) =>{
        const name = event.target.name;
        setTodo((prevTodo)=>{
        return {...prevTodo, [name]: event.target.value}
        })
    }

   const handleSubmit = (event) =>{
       event.preventDefault();
       props.onAddTodo(todo)
       setTodo({title: '', desc: ''})
   }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style['form-field']}>
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' name='title' onChange={handleChange} value={title} />
        </div>
        <div className={style['form-field']}>
            <label htmlFor='desc'>Desc:</label>
            <textarea type='text' id='desc' name='desc' onChange={handleChange} value={desc} />
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo