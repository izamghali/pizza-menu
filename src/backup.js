
// Card JSX
{cards.map(card => {
    return <div 
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
                <img className='object-fit' src={card.img}/>
            </div>
            <h3 className='text-2xl font-semibold '>{card.title}</h3>
            <p className=''>${card.price}</p>
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
                <img className='object-fit' src={card.img} alt={card.title}/>
            </div>
            <h3 className='text-2xl font-semibold text-left'>{card.title}</h3>
            <p className='text-left'>${card.price}</p>
            {/* <button 
                className='btn 
                border-2 border-lightGreen bg-white
                duration-200 hover:bg-lightGreen
                text-black'
            >ORDER</button> */}
        </div>
    </div>
})}

// List mapping JSX
{addedCart.map(menu => {
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
                <h4 className='font-semibold text-lg'>{title}</h4>
                <span>Some toppings</span>
            </div>
            <p>$99</p>
        </div>
    </div>
})}