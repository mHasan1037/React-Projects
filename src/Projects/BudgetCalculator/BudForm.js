import React from 'react'

const BudForm = ({isEditing, handleSubmit, amount, handleAmount, charge, handleCharge}) => {
  return (
    <form className='bud-form' onSubmit={handleSubmit}>
        <div className='bud-formBox'>
            <div className='form-control'>
                <label htmlFor='charge'>Charge</label>
                <input type='text' value={charge} placeholder='e.g. rent' onChange={handleCharge}/>
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>Amount</label>
                <input type='text' value={amount} placeholder='e.g. amount' onChange={handleAmount}/>
            </div>
        </div>
        <button className='bud-submit'>{isEditing ? 'Edit' : 'Submit'}</button>
    </form>
  )
}

export default BudForm