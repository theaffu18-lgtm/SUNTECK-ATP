import './App.css';
import Products from './components/Products';

function App(){

  return(
    <div className="text-center border-2 p-10 bg-gray-200 min-h-screen">

      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        My Store
      </h1>

      <Products/>

    </div>
  )
}

export default App;