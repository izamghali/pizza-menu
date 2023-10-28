import React, {useState} from 'react';
import { List } from './List';

export const Cart = (props) => {

    const {
        addedCart, addToCartBtnClicked
    } = props;

    const [ mouseHover, setMouseHover ] = useState(false);

    return (
        <>
            <div className='
                bg-amber-950 ( NOTE:  background temporarily white)
                lg:w-96 2xl:w-[35rem] lg:h-screen
                py-6 px-6
                flex flex-col justify-between
                
                // mobile
                w-full h-2/6 sm:h-2/5
                lg:static fixed bottom-0 left-0
            ' id='cart'>
                <h2 className='heading-text text-white'>Cart</h2>

                <div className='
                    
                    h-full my-3 overflow-scroll
                    space-y-3 flex items-center
                ' id='list-container'>
                    {/* {addedCart.map(menu => {
                        return <List
                            title={menu.title}
                        />
                    })} */}
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
                id="total-btn">
                    <span className=''>{mouseHover ? 'PURCHASE' : 'TOTAL'}</span>
                    <span className='text-lg font-light'>Price</span>
                </button>
            </div>
        </>
    )
}