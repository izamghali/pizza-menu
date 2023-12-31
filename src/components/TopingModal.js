import React, { useState } from 'react';

export const TopingModal = (props) => {

    const { 
        setAddedCart, menuToAdd, 
        setAddtoCartBtnClicked,
        selectedTopings, setSelectedTopings
    } = props;

    const topings = [
        { name: 'Avocado', price: 1 }, { name: 'Broccoli', price: 1 }, { name: 'Onions', price: 1 }, { name: 'Zucchini', price: 1 },
        { name: 'Lobster', price: 2 }, { name: 'Oyster', price: 2 }, { name: 'Salmon', price: 2 }, { name: 'Tuna', price: 2 },
        { name: 'Bacon', price: 3 }, { name: 'Duck', price: 3 }, { name: 'Ham', price: 3 }, { name: 'Sausage', price: 3 }, 
    ]

    function exitTopings() {
        document.getElementById('toping').style.display = 'none';
    }

    function handleCheckedToping(event) {
        if (event.target.checked) {
            if (selectedTopings.length > 0 && selectedTopings.includes(event.target.value)) {
                return // 
            } else {
                setSelectedTopings(prevTopings => [ event.target.value, ...prevTopings])
            }
        } else {
            setSelectedTopings(prevTopings => {
                if (selectedTopings.includes(event.target.value)) {
                    const topingToRemove = prevTopings.filter(toping => toping !== event.target.value)
                    return topingToRemove;
                }
            })
        }
    }

    let topingPrice = 0;
    function handleAddToCartToping(event) {
        document.getElementById('list-container').classList.add('flex-col')
        document.getElementById('list-container').classList.remove('items-center')

        topings.forEach(toping => {
            selectedTopings.forEach(selected => {
                if (toping.name === selected) {
                    topingPrice += toping.price;
                }
            })
        })

        if (selectedTopings.length === 0) {
            menuToAdd.topings = ['No Topings'];
        } else {
            menuToAdd.topings = selectedTopings;
        }

        menuToAdd.price += topingPrice;

        setAddtoCartBtnClicked(true);
        document.getElementById('toping').style.display = 'none';

        setAddedCart(prevMenu => [
            menuToAdd, ...prevMenu
        ])
    }

    return(
        <div id='toping' className='fixed top-0 left-0 bg-black/[0.7] w-full h-full items-center justify-center hidden'>
            <div className='w-[30rem] bg-slate-50 p-4 flex flex-col justify-between space-y-8'>
                {/* content container */}
                <div className='space-y-4'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-semibold'>Topings</h1>
                        <span onClick={exitTopings}>
                            <svg class="w-4 hover:cursor-pointer bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </span>
                    </div>
                    <form className='grid md:grid-cols-3 md:grid-rows-4 grid-cols-2 space-y-1 md:grid-flow-col'>
                        {topings.map(toping => {
                            return <div className='flex space-x-2 items-center'>
                                <input
                                    className='w-4 h-4 border-[1.5px] border-neutral-600 rounded-sm checked:bg-greeny appearance-none'
                                    type='checkbox' 
                                    value={toping.name}
                                    onChange={handleCheckedToping}
                                />
                                <label className='text-neutral-600'>{toping.name} ( ${toping.price} )</label>
                            </div>
                        })}
                    </form>
                </div>

                <div className='flex justify-end'>
                    <button id='add-to-cart-btn' className='rounded-xl py-4 px-8 text-xl font-bold bg-redBurn hover:-translate-y-1 duration-300 w-fit' onClick={handleAddToCartToping}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}