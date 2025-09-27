const getCartFromLS = () => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        const parsedData = JSON.parse(storedCart);
        return parsedData;
    }
    else {
        return [];
    }
}
const addCartItemToLS = (id) => {
    const cart = getCartFromLS();//get the cart 
    // cart.push(id);//add the if of item to cart 
    const newCart = [...cart, id];
    //save new cart to local Storage
    saveCartToLS(newCart)

}

const removeFromLS =(id)=>{
    const storedCart = getCartFromLS()
    const remainingCart = storedCart.filter(storedid => storedid !== id );
    saveCartToLS(remainingCart);
}

const saveCartToLS = (cart) => {
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringCart)
}

export { getCartFromLS, addCartItemToLS, saveCartToLS, removeFromLS }