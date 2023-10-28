import React, { useState } from 'react';

export const TopingModal = () => {

    const exitTopings = () => {
        document.getElementById('toping').style.display = 'none';
    }

    const topings = [
        `Avocado ( $${1} )`, `Broccoli ( $${1} )`, `Onions ( $${1} )`, `Zucchini ( $${1} )`, 
        `Lobster ( $${2} )`, `Oyster ( $${2} )`, `Salmon ( $${2} )`, `Tuna ( $${2} )`,
        `Bacon ( $${3} )`, `Duck ( $${3} )`, `Ham ( $${3} )`, `Sausage ( $${3} )`
    ]

    return(
        <div 
            className='
                absolute top-0 left-0 bg-black/[0.7] z-0 w-full h-full
                items-center justify-center hidden
            ' id='toping'>

            <div 
                className='
                    w-[30rem] bg-slate-50 
                    p-4 
                    flex flex-col justify-between gap-8
                '>
                {/* content container */}
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-semibold'>Topings</h1>
                        <span onClick={exitTopings}>
                            <svg class="w-4 hover:cursor-pointer bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </span>
                    </div>

                    <form className='grid grid-cols-2 space-y-1'>
                        {/* chechbox 1 */}
                        {topings.map(toping => {
                            return <div className='flex space-x-2 items-center'>
                                <input
                                    className='w-4 h-4 border-[1.5px] border-neutral-600 rounded-sm checked:bg-greeny appearance-none'
                                    type='checkbox'
                                />
                                <label className='text-neutral-600'>{toping}</label>
                            </div>
                        })}
                    </form>
                </div>

                <button className='
                    rounded-xl py-4 text-xl font-bold bg-redBurn 
                    hover:-translate-y-1 duration-300
                '>
                    Add to Cart
                </button>

            </div>
        </div>
    )
}