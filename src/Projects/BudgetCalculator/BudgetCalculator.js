import React, { useEffect, useState } from 'react'
import './budgetCalculator.css'
import { v4 as uuid } from 'uuid';
import BudgetList from './BudgetList';
import BudAlert from './BudAlert';
import BudForm from './BudForm';

const initialValue = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []

const BudgetCalculator = () => {
    const [expenses, setExpenses] = useState(initialValue)
    const [alert, setAlert] = useState({show: false, type: '', text: ''})
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [amount, setAmount] = useState('')
    const [charge, setCharge] = useState('')

    const handleAlert = (type, text) =>{
        setAlert({show: true, type, text})
        setTimeout(()=>{
            setAlert({show: false, type: '', text: ''})
        }, 2000)
    }

    const handleCharge = (e) =>{
        setCharge(e.target.value)
    }

    const handleAmount = (e) =>{
        setAmount(e.target.value)
    }

    const handleSubmit = (e) =>{
          e.preventDefault()
          if(charge !== '' && amount > 0){
            if(isEditing){
                let tempExpenses = expenses.map((item)=>{
                    return item.id === editId ? {...item, charge, amount} : item
                })
                setExpenses(tempExpenses)
                setIsEditing(false)
                setEditId(null)
                handleAlert('success', 'Item is edited successfully')
            }else{
                const singleExpense = {id: uuid(), charge, amount}
                setExpenses([...expenses, singleExpense])
                handleAlert('success', 'Item added successfully')
            }
             setAmount('')
             setCharge('')
          }else{
             handleAlert('danger', 'Please fill up the form with appropriate value')
          }
    }

    const removeAll = () =>{
        setExpenses([])
        handleAlert('danger', 'All Items are deleted')
    }

    const deleteItem = (id) =>{
        setExpenses(expenses.filter(expense => expense.id !== id))
        handleAlert('danger', 'One Item is deleted')
    }

    const editItem = (id) =>{
        const specificId = expenses.find(expense => expense.id === id)
        setIsEditing(true)
        setEditId(id)
        setAmount(specificId.amount)
        setCharge(specificId.charge)
    }

    useEffect(()=> {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

  return (
    <div className='budget-main-container'>
        {alert.show && <BudAlert {...alert}/>}
        <h1 className='budget-title'>Budget Calculator</h1>
        <BudForm 
            isEditing={isEditing} 
            amount={amount} 
            handleAmount={handleAmount} 
            charge={charge} 
            handleCharge={handleCharge} 
            handleSubmit={handleSubmit} 
        />
        <div className='budget-container'>
           <BudgetList expenses={expenses} removeAll={removeAll} deleteItem={deleteItem} editItem={editItem} />
        </div>
        <h1 className='bud-total'> Total spending: <span>$
            {expenses.reduce((acc, cur)=>{
                return (acc += parseInt(cur.amount))
            }, 0)}
        </span>
        </h1>
    </div>
  )
}

export default BudgetCalculator