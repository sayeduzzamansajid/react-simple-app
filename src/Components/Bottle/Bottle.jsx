import React from 'react';
import './bottle.css'

const Bottle = ({bottle, handleAddTOCart}) => {
    
    return (
        <div className='bcard'>
            <img className='img' src={bottle.img} alt="" />
            <h3>Name: {bottle.name}</h3>
            <p>Price $ { bottle.price}</p>
            <p>Available : {bottle.stock} remaining </p>
            <button onClick={()=>handleAddTOCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;