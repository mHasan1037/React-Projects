import React, { useState } from 'react'
import people from './reviewData'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const ReviewSlide = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]

    const checkNumber = (number) =>{
        if(number > people.length - 1){
            return 0
        }
        if(number < 0){
            return people.length - 1;
        }

        return number;
    }

    const nextPerson = () =>{
        setIndex((index)=>{
            let newIndex = index + 1;

            return checkNumber(newIndex)
        })
    }

    const prevPerson = () =>{
        setIndex((index)=>{
            let newIndex = index - 1;

            return checkNumber(newIndex)
        })
    }

    const randomPick = () =>{
        let randomNumber = Math.floor(Math.random() * people.length)
        
        if(randomNumber === index){
            randomNumber = index - 1
        }
        
        return checkNumber(setIndex(randomNumber))
    }


  return (
    <div className='reviewSlide-container'>
        <div className='review-content'>
            <img src={image} className='review-img' />
            <h1 style={{textTransform: 'uppercase'}}>{name}</h1>
            <h4><i>{job}</i></h4>
            <p style={{margin: '15px'}}>{text}</p>
        </div>
        <div className='review-btns'>
            <button className='review-btn' onClick={prevPerson}><FaChevronLeft /></button>
            <button className='review-btn' onClick={nextPerson} ><FaChevronRight /></button>
        </div>
        <button className='random-btn' onClick={randomPick}>Random</button>
    </div>
  )
}

export default ReviewSlide