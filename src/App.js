import './styles/App.scss';

// components
import { Card } from './components/Card';
import { Cart } from './components/Cart';
import { TopingContainer } from './components/TopingContainer';

function App() {

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
          <Card/>
        </div>
      </div>

      {/* Cart */}
      {/* TODO:  figure out how to make cart not fixed when scrolled to the bottom so the menu list can be seen */}
      <div className=''>
        <Cart/>
      </div>

      <div className=''>
        <TopingContainer/>
      </div>

      <div className='bg-layer'>

      </div>

    </body>
  );
}

export default App;
