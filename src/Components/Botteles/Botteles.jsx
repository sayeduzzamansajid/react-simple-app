import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css'
import { addCartItemToLS, getCartFromLS, removeFromLS } from '../../utils/localStorage';
import Cart from '../cart/Cart';




const Botteles = ({ bottelsePromise }) => {
    const [cart, setCart] = useState([]);
    const bottles = use(bottelsePromise)

    //useEffect 
    useEffect(() => {
        const storedCartIds = getCartFromLS()
        // console.log(storedCartIds, bottles)
        const storedCart = []
        for (const id of storedCartIds) {
            // console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id === id)
            if (cartBottle) {
                storedCart.push(cartBottle)
            }
        }
        setCart(storedCart)
    }, [bottles])

    const handleAddTOCart = (bottle) => {

        const newAddToCart = [...cart, bottle]
        setCart(newAddToCart);

        //save the bottle id in the Local Storage
        addCartItemToLS(bottle.id)

    }


    const handleRemoveFromCart = (id) => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id)
    }


    return (
        <div>
            <h3>Bottles : {bottles.length} </h3>
            <p>Added to cart : {cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle handleAddTOCart={handleAddTOCart} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Botteles;