import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return(
    <div className='newsletter'>
        <h1>Get Exclusive Offers On your Email</h1>
        <p>Subscribe to our newsletter ans stay updated</p>
        <div>
            <input type="text" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter