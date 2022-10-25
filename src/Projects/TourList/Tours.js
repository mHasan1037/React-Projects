import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
        <h1 className='headline'>{tours.length} Tours Here</h1>
        {tours.map((tour)=>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
    </div>
  )
}

export default Tours