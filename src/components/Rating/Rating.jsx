import React from 'react'
import { useState } from 'react'
import { ThankYou } from '../ThankYou/ThankYou';

import './rating.css'



export const Rating = () => {
  
  const [userSelectedRating, setUserSelectedRating] = useState();
  const [submitted, setSubmitted] = useState(false);

  function handleClickedRating(rating) {
    setUserSelectedRating(rating)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(userSelectedRating)
    setSubmitted(true)

  };
  
  return (
    <div>
      {submitted ? 
        <ThankYou data={userSelectedRating}/>
        :
        <div className='rating-panel'>
          <div className="img-circle">
            <svg 
              className='star-img'
              width="17" 
              height="16" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" 
              fill="#FC7614"/>
            </svg>
          </div>
          <h1 className='panel-title'>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appereciated to help us improve our offering!</p>
          
          <form className="rate-form" onSubmit={submitHandler}>
            <div className='rate-options'>
              {[1, 2, 3, 4, 5].map((rating) => (
              <button className="rate-circle" id={rating} key={rating} value={rating} type='button' onClick={event => handleClickedRating(event.target.value)}>{rating}</button>
                ))}
            </div>
            
            <button className='btn-submit' type='submit' >SUBMIT</button>
          </form>
          
        </div>
      }
    </div>
  )
}
