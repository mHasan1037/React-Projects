import React from 'react'
import './categoryButton.css'

const CategoryButtons = ({ categories, filterCategory }) => {
  return (
    <div className='category-btn-container'>
        {categories.map((category)=>(
            <button className='category-btn' onClick={()=> filterCategory(category)}>{category.toUpperCase()}</button>
        ))}
    </div>
  )
}

export default CategoryButtons