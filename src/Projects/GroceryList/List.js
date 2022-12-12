import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({items, editItem, deleteItem}) => {
  return (
    <div className='grocery-list-container'>
        {items.map((item)=>{
           const {title, id} = item
           return (
            <article key={id} className='grocery-item'>
                <p>{title}</p>
                <div className='btn-container'>
                    <button className='edit-btn' onClick={()=> editItem(id)}><FaEdit /></button>
                    <button className='delete-btn' onClick={()=> deleteItem(id)}><FaTrash /></button>
                </div>
            </article>
           )
        })}
    </div>
  )
}

export default List