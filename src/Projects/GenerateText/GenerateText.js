import React, { useState } from 'react'
import generateData from './generateTextData'
import './generateStyle.css'

const GenerateText = () => {
    const [lorem, setLorem] = useState([])
    const [count, setCount] = useState(0)

    const handleSubmit = (e) =>{
        e.preventDefault()
        let amount = count
        if(count <= 0){
            amount = 1
        }else if(count >= 8){
            amount = 8
        }
        setLorem(generateData.slice(0, amount))
    }


  return (
    <section className='generate-container'>
        <h2 style={{textAlign: 'center'}}>Get your custom Lorem text.</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='amount'>Amount:</label>
            <input type='number' min='0' value={count} onChange={(e)=> setCount(e.target.value)} />
            <button type='submit'>Generate</button>
        </form>
        <div className='lorem-para'>
            {lorem.map((data, idx)=>{
                return <p key={idx}>{data}</p>
            })}
        </div>
    </section>
  )
}

export default GenerateText