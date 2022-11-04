import React from 'react'
import './foodPaginations.css'

const FoodPaginations = ({ foodPerPage, totalPage, onPageChange }) => {
    const pageNumber = []
    for(let i = 1; i <= Math.ceil(totalPage / foodPerPage); i++){
        pageNumber.push(i)
    }
  return (
    <nav className='page-navigation'>
       <ul className='page-ul'>
          {pageNumber.map((number)=>(
            <li>
                <a href='#' onClick={()=> onPageChange(number)}>{number}</a>
            </li>
          ))}
       </ul>
    </nav>
  )
}

export default FoodPaginations