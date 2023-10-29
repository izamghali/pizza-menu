import React from 'react';

export const List = ({addedCart}) => {

    return(
        <>
        {addedCart.map(menu => {
            return <div className='bg-white
                p-4 rounded-md 
                lg:block flex gap-2 sm:flex-row-reverse justify-between
                lg:h-auto sm:h-[10rem] max-h-[20rem]
            '
                onClick={() => {console.log(addedCart)}}
            >
                {/* img container */}
                <div className='lg:w-full  min-w-[50%] lg:h-[5rem] h-auto sm:block hidden'>
                    <img className='w-full h-full object-cover lg:rounded-tl-md lg:rounded-br-none rounded-tr-md rounded-br-md' src={menu.img}/>
                </div>

                {/* content container */}
                <div className='flex flex-col'>
                    <h4 className='font-semibold text-lg'>{menu.title}</h4>
                    <div className='lg:block'>
                        <div className=''>
                            {menu.topings.map(toping => {
                                return <span className='text-slate-600'>
                                    { toping }
                                    {menu.topings.length > 1 && menu.topings[menu.topings.length - 1] !== toping ? ', ' : ''}
                                </span>})
                            }
                        </div>
                        <p className='font-semibold text-lg lg:text-right'>${menu.price}</p>
                    </div>
                </div>
            </div>
        })}
        </>
    )
}