import React, { useEffect, useState } from 'react'
import Tours from './Tours'
import './tour.css'


const url = 'https://course-api.com/react-tours-project'


const TourDisplay = () => {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const removeTour = (id) =>{
        const newTour = tours.filter((tour) => tour.id !== id);
        setTours(newTour)
    }

    const fetchTours = async () =>{
        setLoading(true)

        try{
           const response = await fetch(url);
           const tours = await response.json()
           setLoading(false)
           setTours(tours)
        }catch(error){
            setLoading(false)
            console.log('fetching problem')
        }
    }

    useEffect(()=>{
        fetchTours()
    }, [])


    if(loading){
        return <main className='tour-main-container'>
            <h1 className='headline'>Loading...</h1>
        </main>
    }

    if(tours.length === 0){
        return <main className='tour-main-container'>
            <h1 className='headline'>No Tour Left</h1>
            <button className='tour-refresh-btn' onClick={()=> fetchTours()}>Refresh</button>
        </main>
    }

  return (
    <main className='tour-main-container'>
        <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default TourDisplay