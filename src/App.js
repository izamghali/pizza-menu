import './styles/App.scss';

// components
import { Card } from './components/Card';
import { Cart } from './components/Cart';

function App() {

  return (
    <body className='
      flex flex-col lg:flex-row justify-between
    '>

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
      <div className='
        
      '>
        <Cart/>
      </div>

    </body>
  );
}

export default App;
