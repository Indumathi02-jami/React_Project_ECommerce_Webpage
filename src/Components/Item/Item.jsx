import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`} onClick={window.scroll(0,0)}><img src={props.image} alt="" /></Link>
        
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-new-price">
                ${props.new_price}
            </div>
            <div className="item-old-peice">
                ${props.old_price}
            </div> 
        </div>
    </div>
  )
}

export default Item