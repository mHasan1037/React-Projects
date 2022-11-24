import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import './tabsButtons.css'

const url = 'https://course-api.com/react-tabs-project'

const TabsButtons = () => {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [count, setCount] = useState(0)

    const fetchData = async () =>{
        const res = await fetch(url)
        const newJobs = await res.json()

        setJobs(newJobs)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    if(loading){
        return <h2>Loading...</h2>
    }

    const {title, dates, duties, company} = jobs[count]

  return (
    <section className='tabs-container'>
        <div className='tabs-btns'>
            {jobs.map((item, idx)=>{
                return <button className={`btn ${count === idx && 'active'}`} onClick={()=> setCount(idx)}>{item.company}</button>
            })}
        </div>
        <div className='tabs-content'>
            <h2>{title}</h2>
            <p>{dates}</p>
            <h5>{company}</h5>
            <div className='tab-para'>
                {duties.map((duty)=>{
                    return <p><FaAngleDoubleRight /> {duty}</p>
                })}
            </div>
        </div>
    </section>
  )
}

export default TabsButtons