import React from 'react'

const BdPerson = ({ data, deleteData }) => {
    const {id, name, age, image} = data
  return (
    <div className='profile-container'>
       <div className='profile'>
            <img className='img' src={image} />
            <div>
                <h2>{name}</h2>
                <p>{age}</p>
            </div>
       </div>
       <button className='closeBtn' onClick={()=> deleteData(id)}>X</button>
    </div>
  )
}

export default BdPerson