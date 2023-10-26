import './styles/App.scss';

// components
import { Card } from './components/Card';
import { Cart } from './components/Cart';

function App() {
  // grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1

  // p-6 lg:pl-10 lg:pr-0 lg:py-0
  return (
    <body className='
      flex flex-col lg:flex-row justify-between
    '>

      {/* Menu Section */}

      <div className='
        border-4 border-violet-800
        h-screen w-full 
        py-6 pl-6
        overflow-scroll
      '>
        <h2 className='heading-text mb-5 lg:text-left text-center'>Pizza List</h2>
        <div 
          className="card-container
          flex flex-wrap lg:justify-start justify-center gap-10
        ">
          <Card/>
        </div>
      </div>

      {/* Cart */}
      <div>
        <Cart/>
      </div>

    </body>
  );
}

export default App;
