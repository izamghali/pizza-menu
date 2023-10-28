import React from 'react';

export const List = (props) => {

    const {
        addedCart

    } = props;

    const testArr = [1, 2, 3, 4, 5]

    return(
        <>
        {addedCart.map(menu => {
            return <div className='
                 bg-white
                p-4 rounded-md
            '
                onClick={() => {console.log(addedCart)}}
            >
                {/* img container */}
                <div>
                    <img/>
                </div>

                {/* content container */}
                <div className='flex lg:flex-col flex-row justify-between'>
                    <div>
                        <h4 className='font-semibold text-lg'>{menu}</h4>
                        <span>Some toppings</span>
                    </div>
                    <p>$99</p>
                </div>
            </div>
        })}
        </>
    )
}