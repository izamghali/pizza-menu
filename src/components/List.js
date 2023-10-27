import React from 'react';

export const List = () => {

    const testArr = [1, 2, 3, 4, 5]

    return(
        <>
            {testArr.map(added => {
                return <div className='
                 bg-white
                p-4 rounded-md
            '>
                {/* img container */}
                <div>
                    <img/>
                </div>

                {/* content container */}
                <div className='flex lg:flex-col flex-row justify-between'>
                    <div>
                        <h4>{added}. American Classic</h4>
                        <span>Some toppings</span>
                    </div>
                    <p>$99</p>
                </div>
            </div>
            })}
        </>
    )
}