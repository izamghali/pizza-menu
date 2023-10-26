import React from 'react';

export const List = () => {

    const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return(
        <>
            {testArr.map(added => {
                return <div className='
                border-2 border-black
                p-4 rounded-md
            '>
                {/* img container */}
                <div>
                    <img/>
                </div>

                {/* content container */}
                <div>
                    <h4>{added}. American Classic</h4>
                    <span>Some toppings</span>
                    <p>$99</p>
                </div>
            </div>
            })}
        </>
    )
}