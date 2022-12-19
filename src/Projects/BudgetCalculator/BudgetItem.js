import React from 'react'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

const BudgetItem = ({expense, deleteItem, editItem}) => {
    const {id, amount, charge} = expense
  return (
    <li className='budget-Item'>
        <div className='bud-amountCharge'>
            <span className='bud-charge'>{charge}</span>
            <span className='bud-amount'>${amount}</span>
        </div>
        <div className='bud-itmeBtns'>
            <button className='bud-editBtn' onClick={()=> editItem(id)}><AiFillEdit /></button>
            <button className='bud-DeleteBtn' onClick={()=> deleteItem(id)} ><AiFillDelete /></button>
        </div>
    </li>
  )
}

export default BudgetItem