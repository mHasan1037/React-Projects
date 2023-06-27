import React from 'react'

const Button = ({text, onClick, customeClass}) => {
  return (
    <button
       onClick={onClick}
       className={customeClass}
    >{text}
    </button>
  )
}

export default Button