import React from 'react'

const BudAlert = ({type, text}) => {
  return (
    <p className={`budAlert ${type}`}>{text}</p>
  )
}

export default BudAlert