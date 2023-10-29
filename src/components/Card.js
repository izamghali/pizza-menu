import React from 'react';
import { generateID } from '../helpers';

export const Card = (props) => {

    const {
        addedCart, setAddedCart, 
        setAddtoCartBtnClicked,
        setMenuToAdd,

        title, price, img

    } = props;

    function handleOrder() {

        document.getElementById('toping').style.display = 'flex';

        const menuToAdd = {
            title: title,
            price: price,
            id: generateID(),
        } 

        setMenuToAdd(menuToAdd);

    }

    return (
        <>
            <div 
                    className='
                        relative group hover:cursor-pointer
                    '    
                    onClick={handleOrder}
                >
                    {/* NOTE: SHADOW */}
                    <div className='
                    max-w-xs p-4 space-y-4 rounded-md 
                    border-2 border-black bg-black opacity-85
                    lg:group-hover:translate-y-2 lg:group-hover:translate-x-2 duration-300
                    '>
                        <div className='
                            h-64 overflow-hidden
                        '>
                            <img className='object-fit' src={img}/>
                        </div>
                        <h3 className='text-2xl font-semibold '>{title}</h3>
                        <p className=''>${price}</p>
                        {/* <button className='btn border-2'>ORDER</button> */}
                    </div>

                    <div className='
                        bg-white border-2 border-black rounded-md
                        absolute top-0 left-0 lg:group-hover:-translate-y-2 lg:group-hover:-translate-x-2 duration-300
                        p-4 space-y-4 
                    '>
                        <div className='
                            h-64 overflow-hidden
                            rounded-md
                        '>
                            <img className='object-fit' src={img} alt={title}/>
                        </div>
                        <h3 className='text-2xl font-semibold text-left'>{title}</h3>
                        <p className='text-left'>${price}</p>
                        {/* <button 
                            className='btn 
                            border-2 border-lightGreen bg-white
                            duration-200 hover:bg-lightGreen
                            text-black'
                        >ORDER</button> */}
                    </div>
            </div>
        </>
    )
}
