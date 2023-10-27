import React from 'react';

export const TopingContainer = () => {

    const exitTopings = () => {
        alert('you clicked the bg')
    }

    return(
        // TODO: bg-layer
        <div 
            className='
                absolute top-0 bg-black/[0.7] z-0 w-full h-full
                flex items-center justify-center
            '>

            {/* NOTE:  toping container*/}
            <div 
                className='
                    w-96 bg-slate-50 
                    p-4 
                    flex flex-col justify-between gap-8
                '
            >
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

                    {/* mock data */}
                    <form className=''>
                        {/* chechbox 1 */}
                        <div className='flex space-x-2 items-center'>
                            <input
                                className='w-4 h-4 border-[1.5px] border-neutral-600 rounded-sm checked:bg-greeny appearance-none'
                                type='checkbox'
                            />
                            <label className='text-neutral-600'>Placeholder toping</label>
                        </div>
                    </form>
                    
                </div>

                <button className='rounded-xl py-4 text-xl font-bold bg-redBurn'>
                    Add to Cart
                </button>

            </div>
            
        </div>
    )
}