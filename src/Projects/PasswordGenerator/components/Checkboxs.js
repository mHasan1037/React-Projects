import React from 'react'

const Checkboxs = ({title, state, onChange}) => {
  return (
    <div style={{display: 'flex', gap: '5px'}}>
        <input 
            type='checkbox'
            checked = {state}
            onChange={onChange}
        />
        <label>
            {title}
        </label>
    </div>
  )
}

export default Checkboxs