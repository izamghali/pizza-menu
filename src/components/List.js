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
                        <h4 className='font-semibold text-lg'>{menu.title}</h4>
                        {menu.topings.map(toping => {
                            return <span className='text-slate-600'>
                                { toping }
                                {menu.topings.length > 1 && menu.topings[menu.topings.length - 1] !== toping ? ', ' : ''}
                            </span>})
                        }
                    </div>
                    <p className='font-semibold text-lg'>${menu.price}</p>
                </div>
            </div>
        })}
        </>
    )
}