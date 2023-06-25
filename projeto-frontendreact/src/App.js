import './App.css';
import React from 'react';
import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import { ProductList } from './Components/assents/productsList';
import { useState } from 'react';

function App() {
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchName, setSearchName] = useState("")
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (itemName) => {
    const updatedCartItems = cartItems.filter(item => item.name !== itemName);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="App">
      <Filters
        searchName={searchName}
        setSearchName={setSearchName}
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
      />
      <Home
        ProductList={ProductList}
        addToCart={addToCart}
      />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
