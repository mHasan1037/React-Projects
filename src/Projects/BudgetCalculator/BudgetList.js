import React from 'react'
import BudgetItem from './BudgetItem'

const BudgetList = ({expenses, removeAll, deleteItem, editItem}) => {
  return (
    <>
        <ul>
           {expenses.map((expense)=>{
              return <BudgetItem key={expense.id} expense={expense} deleteItem={deleteItem} editItem={editItem} />
           })}
        </ul>
        {expenses.length > 0 && (
            <button className='clearBtn' onClick={()=> removeAll()}>Clear Expenses</button>
        )}
    </>
  )
}

export default BudgetList