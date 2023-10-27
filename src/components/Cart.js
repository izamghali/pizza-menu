import React, {useState} from 'react';
import { List } from './List';

export const Cart = () => {

    const [ mouseHover, setMouseHover ] = useState(false);

    return (
        <>
            <div className='
                bg-brown ( NOTE:  background temporarily white)
                lg:w-96 lg:h-screen
                py-6 px-6
                flex flex-col justify-between
                
                // mobile
                w-full h-2/6 sm:h-2/5
                lg:static fixed bottom-0 left-0
            ' id='cart'>
                <h2 className='heading-text'>Cart</h2>

                <div className='
                    
                    h-full my-3 overflow-scroll
                    space-y-3
                ' id='list-container'>
                    <List/>
                </div>

                <button 
                    className='btn
                        px-4 bg-lightGreen 
                        flex justify-between items-center space-x-10
                        duration-200 hover:animate-horizontal-shake 
                    '
                    onMouseEnter={() => {setMouseHover(true)}}
                    onMouseLeave={() => {setMouseHover(false)}}
                >
                    <span className=''>{mouseHover ? 'PURCHASE' : 'TOTAL'}</span>
                    <span className='text-lg font-light'>Price</span>
                </button>
            </div>
        </>
    )
}