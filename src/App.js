import React, { useState } from 'react';
import './styles/App.scss';

// components
import { Card } from './components/Card';
import { Cart } from './components/Cart';
import { TopingModal } from './components/TopingModal';

function App() {

  const [ addedCart, setAddedCart ] = useState([])
  const [ addToCartBtnClicked, setAddtoCartBtnClicked ] = useState(false);

  const menus = [
    {
       title: 'AMERICAN CLASSIC CHEESEBURGER',
       price: 8,
       img: 'https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
       title: 'GRILLED BEEF SUPREME',
       price: 12,
       img: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
       title: 'CHEESY MEATBALL BLAST',
       price: 15,
       img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1981&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <body className='
      flex flex-col lg:flex-row justify-between
    ' id='App'>

      {/* Menu Section */}
      <div className='
        
        h-screen w-full 
        py-6 lg:pl-6 px-6
        overflow-scroll
      '>
        <h2 className='heading-text mb-3 lg:text-left text-center'>Pizza List</h2>
        <div 
          className="card-container
          flex flex-wrap lg:justify-start justify-center gap-10
        ">
          {menus.map(card => {
            return <Card 
              addedCart={addedCart} setAddedCart={setAddedCart}

              title={card.title}
              price={card.price}
              img={card.img}
            />
          })}
        </div>
      </div>

      {/* Cart */}
      {/* TODO:  figure out how to make cart not fixed when scrolled to the bottom so the menu list can be seen */}
      <div className=''>
        <Cart
          addedCart={addedCart} addToCartBtnClicked={addToCartBtnClicked}
        />
      </div>

      <div className=''>
        {/* {topings.map(toping => {
          return <TopingModal 
            topingName={toping.name}
            topingPrice={toping.price}
          />
        })} */}
        <TopingModal 
          setAddtoCartBtnClicked={setAddtoCartBtnClicked}
        />
      </div>

    </body>
  );
}

export default App;
