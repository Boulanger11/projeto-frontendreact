import './App.css';
import React from 'react';
import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import { ProductList } from './Components/assents/productsList';

function App() {
  return (
    <div className="App">
      <Filters />
      <Home 
      ProductList={ProductList}
      />
      <Cart />
    </div>
  );
}

export default App;
