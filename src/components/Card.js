import React from 'react';

export const Card = () => {

    const cards = [
        {
           title: 'Burger Classic',
           price: 12,
           img: 'https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       },
       {
           title: 'Cheessy Pizza',
           price: 8,
           img: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       },
       {
        title: 'Pineapple Pizza',
        price: 8,
        img: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }, 
        {
            title: 'Cheese Burger',
            price: 8,
            img: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Cheese Burger',
            price: 8,
            img: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Cheese Burger',
            price: 8,
            img: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    ]

    const handleOrder = () => {
        document.getElementById('toping').style.display = 'flex';
    }

    return (
        <>
            {cards.map(card => {
                return <div className='
                    relative group 
                '>
                    <div className='
                    max-w-xs p-4 space-y-4 rounded-md 
                    border-2 border-black bg-black opacity-85
                    lg:group-hover:translate-y-2 lg:group-hover:translate-x-2 duration-300
                    '>
                        <div className='
                            h-64 
                        '>
                            <img className='object-fit' src={card.img}/>
                        </div>
                        <h3 className='text-2xl font-semibold '>{card.title}</h3>
                        <p className=''>${card.price}</p>
                        <button className='btn border-2'>ORDER</button>
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
                            <img className='object-fit' src={card.img}/>
                        </div>
                        <h3 className='text-2xl font-semibold text-left'>{card.title}</h3>
                        <p className='text-left'>${card.price}</p>
                        <button 
                            className='btn 
                            border-2 border-lightGreen bg-white
                            duration-200 hover:bg-lightGreen
                            text-black'

                            onClick={handleOrder}

                        >ORDER</button>
                    </div>

                </div>
            })}
        </>
    )
}
