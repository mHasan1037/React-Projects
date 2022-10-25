import React, { useState } from 'react'

const Tour = ({ id, name, image, info, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false)
  return (
    <div className='tour-box'>
        <img src={image} className='tourImage' />
        <div className='tour-info'>
            <div className='tour-name'>
                <h2>{name}</h2>
                <p>{price}</p>
            </div>
            <p>
                {readMore ? info : `${info.substring(0, 200)}... `} 
               <button className='readmore-btn' onClick={()=> setReadMore(!readMore)}>{readMore ? '...show less' : 'show more'}</button>
            </p>
        </div>
        <button onClick={()=> removeTour(id)} className='tour-not-interested'>Not Interested</button>
    </div>
  )
}

export default Tour