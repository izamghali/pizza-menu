import './styles/App.scss';

// components
import { Card } from './components/Card';

function App() {
  // grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1

  return (
    <div 
      className="card-container
      flex flex-wrap justify-center gap-10
      border-4 border-blue-400
      h-full lg:w-3/4
      m-6 md:m-10
    "> 

      <Card
      
      />

    </div>
  );
}

export default App;
