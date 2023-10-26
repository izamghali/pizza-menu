import React, {useState} from 'react';
import { List } from './List';

export const Cart = () => {

    const [ mouseHover, setMouseHover ] = useState(false);

    return (
        <>
            <div className='
                bg-white ( NOTE:  background temporarily white)
                border-4 border-yellow-400
                lg:w-96 lg:h-screen
                py-6 px-6
                flex flex-col justify-between
                
                // mobile
                w-full h-2/6 sm:h-2/5
                lg:static absolute bottom-0 left-0
            '>
                <h2 className='heading-text'>Cart</h2>

                <div className='
                    border-4 border-red-500
                    h-full my-3 overflow-scroll
                    space-y-3
                '>
                    <List/>
                </div>

                <button 
                    className='btn
                        border-2 border-redBurn bg-redBurn px-4
                        flex justify-between items-center space-x-10
                      hover:bg-white duration-200
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