import React, { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './AutoSliderData'
import './autoSlider.css'

const AutoSlider = () => {
    const [people, setPoeple] = useState(data)
    const [index, setIndex] = useState(0)

    useEffect(()=>{
       let lastIndex = people.length - 1

       if(index < 0){
        setIndex(lastIndex)
       }
       if(index > lastIndex){
        setIndex(0)
       }
    }, [index, people])

    useEffect(()=>{
           let slider = setInterval(()=>{
             setIndex(index + 1)
           }, 2000)

           return () => clearInterval(slider)
    }, [index])

  return (
    <section className='auto-section'>
        <h1>Auto Slider</h1>
        <div className='section-center'>
            {people.map((person, personIndex)=>{
                const {id, image, name, title, quote} = person

                let position = "nextSlide"

                if(personIndex === index){
                    position = 'activeSlide'
                }

                if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
                    position = 'lastSlide'
                }

                return (
                    <article className={position} key={id}>
                        <img src={image} className='img' />
                        <h4>{name}</h4>
                        <p>{title}</p>
                        <p>{quote}</p>
                        <FaQuoteRight />
                    </article>
                )
            })}
            <button className='autoSlideBtn autoPrev' onClick={()=> setIndex(index - 1)}><FiChevronLeft /></button>
            <button className='autoSlideBtn autoNext' onClick={()=> setIndex(index + 1)}><FiChevronRight /></button>
        </div>
    </section>
  )
}

export default AutoSlider