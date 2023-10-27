import React from 'react';

export const TopingContainer = () => {

    return(
        // TODO: bg-layer
        <div className='
            absolute top-0 z-0 w-full h-full
            flex items-center justify-center
        '>

            <div className='
                bg-black
            '>              
            </div>

            {/* NOTE:  toping container*/}
            <div className='
                h-96 w-96 bg-violet-400 opacity-100 
                p-4
            '>
                <h1>Topings</h1>

            </div>

            
        </div>
    )
}