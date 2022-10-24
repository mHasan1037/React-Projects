import React, { useState } from 'react'
import BdData from './BdData'
import BdPerson from './BdPerson'
import './BdStyle.css'


const BirthReminder = () => {
    const [datas, setData] = useState(BdData)

    const deleteData = (id) =>{
        const newData = datas.filter((data)=> data.id !== id);
        setData(newData)
    }

   if(datas.length === 0){
     return <div className='container'>
        <h1 className='headline'>No more birthdays</h1>
        <button className='clear-all' onClick={()=> setData(BdData)}>See All</button>
     </div>
   }

  return (
    <div className='container'>
        <h1 className='headline'>{datas.length} Birthdays Today</h1>
       {datas.map((data)=>{
        return <BdPerson data={data} deleteData={deleteData} />
      })}

      <button className='clear-all' onClick={()=> setData([])}>Clear All</button>
    </div>
  )
}

export default BirthReminder