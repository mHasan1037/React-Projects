import React from 'react'
import ReviewSlide from './ReviewSlide'
import './reviewSlider.css'

const ReviewSlider = () => {
  return (
    <section className='slider-body'>
         <h1 style={{textAlign: 'center', fontSize: '30px', color: 'rgb(45, 46, 44)'}}>Review Slider</h1>
         <div className='underline'></div>
         <ReviewSlide />
    </section>
  )
}

export default ReviewSlider