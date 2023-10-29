import React, {useState} from 'react';
import { List } from './List';

export const Cart = ({ addedCart, addToCartBtnClicked }) => {
    const [ mouseHover, setMouseHover ] = useState(false);

    let totalPrice = 0;
    for (let counter = 0; counter < addedCart.length; counter++) {
        const currentValue = addedCart[counter].price;
        totalPrice += currentValue;
    }

    function handlePurchase() {
        localStorage.setItem('cart', JSON.stringify(addedCart))
        localStorage.setItem('totalPrice', totalPrice)
        alert('Congratulations! Your order has been stored in localStorage!')
    }

    return (
        <>
            <div className='
                bg-amber-950
                lg:w-96 2xl:w-[35rem] lg:h-screen
                md:py-6 md:px-6 px-3 py-3
                flex flex-col justify-between
                
                // mobile
                w-full h-2/4 sm:h-3/5
                lg:static fixed bottom-0 left-0
            ' id='cart'>
                <h2 className='heading-text text-white'>Cart</h2>

                <div className='
                    
                    h-full my-3 overflow-scroll
                    space-y-3 flex items-center
                ' id='list-container'>
                    { addedCart.length > 0 && addToCartBtnClicked ? 
                    <List addedCart={addedCart} /> 
                    : <h1 className='font-normal text-xl text-white'>The shopping cart is still empty, click item to add to cart</h1> }
                </div>

                <button 
                    className='btn 
                        px-4 bg-lightGreen 
                        flex justify-between items-center space-x-10
                        duration-300 hover:px-6
                    '
                    onMouseEnter={() => {setMouseHover(true)}}
                    onMouseLeave={() => {setMouseHover(false)}}
                    onClick={handlePurchase}
                id="total-btn">
                    <span className=''>{mouseHover ? 'PURCHASE' : 'TOTAL'}</span>
                    <span className='text-lg font-bold'>${totalPrice}</span>
                </button>
            </div>
        </>
    )
}